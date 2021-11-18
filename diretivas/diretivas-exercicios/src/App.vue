<template>
	<div id="app">
		<h1>Diretivas</h1>
		<p v-destaque="'pink'" >Using a custom directive</p>
		<p v-destaque-local="'red'" >Using a custom directive 1</p>
		<p v-destaque:fundo="'pink'" >Using a custom directive 2</p>
		<p v-destaque:fundo.atrasar="'pink'" >Using a custom directive 3</p>
		<p v-destaque-local.atrasar.alternar="'red'" >Using a custom directive 4</p>
	</div>
</template>

<script>
export default {
	directives: {
		'destaque-local': {
			bind(el, biding, vnode) {

				const aplicarCor = cor => {
					if (biding.arg === 'fundo') {
						el.style.backgroundColor = cor
					} else {
						el.style.color = cor
					}
				}

				let atraso = 0

				if (biding.modifiers['atrasar']) atraso = 3000

				let cor1 = biding.value
				let cor2 = 'purple'
				let corAtual = cor1

				setTimeout(() => {
					if (biding.modifiers['alternar']) {
						setInterval(() => {
							corAtual = corAtual === cor1 ? cor2 : cor1
							aplicarCor(corAtual)
						}, 1000)
					} else {
						aplicarCor(corAtual)
					}					
				}, atraso)
			}
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
