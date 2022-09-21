import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import authRouter  from '../modules/auth/router'
import ExitsRouter  from '../modules/Exits/router'
import ArticlesRouter  from '../modules/Articles/router'
import store from '@/store'

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
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/auth',
    ...authRouter


  },
  {
    path: '/exits',
      beforeEnter: async (to, from, next) => {
        const { ok } = await store.dispatch('auth/checkAuthentication')
        if ( ok ) next()
        else next({ name: 'login' })
    },
    ...ExitsRouter


  },
  {
    path: '/articles',
   
      beforeEnter: async (to, from, next) => {
        const { ok } = await store.dispatch('auth/checkAuthentication')
        if ( ok ) next()
        else next({ name: 'login' })
    },
    ...ArticlesRouter


  },

]

const router = new VueRouter({
  routes
})

export default router
