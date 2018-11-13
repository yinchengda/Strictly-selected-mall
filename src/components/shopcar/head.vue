<template>
    <div class="shop-head">
        <span class="compile" @click="redactFn">
            {{this.$store.state.shopCar.text}}
        </span>
        <span class="head-title">购物车</span>
        <div class="head-right-icon">
            icon
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        redactFn(){
            if(this.$store.state.shopCar.text == "编辑"){
                this.$store.commit('redactFn',true)
            }else{
                this.$store.commit('redactFn',false)
            }
        }
    }
}
</script>

