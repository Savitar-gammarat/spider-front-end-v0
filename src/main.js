import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import axios from 'axios'

Vue.use(VueMaterial)
Vue.config.productionTip = false
axios.defaults.baseURL = "http://127.0.0.1:5000/api/v0"

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
