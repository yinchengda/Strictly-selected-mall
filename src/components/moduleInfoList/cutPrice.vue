<template>
    <div class="cutPriceList">
        <div class="cut-main">
            <div class="cut-item" v-for="(item,i) in idata" :key="i" v-if="item.kanjia">
                <div class="cut-img">
                    <router-link :to="'/cutShopInfo/'+item.id">
                    <img :src="item.pic" alt=""/>
                    </router-link>
                </div>
                <div class="cut-textbox">
                    <div class="new-arryval" v-if="false">  <!-- 新品上市/新发布 -->
                        <img src="../../assets/img/new_arryval.png" alt="" />
                    </div>
                    <h3 class="textbox-title">
                        {{item.name}}
                    </h3>
                    <p class="textbox-describe">
                        {{item.characteristic}}
                    </p>
                    <div class="textbox-message">
                        <p class="message-price-main">
                            <span class="price">￥{{item.kanjiaPrice}}</span>
                            低价
                        </p>
                        <span class="message-oldPrice">
                            ￥{{item.originalPrice}}
                            原价
                        </span>
                        <span class="message-count">
                            {{item.stores}}件
                            限量
                        </span>
                    </div>
                </div>
            </div>
            <!-- 模板 -->
            <!-- <div class="cut-item">
                <div class="cut-img">
                    <img src="../assets/img/cut2.png" alt="">
                </div>
                <div class="cut-textbox">
                    <h3 class="textbox-title">
                        多功能封闭环保除臭猫砂盆
                    </h3>
                    <p class="textbox-describe">
                        隔绝异味，拒绝带砂，洁净卫生
                    </p>
                    <div class="textbox-message">
                        <p class="message-price-main">
                            <span class="price">￥79</span>
                            低价
                        </p>
                        <span class="message-oldPrice">
                            ￥259
                            原价
                        </span>
                        <span class="message-count">
                            100件
                            限量
                        </span>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    computed:{
        idata(){
            return this.$store.getters.shopData;
        }
    },
    created(){
        //判断仓库是否有数据,没有就请求一次
        if(!this.idata.length){
            this.$store.dispatch('getShopDataList')
        }
    }
}
</script>