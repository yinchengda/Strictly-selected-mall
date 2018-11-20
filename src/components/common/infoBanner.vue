<template>
    <div class="info-banner">
        <div class="back-icon">
            <a href="javascript:" @click="toBack">
                <i class="iconfont icon-back"></i>
            </a>
        </div>
        <div class="swiper-container info-banner">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,i) in data.pics" :key="i">
                    <img :src="item.pic" alt="" />
                </div>
                
                <!-- 模板 -->
                <!-- <div class="swiper-slide">
                    <img src="../../assets/img/banner3.jpg" alt="">
                </div> -->
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
export default {
    mounted(){

        // setTimeout( ()=>{console.log(this.data)
            // this.setSwiper()
        // },1000);
         //如何给它传参的时候实现回调...
        this.$store.dispatch("getShopInfo",data => {
            console.log(data)
            setTimeout(()=>{
                this.setSwiper();
            })
        });
        
    },
    computed:{
        data(){
            return this.$store.getters.shopInfoData
        },
    },
    methods:{
        setSwiper(){
            let infoBanner = new Swiper('.info-banner',{
            speed:2000,
            loop:false,
            autoplay:{
                disableOnInteraction:false,
                delay:3000
            },
            pagination:{
                el:'.swiper-pagination'
            }
            });
        },
        toBack(){
            window.history.back()
        }
    }
}

























    /* 2018-11-7 4:33
     * 哦，老伙计。
     * 每当这个点一股困意便从不知名的地方袭来，
     * 瞬间占领大脑的每个角落
     * 在不停的向你说着
     * 停下来吧
     * 停下来吧...
     * 但是，我的理智狠狠回应了它！
     * 我仅存的理智愤怒的冲它吼道:"好的!";
     */
</script>