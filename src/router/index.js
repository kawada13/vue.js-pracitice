import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mon from '../views/Mon.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/taka',
    name: 'taka',
    component: () => import(/* webpackChunkName: "about" */ '../views/Taka.vue')
  },
  {
    path: '/poyo',
    name: 'poyo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Poyo.vue'),
    children: [
      {
        path: 'mon',
        name: 'mon',
        component: Mon
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
