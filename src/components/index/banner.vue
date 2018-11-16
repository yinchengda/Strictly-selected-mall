<template>
    <div>
        <div class="swiper-container index-banner">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,i) in bannerData" :key="i">
                    <a :href="item.linkUrl">
                    <img :src="item.picUrl" alt="" />
                    </a>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
export default {
    data(){
        return{
            bannerData:[]
        }
    },
    mounted(){    
        //请求banner
        this.$store.dispatch('getBanner',data => {
            this.bannerData = data;
            //初始化轮播图     
            this.swiperFn()
        });
        
    },
    methods:{
        swiperFn(){
           setTimeout(()=>{
              let indexBanner =  new Swiper('.index-banner',{
            loop:true,
            pagination:{
                el:'.swiper-pagination'
            },
            speed:1000,
            autoplay:{
                disableOnInteraction:false,
                delay:3666
            }
            })
           })
        }
    }
}
</script>

