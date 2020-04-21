import Vue from 'vue'
import router from './router'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


axios.defaults.baseURL = '/api';
axios.defaults.timeout = 5000;


axios.interceptors.response.use(function (response) {
  let res = response.data;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    window.location.href = '/#/login';

  } else {
    alert(res.msg);
  }
});


Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
  //确保和属性名称一样 
  router,
  render: h => h(App),
}).$mount('#app')
