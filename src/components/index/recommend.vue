<template>

<!-- <div class="new-arryval">
    <img src="../../assets/img/new_arryval.png" alt="" />
</div> -->
    <div class="recommend">
        <div class="title">
            人气推荐
            <i class="iconfont icon-jiantouyoubian"></i>
        </div>
        <div class="recommend-main ">
            <div class="recommend-item" v-for="(item,i) in data" :key="i" v-if="item.recommendStatusStr == '推荐'">
                <div class="img-box">
                    <router-link :to="'/shopInfo/'+item.id">
                        <img :src="item.pic" alt="">
                    </router-link>
                </div>
                <div class="item-text">
                    
                    <h3 class="item-topices">
                        {{item.name}}
                    </h3>
                    <p class="item-describe">
                        {{item.characteristic}}
                    </p>
                    <p class="item-price">
                        ￥{{item.minPrice}} 
                    </p>

                </div>
            </div>
            
            <!-- 模板 -->
            <!-- <div class="recommend-item">
                <div class="img-box">
                    <img src="../../assets/img/recommend-item4.png" alt="">
                </div>
                <div class="item-text">
                    
                    <h3 class="item-topices">
                        清欢素雅小程序模板（API工厂授权）
                    </h3>
                    <p class="item-describe">
                        全场模板使用优惠券立减88元
                    </p>
                    <p class="item-price">
                        ￥299 
                    </p>

                </div>
            </div> -->
        </div>
    </div>    
</template>
<script>
export default {
    computed:{
        data(){
            return this.$store.getters.shopData;
        }
    }
}
</script>

