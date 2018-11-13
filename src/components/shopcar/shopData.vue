<template>
    <div class="shop-data-list">
        <div class="shop-item" v-for="(item, i) in shopCartList" :key="i">
            <div class="checked-box">
                <input type="checkbox" @click="checkedFn(item.goodsId)" :checked="item.checked"/>
            </div>
            <div class="shop-message">
                <div class="img-box">
                    <img :src="item.pic" />
                </div>
                <div class="shop-text">
                    <p class="shop-title">{{item.name}}</p>
                    <p class="shop-type">{{item.typeTxt}}</p>
                    <div class="shop-price-action">
                        <span class="price">
                            ￥{{item.price}}
                        </span>
                        <div class="action-box">
                            <button class="shop-minus" @click="minusCount(item.goodsId,item.number)">-</button>
                            <span class="shop-count">{{item.number}}</span>
                            <span class="add" @click="addCount(item.goodsId)">+</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    computed:{
        shopCartList(){
            return this.$store.getters.shopCartList
        }
    },
    created(){
        this.$store.commit('getLocationShopData');
    },
    methods:{
        addCount(id){
            this.$store.commit('addCount',id)
        },
        minusCount(id,num){
            num <= 1?"":this.$store.commit('minusCount',id)
        },
        checkedFn(id){
            this.$store.commit('checkedToggle',id)
        }
        
    }
}
</script>

