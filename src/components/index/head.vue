<template>
    <div class="index-head" id="index-header">
        <span name="不要问我为什么存在"></span>
        <img class="index-head-img" id="index-header-img"  src="../../assets/img/timg4.gif" alt="" />
        <span>
            
        </span>
    </div>
</template>
<script>
export default {
    mounted(){
        /* aaaaaaaaaaa I heat static page!!! */
    }
}
</script>
<style scoped>
.index-head{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 12;
    background: rgba(255,255,255,0.0);
    display: flex;
    justify-content: space-between;
    height: 3em;
    transition: .3s all linear;
}
.index-head-img{
    width: 3em;
    opacity:0.0;
    filter:alpha(opacity=0);
    transition: .5s all linear;
    /*
     * 敲代码敲代码敲代码敲代码敲代码敲代码敲代码敲代码敲代码敲代码
     * 敲代码啊敲啊敲啊敲代码啊敲啊敲啊敲代码啊敲啊敲啊敲代码啊敲啊
     * 敲代码啊敲啊敲啊敲代码啊敲啊敲啊敲代码啊敲啊敲啊敲代码啊敲啊
     * 敲了好多啊继续敲啊敲啊敲啊敲啊敲代码啊敲啊敲啊敲代码啊敲啊敲
     * 啊敲敲敲-.-...
     */
}
</style>
