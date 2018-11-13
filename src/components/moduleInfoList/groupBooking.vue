<template>
    <div class="group-booking-list">
        <div class="group-shop-item" v-for="(item,i) in idata" :key="i" v-if="item.pingtuan">
            <div class="img-box">
                <img :src="item.pic" alt=""/>
            </div>
            <div class="group-shop-message">
                <p class="shop-title">
                    {{item.name}}
                </p>
                <p class="describe">{{item.characteristic}}</p>
                <p class="group-count">
                    已团
                    <span class="count">{{item.minScore}}</span>
                    件
                </p>
                <p class="buy-alone">
                    单独购买
                    <span class="alone-price">￥{{item.originalPrice}}</span>
                </p>
                <div class="group-info">
                    <span class="number-people ">
                        2人团￥
                        <span class="price">{{item.pingtuanPrice}}</span>
                    </span>
                    <span class="go-group">去拼团</span>

                </div>
            </div>
        </div>
        <!-- 模板 -->
        <!-- <div class="group-shop-item">
            <div class="img-box">
                <img src="../../assets/img/group_item1.png" alt=""/>
            </div>
            <div class="group-shop-message">
                <p class="shop-title">
                    严选商城小程序模板（叽里呱啦呱啦叽哩）
                </p>
                <p class="describe">全场模板使用优惠券立减88元</p>
                <p class="group-count">
                    已团
                    <span class="count">584</span>
                    件
                </p>
                <p class="buy-alone">
                    单独购买
                    <span class="alone-price">￥299</span>
                </p>
                <div class="group-info">
                    <span class="number-people ">
                        2人团￥
                        <span class="price">289</span>
                    </span>
                    <span class="go-group">去拼团</span>

                </div>
            </div>
        </div> -->
    </div>
</template>
<script>
export default {
    computed:{
        idata(){
            return this.$store.getters.shopData;
        }
    },
    mounted(){
        console.log(this.idata)
    }
}
</script>