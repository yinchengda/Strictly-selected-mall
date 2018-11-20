<template>
    <div id="group-shop-message">
        <div class="text-box">
            <h3 class="title">{{data.basicInfo?data.basicInfo.name:''}}</h3>
            <p class="describe">{{data.basicInfo?data.basicInfo.characteristic:''}}</p>
            <div class="shop-price">
                <div class="price-box">
                    <span class="min-price">
                        拼团价￥
                        <span class="price">{{data.basicInfo?data.basicInfo.pingtuanPrice:""}}</span>
                    </span>
                    <span class="old-price">
                        <span class="num"><span>2</span>人团</span>
                        <span class="_不换行">原价￥{{data.basicInfo?data.basicInfo.originalPrice:""}}</span> 
                    </span>
                </div>
                <div class="store">
                    已团 {{data.basicInfo?data.basicInfo.stores:''}}
                </div>
            </div>
        </div>
        <div class="group-process">
            <div class="title">
                拼团流程
            </div>
            <div class="process-main">
                <span>
                    <i class="iconfont icon-qian"></i>
                    支付开团或参团
                </span>
                <span>
                    <i class="iconfont icon-haoyou"></i>
                    邀请好友一起拼团
                </span>
                <span>
                    <i class="iconfont icon-daishouhuo"></i>
                    达到人数分别发货
                </span>
                <span>
                    <i class="iconfont icon-tuikuan"></i>
                    人数不够自动退款
                </span>
            </div>
        </div>
        <div class="group-select-type">
           <div class="standard">
               <span>选择规格：</span>
               <span>选择规格</span>
               <span></span>
           </div>
           <i class="iconfont icon-youbianjiantou"></i>
        </div>
    </div>
</template>
<script>
export default {
    computed:{
        data(){
            return this.$store.getters.shopInfoData
        }
    }
}
</script>