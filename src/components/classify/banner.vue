<template>
    <div class="swiper-container banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../../assets/img/classify_banner1.png" alt="" />
            </div>
            <div class="swiper-slide">
                <img src="../../assets/img/classify_banner2.png" alt="" />
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import Swiper from 'swiper';
export default {
    mounted(){
        
        let classifyBanner = new Swiper('.banner',{
            speed:1000,
            autoplay:{
                delay:3000,
                disableOnInteraction:false
            }
        })
    }
}
</script>

