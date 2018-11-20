<template>
    <footer id="group-info-foot">
        <a>
            <i class="iconfont icon-kefu"></i>
        </a>
        <a>
            <i class="iconfont icon-xingxingkongxin"></i>
        </a>
        <button class="purchase-now">
                <span>￥299</span>
                原价购买
        </button>
        <button class="add-shopcar" @click="KeyToOpenGroup">
                <span>￥289</span>
                一键开团
        </button>
        <span class="shopcar-count">1</span>
       
    </footer>
</template>
<script>
export default {
    methods:{
        KeyToOpenGroup(){
            alert('此功能暂未开放\n（预计近期将会马上上线，敬请期待.）')
        }
    }
}
</script>