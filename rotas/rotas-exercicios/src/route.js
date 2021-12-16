import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/inicio'


/* import Usuario from './components/usuario/Usuario'
import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioEditar from './components/usuario/UsuarioEditar' */

// Para carregar separadamente:

// Cara carregar no mesmo arquivo
const Usuario = () =>  import(/* webpackChunkName: "usuario" */'./components/usuario/Usuario')
const UsuarioLista = () =>  import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioLista')
const UsuarioDetalhe = () =>  import('./components/usuario/UsuarioDetalhe')
const UsuarioEditar = () =>  import('./components/usuario/UsuarioEditar')

Vue.use(Router)

const router = new Router({
    mode: 'hash',
    scrollBehavior(to, from, savedPosition) {
        if(savedPosition) {
            return savedPosition
        }

        if(to.hash) {
            return { selector: to.hash}
        }

        return { x: 0, y: 0}
    },
    routes: [{
        path: '/',
        component: Inicio
    },  {
        path: '/usuario',
        component: Usuario,
        props: true,
        children: [
            {path: '', component: UsuarioLista},
            {path: ':id', component: UsuarioDetalhe, props: true, beforeEnter: (to, from, next) => {
                console.log("antes -> usuario")
                next()
            }},
            {path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario'},
        ]
    }, {
        path: '/redirecionar',
        redirect: '/usuario'
    }, {
        path: '*',
        redirect: '/'
    }]
})

router.beforeEach((to, from, next) => {
    console.log("antes -> global")
    next()
})

export default router