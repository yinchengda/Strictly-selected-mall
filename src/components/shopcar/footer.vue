<template>
    <div class="shop-cart-footer">
        <div class="footer-left">
            <input type="checkbox" v-model="allCheck" @click="allCheckedToggle"/>
            全选
        </div>
        <div class="footer-right">
            <div class="all-price-box" v-if="!this.$store.state.shopCar.btnDel">
                合计： ￥{{allPrice}}
            </div>
            <a class="down-order">
                <button v-if="!this.$store.state.shopCar.btnDel" :class="orderOk?'active':''" :disabled="!orderOk" @click="placeAnOrder">下单</button>
                <button @click="removeShop" v-if="this.$store.state.shopCar.btnDel" :class="orderOk?'active':''" :disabled="!orderOk">删除</button>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            allCheck:false
        }
    },
    computed:{
        shopCartList(){
            return this.$store.getters.shopCartList
        },
        orderOk(){
            return this.shopCartList.some(ele => {
                return ele.checked
            })
        },
        allPrice(){
            let all = 0;
            this.shopCartList.forEach(ele =>{
                if(ele.checked){
                    all += (ele.price*ele.number);
                }
            })
            return all;
        }
    },
    methods:{
        allCheckedToggle(){
            // alert('ok')
            this.$store.commit('allCheckToggle',this.allCheck);
        },
        removeShop(){
            // alert('!')
            this.$store.commit('removeFn')
        },
        placeAnOrder(){
            let arr = [];
            this.shopCartList.forEach(ele => {
                if(ele.checked){
                    arr.push(ele)
                }
            })
            this.$store.commit('setOrderList',arr);
            this.$router.push('/confirmOrder');
        }
    }
}
</script>