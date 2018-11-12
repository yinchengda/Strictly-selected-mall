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
        <button class="purchase-now">
            <router-link to="/confirmOrder">
                立即购买
            </router-link>
        </button>
        <button class="add-shopcar">
            加入购物车
        </button>
        <span class="shopcar-count">1</span>
    </footer>
</template>
<script>
export default {
    methods:{
        setShop(){
            this.$store.state
        }
    }
    
}
</script>
<style scoped>
</style>
