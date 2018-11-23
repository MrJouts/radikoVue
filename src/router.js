import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Productos from './views/Productos.vue'
import Contacto from './views/Contacto.vue'
import Categorias from './views/Categorias.vue'
import Marcas from './views/Marcas.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/productos',
      name: 'productos',
      component: Productos
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: Contacto
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: Categorias
    },
    {
      path: '/marcas',
      name: 'marcas',
      component: Marcas
    }
  ]
})
