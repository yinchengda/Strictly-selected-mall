<template>
    <div>
        <Banner />
        <Nav />
        <BuyTemplate />
        <CutPrice />
        <Selection />
        <Recommend />
        <router-view/>
    </div>
</template>
<script>
import Banner from "@/components/index/banner";
import Nav from '@/components/index/nav';
import BuyTemplate from '@/components/index/buyTemplate';
import CutPrice from '@/components/index/cutPrice';
import Selection from '@/components/index/selection';
import Recommend from '@/components/index/recommend';
export default {
    components:{
        Banner,
        Nav,
        BuyTemplate,
        CutPrice,
        Selection,
        Recommend
    }
}
</script>
<style>

</style>
