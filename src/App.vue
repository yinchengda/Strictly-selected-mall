<template>
  <div id="app">
     <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
import {rem} from './utils/rem';
import './assets/app.scss';

export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  created(){
    if(this.$store.state.token){return};
    // console.log('这步应该只走一次.')
    let token = this.getCookie("userToken");
    if(token){
      this.$store.commit("setUserToken",token)
    }
  },
  mounted() {
    //一下代码会输出什么结果？为什么？
    /*
      console.log('1');
      setTimeout(function () {
        console.log('2');
        process.nextTick(function () {
          console.log('3');
        })
        new Promise(function (resolve) {
          console.log('4');
          resolve();
        }).then(function () {
          console.log('5')
        })
      })
      process.nextTick(function () {
        console.log('6');
      })
      new Promise(function (resolve) {
        console.log('7');
        resolve();
      }).then(function () {
        console.log('8')
      })

      setTimeout(function () {
        console.log('9');
        process.nextTick(function () {
          console.log('10');
        })
        new Promise(function (resolve) {
          console.log('11');
          resolve();
        }).then(function () {
          console.log('12')
        })
      })
    */
   
  },
  //监听路由的路径，可以通过不同的路径去选择不同的切换效果
  watch: {
    '$route' (to, from) {
      if(to.path == '/'){
        this.transitionName = 'slide-right';
      }else{
        this.transitionName = 'slide-left';
      }
    }
  },
  methods:{
    //获取cookie
  getCookie(cookieName){
    var cookieStr = unescape(document.cookie);
    var arr = cookieStr.split("; ");
    var cookieValue = "";
    for(var i=0;i<arr.length;i++){
      var temp = arr[i].split("=");
      if(temp[0]==cookieName){
        cookieValue = temp[1];
        break;
      }
    }
    return cookieValue;
  }
  }
}
</script>

<style>
.child-view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>