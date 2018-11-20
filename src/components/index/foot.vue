<template>
    <footer>
        <ul>
            <li>
                <router-link to="/index" exact>
                <i class="iconfont icon-home"></i>
                <span>首页</span>
                </router-link>
            </li>
            <li>
                <router-link to="/index/classify">
                <i class="iconfont icon-drawer2chouti"></i>
                <span>分类</span>
                </router-link>
            </li>
            <li>
                <router-link to="/index/shopcar">
                <i class="iconfont icon-shop_cart"></i>
                <span>购物车</span>
                </router-link>
            </li>
            <li @click="userFn">
                <router-link to="/index/user">
                    <i class="iconfont icon-icon-user"></i>
                    <span>我的</span>
                </router-link>
            </li>
        </ul>
    </footer>    
</template>
<script>
export default {
    methods:{
        userFn(){
            let token = this.$store.state.token;
            if(token == ""){
                let login = confirm('登陆后才能查看个人信息哦,\n您要去登陆吗？');
                if(login){
                    this.$router.push('/login');
                }else{
                    this.$router.push('/index');
                }
            }
        }
    }
}
</script>
