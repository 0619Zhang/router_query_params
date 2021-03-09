import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'H',
    component: Home
  },
  {
    path: '/about',
    name: 'A',
    component:About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
