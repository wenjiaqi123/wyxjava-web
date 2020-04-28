// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//Vuex
import {store} from './tools/store'
//axios 请求
import axios from 'axios'
//iview样式
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
//加密
import Base64 from "js-base64";
import Md5 from "js-md5";
//兄弟组件传值
import Bus from "@/tools/bus";

Vue.config.productionTip = false

//全局配置axios，就是网页js请求的url路径
axios.defaults.baseURL = "http://localhost:18080/admin"
// axios.defaults.baseURL = "http://47.92.69.137:3000/mock/16/admin"

axios.defaults.headers = {
  "Content-Type": "application/json;charset=utf-8"
};

//添加原型对象,组件中可以直接使用this.axios
Vue.prototype.axios = axios;
//引入加密
Vue.prototype.Base64 = Base64;
Vue.prototype.Md5 = Md5;
//组件传值
Vue.prototype.Bus = Bus;
//Vuex
Vue.prototype.Store = store;

//使用IView样式
Vue.use(ViewUI)

//iView 通知设置
Vue.prototype.$Notice.config({
  top: 300,
  duration: 3
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store:store,
  router,
  render: h => h(App),
  components: {App},
  template: '<App/>'
})
