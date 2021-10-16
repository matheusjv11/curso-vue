new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        monsterLife: 100,
        logs: []
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods: {
        startGame() {
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
            this.logs = []
        },
        attack(especial) {
            this.hurt('playerLife', 7, 12, false)

            if (this.monsterLife > 0) {
                this.hurt('monsterLife', 5, 10, especial)
            }
        },
        hurt(prop, min, max, especial) {
            const plus = especial ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[prop] = Math.max(this[prop] - hurt, 0)
            this.registerLog(...this.getLogInfo(hurt, prop))
        },
        healAndHurt() {
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false)
        },
        heal(min, max) {
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.registerLog(`O jogador ganhou força de ${heal}`, 'player')
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        registerLog(text, cls) {
            this.logs.unshift({ text, cls })
        },
        getLogInfo(hurt, prop) {
            
            let text = ''
            let cls = ''
            
            if (prop == 'playerLife') {
                text = `O Monstro atingiu o Player com ${hurt}.`
                cls = 'monster'
            } else {
                text = `O Player atingiu o monstro com ${hurt}.`
                cls = 'player'
            }

            return [
                text,
                cls
            ]
        }
    },
    watch: {
        hasResult(value) {
            if (value) this.running = false
        }
    }
})