<template>
    <div class="user-head">
        <!-- <img src="../../assets/img/user_bg.png" alt=""> -->
        <div class="user-message">
            <div class="user-message-img">
                <a @click="toLogin">
                    <img src="../../assets/img/user.png" alt="">
                </a>
            </div>
            <div class="user-message-text">
                <p class="userName">吃瓜群众</p>
                <span class="integral">积分：100</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        toLogin(){
            let token = this.$store.state.token;
            if(token == ""){
                this.$router.push('/login')
            }
        }
    }
}
</script>
<style>

</style>
