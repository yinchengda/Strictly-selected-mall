<template>
    <div class="user-tool">
        <div class="tool-item tool-balance">
            <a href="javascript:">
                <i class="iconfont icon-qian balance"></i>
                <p class="txt">我的余额</p>
                <p class="money">0元</p>
            </a>
        </div>
        <div class="tool-item tool-cutprice">
            <a href="javascript:">
                <i class="iconfont icon-kanjia cutprice"></i>
                <p class="txt">我的砍价</p>
            </a>
        </div>
        <div class="tool-item tool-Coupons">
            <router-link to="/discount">
                <i class="iconfont icon-jieritouziliquan Coupons"></i>
                <p class="txt">我的礼券</p>
            </router-link>
        </div>
        <div class="tool-item tool-collect">
            <a href="javascript:">
                <i class="iconfont icon-xingxingkongxin collect"></i>
                <p class="txt">我的收藏</p>
            </a>
        </div>
        <div class="tool-item tool-site">
            <router-link to="/mySite">
                <i class="iconfont icon-dizhi site"></i>
                <p class="txt">我的地址</p>
            </router-link>
        </div>
        <div class="tool-item tool-customerservice">
            <a href="javascript:">
                <i class="iconfont icon-kefu customerservice"></i>
                <p class="txt">联系客服</p>
            </a>
        </div>
        <div class="tool-versions">
            <p>清欢严选v2.2.0</p>
        </div>
    </div>
</template>
<script>
    
</script>
<style>

</style>
