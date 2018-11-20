<template>
    <div id="login">
        <Head>用户登录</Head>
        <div class="login-main">
            <div class="login-from">
                <div class="user-id-box">
                    <input type="text"  class="user-id" v-model="userId" placeholder="用户名/邮箱/已验证手机">
                </div>
                <div class="password-box">
                    <input type="password" class="user-password" v-model="userPas" placeholder="请输入密码（随便输）"> | 忘记密码
                </div>
            </div>
            <div class="btn-box">
                <button :class="userId.length&userPas.length?'login-btn active':'login-btn'"  @click="loginFn" :disabled="!(userId.length&userPas.length)">登陆</button>
                <button class="one-key-login">一键登录</button>
            </div>
            <div class="login-sub">
                <span class="message-login">短信验证码登陆</span>
                <router-link to="/register" class="num-register">手机快速注册</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import Head from '@/components/common/header';
import router from '../router';
export default {
    data(){
        return{
            a:false,
            userId:'13500000000',
            userPas:'',
            fromPath:''
        }
    },
    created(){
        router.beforeEach((to,from,next) => {
            // console.log(to)
            next()
        })
    },
    components:{
        Head
    },
    methods:{
        loginFn(){
            axios.post('https://api.it120.cc/small4/user/m/login/','mobile='+this.userId+'&pwd='+this.userPas+'&deviceId=123321&deviceName=HEIWEI')
            .then(res => {
                console.log(res)
                alert('登陆成功!');
                this.saveCookie("userToken",res.data.data.token,3)
                this.$store.commit('setUserToken',res.data.data.token);//保存token
                // this.$router.push(this.fromPath)
                this.$router.push('/index/user')
            })
        },
        //保存cookie
        //参数：cookie名,cookie值,有效时长(单位：天)
        saveCookie(cookieName,cookieValue,cookieDates){
            var d = new Date();
            d.setDate(d.getDate()+cookieDates);
            document.cookie = cookieName+"="+cookieValue+";expires="+d.toGMTString();
        }
    }
}
</script>