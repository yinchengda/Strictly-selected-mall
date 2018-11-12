<template>
    <div class="shop-message">
            <div class="text-box">
                <h3 class="title">{{infoData?infoData.name:''}}</h3>
                <p class="describe">{{infoData?infoData.characteristic:''}}</p>
                <div class="shop-price">
                    <div class="price-box">
                        <span class="min-price">
                           <span class="zprice">￥{{infoData?infoData.minPrice:''}}</span>
                        </span>
                        <span class="zold-price">
                            ￥{{infoData?infoData.originalPrice:''}}
                        </span>
                    </div>
                    <div class="zstore">
                        已售 {{infoData?infoData.minScore:''}}
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    computed:{
        infoData(){
            return this.$store.getters.shopInfoData.basicInfo
        },
    },
}
</script>