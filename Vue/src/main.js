import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'

Vue.config.productionTip = false;
Vue.use(BootstrapVue)

new Vue({
  store,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

