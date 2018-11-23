<template>
    <div id="order-info">
        <Head>订单详情</Head>
        <div class="order-status">
            <div class="icon-box">
                <span class="iconfont-bg">
                    <i class="iconfont icon-hongbao"></i>
                </span>
            </div>
            <div class="order-status-text">
                待支付
            </div>
        </div>
        <div class="courier-number">
            <div class="icon-box">
                <i class="iconfont icon-wuliu"></i>
            </div>
            <div class="text">
                <p class="title-num">快递单号: 暂无快递单号</p>
                <p class="info">暂无物流信息</p>
            </div>
        </div>
        <div class="courier-number">
            <div class="icon-box">
                <i class="iconfont icon-dizhi1"></i>
            </div>
            <div class="text">
                <p class="title-num">啊哈哈 16601119346</p>
                <p class="info">八里桥小山沟</p>
            </div>
        </div>

        <div class="order-shop-message">
            <div class="title">
                商品详情
            </div>
            <div class="shop-list">
                <div class="item">
                    <div class="img-box">
                        <img src="" alt="" />
                    </div>
                    <div class="text">
                        <div class="shop-price-title">
                            <p class="shop-title">
                            透气呼吸纱四件套【测试商品，不发货】
                            </p>
                            <span>￥0.01</span>
                        </div>
                        <div class="shop-drescribe">
                            <span class="shop-type">测试规格:测试1</span>
                            <span>×1</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Head from '@/components/common/header';
export default{
    components:{
        Head
    }
}
</script>

<style>

</style>