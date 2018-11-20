// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import store from './store/store.js';
import VueLazyload from 'vue-lazyload';//图片懒加载
import 'swiper/dist/css/swiper.min.css';
import Navigation from 'vue-navigation';
import './config/index';
// console.log(global.globalData)
//路由动画
// 图片懒加载配置
Vue.use(VueLazyload, {
  preLoad: 1.3, // 预加载高度比例
  error: '/static/timg4.gif', // 图片路径错误时加载图片
  loading: '/static/timg4.gif', // 预加载图片
  attempt: 1, // 尝试加载图片数量
  // set observer to true
  observer: true,
  // optional
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1
  }
})
Vue.use(Navigation, {router})
Vue.config.productionTip = false;
/* eslint-disable no-new */
// Vue.prototype.$axios = axios; //...
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
