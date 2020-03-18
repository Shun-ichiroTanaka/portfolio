import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Myworks from './views/Myworks.vue'
import Work1 from "./components/works/Work1.vue";
import Work2 from "./components/works/Work2.vue";

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/works",
      name: "myworks",
      component: Myworks
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Contact.vue")
    },
    {
      path: "/shops",
      name: "shop",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Shops.vue")
    },
    {
      path: "/suggest",
      name: "suggest",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Suggest.vue")
    },
    {
      path: "/hover",
      name: "hover",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Hover.vue")
    },
    {
      path: "/work1",
      name: "work1",
      component: Work1
    },
    {
      path: "/work2",
      name: "work2",
      component: Work2
    },
  ]
});
