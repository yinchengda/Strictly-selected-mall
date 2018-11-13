<template>
    <div id="my-order-list">
        <Head>我的订单</Head>
        <nav id="order-list-nav">
            <span class="active">待付款</span>
            <span>代发货</span>
            <span>待收货</span>
            <span>待评价</span>
            <span>已完成</span>
        </nav>
        <div class="order-main">
            <div class="order-item">
                <div class="order-title">
                    <span class="order-time">
                        下单时间：2018-11-13-14:35:66
                    </span>
                    <span class="order-status">
                        待支付
                    </span>
                </div>
                <div class="order-number">
                    订单号：OD129414912840127086
                </div>
                <div class="item-order-message">
                    <img src="../assets/img/recommend-item1.png" alt=""/>
                </div>
                <div class="order-item-foot">
                    <span class="order-all-price">合计：￥998</span>
                    <div class="btn-box">
                        <button class="clear-order">取消订单</button>
                        <button class="pay-now-order">立即支付</button>
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
