<template>
    <!-- 直接拿的recommend的style... -->
    <div class="recommend">
        <div class="title">
            猜你喜欢
        </div>
        <div class="recommend-main cai-like">
            <div class="recommend-item" v-for="(item,i) in data" :key="i" v-if="i<4">
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
