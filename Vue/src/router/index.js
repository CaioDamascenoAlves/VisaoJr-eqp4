import Vue from 'vue'
import VueRouter from 'vue-router'
import PrincipalView from '../views/PrincipalView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'principal',
    component: PrincipalView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
