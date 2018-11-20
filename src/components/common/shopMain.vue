<template>
<div class="shop-main">
    <ul id="ul">
        <li class="active">
            商品介绍
        </li>
        <li>
            商品评价
        </li>
    </ul>
    <div>
    <div class="shop-introduce block abc" v-html="data.content">
       商品信息
    </div>  
    <div class="shop-evaluate abc">
        <div class="img-box">
            <img src="../../assets/img/timg4.gif" alt="" />
        </div>
        <div class="text-box">
            <p class="username">
                丸子君
                <span class="good">好评</span> 
            </p>
            <p class="evaluate">
                系统默认好评
            </p>
            <p class="time">2018-6-26 20 : 20 : 00</p>
        </div>
    </div>
    </div>
    <!-- 13500000000  -->
    <div class="shop-info-transpond">
        <img src="../../assets/img/1_03.png" />
    </div>
</div>

</template>
<script>
import toggleFn from '../../utils/info-toggle';
export default {
    mounted(){
        toggleFn()
    },
    computed:{
        data(){
            return this.$store.getters.shopInfoData
        }
    }
}














    /*
     * 好吧好吧
     * 又到了写选项卡的时候了
     * -.-
     * 这是两个
     * 难道要写一个只有你自己可以用的插件吗？
     * 不
     * 我要一个大家都可以用的
     * 任何情况都可以用的
     * 算了
     * 。。。
     * 暂且写我私有的吧 -.-
     */
</script>