<template>
    <div>
        <Banner />
        <groupMessage />
    </div>
</template>
<script>
import Banner from '@/components/common/infoBanner';
import groupMessage from '@/components/shop-info-views/groupShop';
export default {
    components:{
        Banner,
        groupMessage
    }
}
</script>
<style scoped='true'>
    img{
        height: 1rem;
    }
</style>
