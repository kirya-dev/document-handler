import Vue from 'vue'
import App from './App.vue'

import wysiwyg from 'vue-wysiwyg'
Vue.use(wysiwyg, {})

import 'vue-wysiwyg/dist/vueWysiwyg.css'

new Vue({
  el: '#app',
  render: h => h(App)
})
