<template>
    <div id="discount-coupon">
        <Head>&nbsp;</Head>
        <div class="discount-main">
            <div class="discount-inp">
                <input type="text" placeholder="请输入礼券码" />
                <button>兑换</button>
            </div>
            <div class="discount-item">
                <div class="discount-message">
                    <div class="discount-price">
                        <span class="price">5</span>
                        元
                    </div>
                    <div class="discount-item-text">
                        <p class="discount-descirbe">上面口令输入 麎嚫嚱</p>
                        <p class="use-condition">满288元使用</p>
                    </div>
                    <div class="discount-item-right">
                        <a>
                            <span>立即领取</span>
                        </a>
                    </div>
                </div>
                <div class="discount-indate">
                    领取10天内有效
                </div>
            </div>
<div class="discount-item">
                <div class="discount-message">
                    <div class="discount-price">
                        <span class="price">10</span>
                        元
                    </div>
                    <div class="discount-item-text">
                        <p class="discount-descirbe">20积分兑换超值礼券</p>
                        <p class="use-condition">满99元使用</p>
                    </div>
                    <div class="discount-item-right">
                        <a>
                            <span class="bug">立即领取</span>
                        </a>
                    </div>
                </div>
                <div class="discount-indate">
                    领取10天内有效
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Head from "@/components/common/header";
export default{
    components:{
        Head
    }
}
</script>