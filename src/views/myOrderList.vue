<template>
    <div id="my-order-list">
        <Head>我的订单</Head>
        <nav id="order-list-nav">
            <span :class="orderType==0?'active':''" @click="filterOrder(0)">待付款</span>
            <span :class="orderType==1?'active':''" @click="filterOrder(1)">代发货</span>
            <span :class="orderType==2?'active':''" @click="filterOrder(2)">待收货</span>
            <span :class="orderType==3?'active':''" @click="filterOrder(3)">待评价</span>
            <span :class="orderType==4?'active':''" @click="filterOrder(4)">已完成</span>
        </nav>
        <div class="order-main">
            <div class="order-item" v-for="(item,i) in orderList" :key="i">
                <div class="order-title">
                    <span class="order-time">
                        下单时间：{{item.dateAdd}}
                    </span>
                    <span class="order-status">
                        {{item.statusStr}}
                    </span>
                </div>
                <div class="order-number">
                    订单号：{{item.orderNumber}}
                </div>
                <div class="item-order-message-imgbox">
                    <div class="item-order-message" v-for="(ele,j) in shopData[item.id]" :key="j">
                        <img :src="ele.pic" @click="toEvaluate(item,j)" alt=""/>
                    </div>
                </div>
                <div class="order-item-foot">
                    <span class="order-all-price">合计：￥{{item.amount}}</span>
                    <div class="btn-box" v-if="!(orderType==-1)">
                        <button class="clear-order" @click="orderClose(item.id)">取消订单</button>
                        <button class="pay-now-order" @click="ok(item.amount,item.id)">立即支付</button>
                    </div>
                </div>
            </div>
        </div>
        {{Com_orderList}}
    </div>
</template>

<script>
import axios from 'axios';
import Head from '@/components/common/header';
export default{
    data(){
        return {
            orderList:[],
            orderType:0,
            shopData:{}
        }
    },
    components:{
        Head
    },
    created(){
        let path = this.$route.params.type;
        this.orderType = path;
    },
    mounted(){
        let token = this.$store.state.token;
        if(token != ""){
            this.creatOrder(token)
        }else{
            let toLogin = confirm('需登录后才能查看订单')
            if(toLogin){
                this.$router.push('/login')
            }else{
                this.$router.push('/index/user')
            }
        }
    },
    computed:{
        Com_orderList(){
            this.orderType;
            this.creatOrder(this.$store.state.token);
            return ''
        }
    },
    methods:{
        toEvaluate(data,i){
            this.$store.commit("setEvaluateShopMessage",{"data":data,"i":i})
            this.$router.push('/evaluate');
        },
        ok(price,id){
            let obj = {
                price:price,
                id:id
            }
            // console.log(`${JSON.stringify(obj)}`)
            window.location.href = 
            `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe93d3f996beab1eb&redirect_uri=http://www.wyunfei.com/&response_type=code&scope=snsapi_userinfo&state=${JSON.stringify(obj)}`
        },
        filterOrder(status){
            this.orderType = status;
        },
        creatOrder(token){
            axios.post('https://api.it120.cc/small4/order/list?',
            'token='+token
            ).then(res => {
                // console.log(res)
                let data = res.data.data.orderList;
                let arr = [];
                this.$store.commit("saveShopAll",res.data.data.goodsMap)
                this.shopData = res.data.data.goodsMap;
                data.forEach(ele => {
                   if(ele.status == this.orderType){
                       arr.push(ele)
                   }
                })
                // console.log(arr)
                this.orderList = arr;
                // return arr;
            })
        },
        orderClose(id){
            let token = this.$store.state.token;
            let sure = confirm('您确定要取消该订单吗？');
            if(sure){
                axios.post('https://api.it120.cc/small4/order/close?',
                'token='+token+
                '&orderId='+id
                ).then(res => {
                    // console.log(res);
                    this.creatOrder(token)
                })
            }
        }
    }
}
</script>

<style>

</style>
