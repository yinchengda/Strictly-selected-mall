<template>
    <div id="collect-views">
        <Head>我的收藏</Head>
        <List />
        <iNull v-if="false"/>
    </div>
</template>

<script>
import Head from '@/components/common/header';
import List from '@/components/collect/list';
import iNull from '@/components/collect/null.vue'
export default {
    components:{
        Head,
        List,
        iNull
    }
}
</script>

<style>

</style>
