<template>
    <footer class="shop-info-foot">
        <a>
            <i class="iconfont icon-kefu"></i>
        </a>
        <router-link to="/index/shopcar">
            <i class="iconfont icon-shop_cart"></i>
        </router-link>
        <a>
            <i class="iconfont icon-xingxingkongxin"></i>
        </a>
        <button class="purchase-now" @click="toggleShade('立即购买')">
                立即购买
        </button>
        <button class="add-shopcar" @click="toggleShade('加入购物车')">
            加入购物车
        </button>
        <span class="shopcar-count">1</span>

        <!-- -.-|||  这个 暂时不搞了-->
        <div class="seccuss-ok" v-if="this.$store.state.shopInfo.access_ok">加入购物车成功</div>

    </footer>
</template>
<script>
export default {
    data(){
        return {
            shadeShow:true,
            okShow:false
        }
    },
    methods:{
        setShop(){
            this.$store.state
        },
        toggleShade(sl){
            this.$store.commit('toggleLazyShow',sl);
        },
        showOK(){
            this.okShow = true;
            setTimeout(()=>{
                this.okShow = false;
            },1000)
        }
        
    }
}
</script>
<style scoped>
</style>
