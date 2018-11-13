<template>
    <div class="confirm-order">
        <Head>确认订单</Head>
        <div class="select-site">
            <div class="site-icon">
                <i class="iconfont icon-dizhi1"></i>
            </div>
            <div class="site-message">
                <router-link to="/mySite">
                <p class="message">
                    <span class="user-name">{{site.linkMan}}</span>
                    <span class="cell-phone-number">{{site.mobile}}</span>
                </p>
                <p class="describe">
                    {{site.address}}
                    <!-- M78星云二营长的意大利炮旁 -->
                </p>
                </router-link>
            </div>
            <div class="icon-right">
                <i class="iconfont icon-youbian"></i>
            </div>
        </div>
        <img src="/static/site_border.png" alt="" id="lazy"/>
        <div class="order-shop-list">
            <div class="title">
                商品列表
            </div>
            <div class="list">
                <div class="item" v-for="(item,i) in shop" :key="i">
                    <div class="img-box">
                        <img :src="item.pic" />
                    </div>
                    <div class="item-message">
                        <div class="title-price">
                            <p class="item-title">
                            {{item.name}}
                            </p>
                            <p class="price">￥{{item.price}}</p>
                        </div>
                        <div class="describe-count">
                            <p class="describe">
                                {{item.describe}}
                            </p>
                            <p class="count">×{{item.number}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="distribution-main">
            <div class="distribution-type">
                <span class="type-sub">
                    配送方式
                </span>
                <span class="type">
                    包邮
                </span>
            </div>
            <div class="remark-main">
                <span class="remark-sub">
                    备注
                </span>
                <input type="text" class="remark" placeholder="如有需要请备注"/>
            </div>
        </div>

        <div class="discount-main">
            <div class="discount-title">
                选择使用优惠券
            </div>
            <div class="selection">
                <div class="selection-main">
                    不使用优惠券
                </div>
            </div>
        </div>

        <div class="confirm-submit">
            <div class="confirm-submit-main">
                <span class="submit-sub">
                    商品金额
                </span>
                <span>
                    ￥{{shop.originalPrice}}
                </span>
            </div>
        </div>

        <div class="confirm-main">
            <span></span>
            <span></span>
            <div class="confirm-main-text">
                合计：￥{{shop.originalPrice}}
                <router-link to="/confirmPayment">
                    <button @click="submitOrder">提交订单</button>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import Head from '@/components/common/header';
export default {
    data(){
        return{
            site:[],
            shop:this.$store.state.orderList
        }
    },
    components:{
        Head
    },
    
    mounted(){
        let token = this.$store.state.token;
        if(!token){
            this.$router.push('/login')
        }else{
            axios.post('https://api.it120.cc/small4/user/shipping-address/list/','token='+token)
            .then(res => {
                res.data.data.forEach(ele => {
                    if(ele.isDefault){
                        this.site = ele;
                    }
                })
                if(!this.site.length){
                    this.site = res.data.data[0];
                }
            })
        }
    },
    methods:{
        submitOrder(){
            let data = this.$store.state.orderList;
            let token = this.$store.state.token;
            // console.log([this.shop])
            axios.post('https://api.it120.cc/small4/order/create?',
            'token='+token+
            '&goodsJsonStr='+
            JSON.stringify(data)+
            '&expireMinutes=80'
            )
            .then(res => {
                // console.log(res)
                this.$store.commit('setOrderNum',res.data.data.orderNumber)
            })

            axios.post('https://api.it120.cc/small4/order/create?',
            'token='+token+
            '&goodsJsonStr='+
            JSON.stringify(data)+
            '&expireMinutes=80'+
            '&calculate=true'
            )
            .then(res => {
                // console.log(res)
                this.$store.commit('setOrderAllPrice',res.data.data.amountTotle)
            })
        }
    }
}
//To strive, to seek, to find, and not to yield.
</script>