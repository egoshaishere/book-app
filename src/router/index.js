import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //ДИНАМИЧЕСКИЙ ИМПОРТ ДЛЯ ОПТИМИЗАЦИИ??????
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/vue',
    name: 'vue',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //ДИНАМИЧЕСКИЙ ИМПОРТ ДЛЯ ОПТИМИЗАЦИИ??????
    component: () => import(/* webpackChunkName: "about" */ '../views/VueView.vue')
  },
  {
    path: '/vuex',
    name: 'vuex',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //ДИНАМИЧЕСКИЙ ИМПОРТ ДЛЯ ОПТИМИЗАЦИИ??????
    component: () => import(/* webpackChunkName: "about" */ '../views/VuexView.vue')
  },
  {
    path: '/ideas',
    name: 'ideas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //ДИНАМИЧЕСКИЙ ИМПОРТ ДЛЯ ОПТИМИЗАЦИИ??????
    component: () => import(/* webpackChunkName: "about" */ '../views/IdeasView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
