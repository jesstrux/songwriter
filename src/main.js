import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = true

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
