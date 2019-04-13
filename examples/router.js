import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'picker',
      component: () => import('./views/home/index.vue'),
      children: [{
        path: 'picker',
        name: 'picker',
        component: () => import('./views/picker/index.vue')
      }, {
        path: 'icon',
        name: 'icon',
        component: () => import('./views/icon/index.vue')
      }, {
        path: 'popup',
        name: 'popup',
        component: () => import('./views/popup/index.vue')
      }, {
        path: 'loading',
        name: 'loading',
        component: () => import('./views/loading/index.vue')
      }, {
        path: 'steps',
        name: 'steps',
        component: () => import('./views/steps/index.vue')
      }]
    }
  ]
})
