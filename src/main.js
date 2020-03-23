import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import axios from "./api/api.js"
import "./scss/index.scss"
import store from "./store/index"
// import "./components/global/global.js"
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(axios)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
