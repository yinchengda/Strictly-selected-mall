<template>
    <div id="evaluate">
        <Head>发表评价</Head>
        <div class="shop-message" @click="goShopInfo">
            <div class="img-box">
                <img :src="shopData.pic" />
            </div>
            <div class="text">
                {{shopData.goodsName}}
            </div>
        </div>

        <!-- 星星 -->
        <!-- <div class="grade">
            <div class="drecribe-ok">

            </div>
            <div class="">

            </div>
            <div>

            </div>
        </div> -->

        <div class="evaluate-inp-box">
            <textarea cols="24" rows="3" v-model="evaluateTxt" placeholder="亲，您对这个商品满意吗？您的评价会帮助我们选择更好的商品哦！">

            </textarea>
        </div>
        <button class="submit-evaluate" @click="submitFn(false)">提交评价</button>

    </div>
</template>

<script>
import axios from 'axios';
import Head from '@/components/common/header';
export default {
    components:{
        Head
    },
    data(){
        return{
            evaluateTxt:'',
            shopData:[]
        }
    },
    mounted(){
        // console.log(this.$store.state.evaluateShopData.evaluateData);
        // console.log(this.$store.state.evaluateShopData.shopAll)
        this.submitFn(true);
        // console.log(this.shopData)
    },
    methods:{
        submitFn(ok){
            let token = this.$store.state.token;
            // 该条订单数据
            let orderMessage = this.$store.state.evaluateShopData.evaluateData;
            // 所有待评价商品
            let shopMessage = this.$store.state.evaluateShopData.shopAll;
            // 评价商品
            let shop = shopMessage[orderMessage.id];
            let index = this.$store.state.evaluateShopData.i;
            
            //页面要拿到评价的商品数据,因此 可能要在生命周期中获得商品,但又不执行以下多余代码 So...
            if(ok){
                this.shopData = shop[index];
                return;
            }

            let data = {
                    "token":token,
                    "orderId":orderMessage.id,
                    "reputations":[
                        {
                        "id":shop[index].id,
                        "reputation":2,
                        "remark":this.evaluateTxt
                        }
                    ]
                    }
            // console.log(data)
            axios.post('https://api.it120.cc/small4/order/reputation',
            'postJsonString=' + JSON.stringify(data)
            ).then(res => {
                // console.log(res)
                if(res.data.code === 0){
                    alert('评价成功，感谢您的支持！');
                    this.$router.push('/myOrderList/3')
                }else{
                    alert(res.data.msg)
                }
            })
        },
        goShopInfo(){
            this.$router.push('/shopInfo/'+this.shopData.goodsId);
        }
    }
}
</script>

<style>

</style>
