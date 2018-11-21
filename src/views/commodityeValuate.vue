<template>
    <div id="evaluate">
        <Head>发表评价</Head>
        <div class="shop-message">
            <div class="img-box">
                <img src="../assets/img/recommend-item4.png" />
            </div>
            <div class="text">
                冬季速暖毯子珊瑚绒法兰小毛毯加厚床单啊啊啊啊啊
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
        <button class="submit-evaluate" @click="submitFn">提交评价</button>

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
            evaluateTxt:''
        }
    },
    mounted(){
        // console.log(this.$store.state.evaluateShopData.evaluateData);
        // console.log(this.$store.state.evaluateShopData.shopAll)
    },
    methods:{
        submitFn(){
            let token = this.$store.state.token;
            // 该条订单数据
            let orderMessage = this.$store.state.evaluateShopData.evaluateData;
            // 所有待评价商品
            let shopMessage = this.$store.state.evaluateShopData.shopAll;
            // 评价商品
            let shop = shopMessage[orderMessage.id];
            let index = this.$store.state.evaluateShopData.i;
            
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
                if(res.data.code === 0){
                    alert('评价成功，感谢您的支持！');
                    this.$router.push('/myOrderList/3')
                }
            })
        }
    }
}
</script>

<style>

</style>
