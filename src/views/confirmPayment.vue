<template>
    <div class="confirm-payment">
        <Head>确认付款</Head>
        <div class="confirm-main">
            <div class="confirm-item">
                <div class="icon-box">
                    <i class="iconfont icon-qian"></i>
                </div>
                <div class="order-message">
                    <p class="shop-all-price">
                        商品总额：
                        <span class="price">￥998</span>
                    </p>
                    <p class="order-num">
                        订单号：OD1217658313681648120
                    </p>
                </div>
            </div>
            <div class="confirm-item">
                <div class="icon-box">
                    <i class="iconfont icon-dizhi"></i>
                </div>
                <div class="order-message">
                    <p class="shop-all-price">
                        张三
                        12345678
                    </p>
                    <p class="order-num">
                        八里桥小山沟
                    </p>
                </div>
            </div>
        </div>
        <div class="foot">
            微信支付￥999
        </div>
    </div>
</template>
<script>
import Head from '@/components/common/header';
export default {
    components:{
        Head
    }
}
</script>