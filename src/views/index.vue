<template>
    <div id="index">
        <Head />
        <!-- <Content /> -->
        <router-view />
        <Foot />
    </div>
</template>

<script>
import Head from '@/components/index/head';
import Foot from '@/components/index/foot';
export default {
    components:{
        Head,
        Foot
    },
    mounted(){
        this.$store.dispatch('getShopDataList');//获取商品列表

        //下滚显示头部 (淡入淡出)
        var head = document.getElementById('index-header');
        var img = document.getElementById('index-header-img');        
        let _this = this;
        window.onscroll=function(e){
            var path = _this.$route.path;
            var t = document.documentElement.scrollTop || document.body.scrollTop;
            if(path == '/index' && t>400){
                head.style = "background:rgba(255,255,255,1);"
                img.style = "opacity:1;filter:alpha(opacity=100);";
            }else{
                head.style = "border:none;background:rgba(219,207,207,0.0);"
                img.style = "opacity:0;filter:alpha(opacity=0);";
            }
        }
    }
}
</script>

<style>

</style>