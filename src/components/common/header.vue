<template>
    <header id="common-header">
        <a @click='toBack'>
            <i class="iconfont icon-back"></i>
        </a>
        <slot>头部</slot>
        <span></span>
    </header>
</template>
<script>
// import router from '../../router';
export default {
    mounted(){
        // router.beforeEach((to,from,next) => {
        //     console.log(from);
        //     // console.log(from);
        //     next()
        // })
    },
    methods:{
        toBack(){
            window.history.back();
        }
    }
}
</script>
