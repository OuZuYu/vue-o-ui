import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './scss/index.scss';

import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css' //样式文件
Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

import OUi from './../packages/index'

Vue.use(OUi)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
