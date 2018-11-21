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
            <div class="item" v-if="!valuateShow" v-for="(item,i) in list" :key="i">
                <div class="img-box">
                    <img src="../../assets/img/timg4.gif" alt="" />
                </div>
                <div class="text-box">
                    <p class="username">
                        {{item.user.sourceStr=="手机注册"?"手机注册用户":item.user.sourceStr}}
                        <span class="good" v-if="item.goods.goodReputationStr == '好评'">好评</span> 
                    </p>
                    <p class="evaluate">
                        {{item.goods.goodReputationRemark}}
                    </p>
                    <p class="time">{{item.goods.dateReputation}}</p>
                </div>
            </div>
            <!-- 模板 -->
            <!-- <div class="item" v-if="!valuateShow">
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
            </div> -->
            <p class="valuate-null" v-if="valuateShow">暂无评价，快来抢杀花吧！</p>
        </div>
    </div>
    <!-- 13500000000  -->
    <div class="shop-info-transpond">
        <img src="../../assets/img/1_03.png" />
    </div>
</div>

</template>
<script>
import axios from 'axios';
import toggleFn from '../../utils/info-toggle';
export default {
    data(){
        return {
            valuateShow:false,
            list:[]
        }
    },
    mounted(){
        toggleFn();//选项卡
        this.$store.dispatch('getShopEvaluate',res => {
            if(res.data.code == 700){
                this.valuateShow = true;
            }else if(res.data.code == 0){
                this.list = res.data.data;
            }else{
                alert(res.data.msg);
                console.log(res);
            }
                console.log(res);
        })
    },
    computed:{
        data(){
            return this.$store.getters.shopInfoData;
            // return;
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