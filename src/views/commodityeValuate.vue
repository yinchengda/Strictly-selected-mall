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
            <textarea cols="24" rows="3" placeholder="亲，您对这个商品满意吗？您的评价会帮助我们选择更好的商品哦！">

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
    methods:{
        submitFn(){
            let data = {
                    token:"登录接口获取的登录凭证",
                    orderId:"数字订单号，订单接口的id，不是 orderNumber",
                    reputations:[
                        {
                        id:"订单归属的商品列表数据的id字段",
                        reputation:"0 差评 1 中评 2 好评",
                        remark:"评价备注，限200字符"
                        },
                        {
                        id:"订单归属的商品列表数据的id字段",
                        reputation:"0 差评 1 中评 2 好评",
                        remark:"评价备注，限200字符"
                        }
                    ]
                    }

            axios.post('https://api.it120.cc/small4/order/reputation',
            'postJsonString=' + data
            ).then(res => {

            })
        }
    }
}
</script>

<style>

</style>
