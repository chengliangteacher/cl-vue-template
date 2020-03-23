import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import v1Layout from "../views/v1/layout/layout.vue"
import v1View from "./v1/index"

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/v1",
    name: "v1Layout",
    component: v1Layout,
    children: [
      {
        path: "test",
        name: "test",
        component: () => import('../views/v1/test/test.vue')
      },
      ...v1View
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
