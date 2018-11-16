<template>
    <div>
        <Head />
        <ShopDataNull v-if="dataNull"/>
        <ShopData v-if="!dataNull"/>
        <Foot v-if="!dataNull"/>
        <GuessLike />
    </div>
</template>
<script>

import Head from '@/components/shopcar/head';
import ShopDataNull from '@/components/shopcar/shopData_null';
import ShopData from '@/components/shopcar/shopData';
import GuessLike from '@/components/shopcar/guessLike';
import Foot from '@/components/shopcar/footer';
export default {
    data(){
        return {
            dataNull:false
        }
    },
     components:{
        Head,
        ShopData,
        ShopDataNull,
        GuessLike,
        Foot
    },
    mounted(){
        this.shopCartList.length?'':this.dataNull= true;
    },
    computed:{
        shopCartList(){
            return this.$store.getters.shopCartList
        }
    },
    
}
</script>
<style>

</style>
