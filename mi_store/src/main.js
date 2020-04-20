import Vue from 'vue'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  //确保和属性名称一样 
  router,
  render: h => h(App),
}).$mount('#app')
