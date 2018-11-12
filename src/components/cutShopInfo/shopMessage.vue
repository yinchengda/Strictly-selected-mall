<template>
    <div class="shop-message">
            <div class="text-box">
                <h3 class="title">{{data.basicInfo?data.basicInfo.name:''}}</h3>
                <p class="describe">{{data.basicInfo?data.basicInfo.characteristic:''}}</p>
                <div class="shop-price">
                    <div class="price-box">
                        <span class="min-price">
                            低价
                           <span class="price">￥{{data.basicInfo?data.basicInfo.minPrice:""}}</span>
                        </span>
                        <span class="old-price">
                            原价￥{{data.basicInfo?data.basicInfo.originalPrice:""}}
                        </span>
                    </div>
                    <div class="store">
                        库存 {{data.basicInfo?data.basicInfo.stores:''}}
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return {
            
        }
    },
    mounted(){
        // let id = this.$route.params.id;
       
    },
    computed:{
        data(){
            return this.$store.getters.shopInfoData
        }
    }
}
</script>