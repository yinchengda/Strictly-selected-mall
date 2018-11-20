<template>
    <div>
        <Head />
        <Notice />
        <Order />
        <Tool />
    </div>
</template>
<script>
import Head from '@/components/user/head.vue';
import Notice from '@/components/user/notice.vue';
import Order from '@/components/user/order.vue';
import Tool from '@/components/user/tool.vue';
export default {
    components:{
        Head,
        Notice,
        Order,
        Tool
    },
    created(){
        if(this.$store.state.token == ""){
            this.$router.push('/index')
        }
    }
}
</script>
<style>

</style>
