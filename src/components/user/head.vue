<template>
    <div class="user-head">
        <!-- <img src="../../assets/img/user_bg.png" alt=""> -->
        <div class="user-message">
            <div class="user-message-img">
                <a @click="toLogin" id="login_user">
                    <img src="../../assets/img/food.gif" alt="">
                </a>
            </div>
            <div class="user-message-text">
                <p class="userName">吃瓜群众</p>
                <span class="integral">积分：100</span>
            </div>
        </div>
        <div id="user-prompt">
            <p>你已经登陆了</p>
        </div>
    </div>
</template>
<script>
import loginFn from '../../utils/login-animate';
export default {
    methods:{
        toLogin(){
            let token = this.$store.state.token;
            if(token == ""){
                this.$router.push('/login')
            }
        }
    },
    mounted(){
        loginFn()
    }
}
</script>
<style>

</style>
