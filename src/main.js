// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
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

// //全局守卫
// router.beforeEach((to, from, next) => {
//   // if(to.path == "/index/user"){
//   //   let token =getCookie("userToken") ;
//   //   if(token == ""){
//   //       let login = confirm('登陆后才能查看个人信息哦,\n您要去登陆吗？');
//   //       if(login){
//   //           router.push('/login');
//   //       }else{
//   //           return;
//   //       }
//   //   }else{
//   //     next();
//   //     return;
//   //   }
//   // }
//   next()
// })
// //获取cookie
// function  getCookie(cookieName){
//     var cookieStr = unescape(document.cookie);
//     var arr = cookieStr.split("; ");
//     var cookieValue = "";
//     for(var i=0;i<arr.length;i++){
//       var temp = arr[i].split("=");
//       if(temp[0]==cookieName){
//         cookieValue = temp[1];
//         break;
//       }
//     }
//     return cookieValue;
//   }

/* eslint-disable no-new */
// Vue.prototype.$axios = axios; //...
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
