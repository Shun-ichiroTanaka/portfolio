import Vue from 'vue'
import Router from 'vue-router'
import Top from './views/Top.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/home',
      name: 'home',
      component: () => import( /* webpackChunkName: "about" */ './views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/works',
      name: 'Myworks',
      component: () => import(/* webpackChunkName: "about" */ './views/Myworks.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "about" */ './views/Contact.vue')
    },
  ]
})
