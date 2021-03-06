// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import VueVirtualScroller from 'vue-virtual-scroller'

// NOTE: process.env.DEBUG is read from config/dev.env.js or config/prod.env.js
// Use this.$debug in your code further
Vue.prototype.$debug = process.env.DEBUG

Vue.config.errorHandler = (err, vm, info) => {
  alert(err)
}

window.onerror = function (message, source, lineno, colno, error) {
  alert(error, message)
}

Vue.use(VueVirtualScroller)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
