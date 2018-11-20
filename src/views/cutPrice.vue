<template>
    <div id="cutPrice">
        <Head>
            <div id="cut-price-main">
                <div class="cut-price-user">
                    <div  class="user-img-box" >
                        <img src="../assets/img/user-img.png"/>
                    </div>
                    <p class="user-name">小明</p>
                    <p class="sub-describe">我发现一件好货，来帮我砍到最低价吧~</p>
                </div>

                <div class="cut-shop-message">
                    <div class="img-box">
                            <img src="../assets/img/recommend-item4.png" />
                    </div>
                    <div class="text">
                        <p class="title">多功能封闭式环保除臭猫砂盆</p>
                        <div class="txt">
                            <span class="min-price">低价<span class="price">￥900</span></span>
                            <span class="old-price">原价 ￥800</span>
                            <span></span>
                        </div>
                    </div>
                </div>

                <div class="cut-price-plan">
                    <div class="plan-main">
                        当前价 <span class="big-font">250.76</span>元，
                        已砍 <span class="big-font">8.24</span>元
                    </div>
                    <div class="btn-box">
                        <button class="at-present-price" v-if="false">以当前价购买</button>
                        <button class="me-cut">自己先砍一刀</button>
                        <button class="invite-friends-cut">邀请好友砍价</button>
                    </div>
                </div>

                <div class="cut-time-remaining">
                        <span id="day">72</span> 
                             :
                        <span id="hour">17</span> 
                             :
                        <span id="minute">10</span> 
                             :
                        <span id="secone">31</span>
                </div>
            </div>
            <span class="triangle">
                <i class="iconfont icon-xiaosanjiao"></i>
            </span>
        </Head>
        <p class="help-num">
            1名好友帮砍
        </p>
        <div class="help-cut-price-list">
            <div class="item">
                <div class="img-box">
                    <img src="../assets/img/user-img.png" />
                </div>
                <div class="item-message">
                    <p class="username">小明</p>
                    <p class="cut-price-item">2018-11-18 18:18:16</p>
                </div>
                <div class="cut-message">
                    <img src="../assets/img/砍掉.svg" class="cut-icon">
                    <span>砍掉8.24元</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Head from '@/components/common/header';
export default {
    data(){
        return {
            gg:false
        }
    },
    components:{
        Head
    },
    methods:{
        no_look(){
            alert('砍价成功！')
        }
    }
}
</script>

<style>

</style>

<!--
    <template>
        <div id="cutPrice">
            <Head>
                <div class="cut-price-user" v-if="false">
                    <img src="../assets/img/timg4.gif" />
                    <p>小明</p>
                    <p>我发现一件好货，来帮我砍到最低价吧~</p>
                    <div>
                        <div class="img-box">
                            <img src="" />
                        </div>
                        <div class="text">
                            <p>多功能什么什么猫砂盆</p>
                            <div class="txt">
                                <span>低价 ￥900</span>
                                <span>原价 ￥800</span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </Head>
            <div id="_盖住"></div>
            <img v-if="!gg" src="../assets/img/lazy.gif" id="_懒" @click="no_look"/>
            <img v-if="gg" id="gg" src="../assets/img/putong.jpg" alt=""/>
        </div>
    </template>
    <script>
    import Head from '@/components/common/header';
    export default {
        data(){
            return {
                num:1,
                gg:false
            }
        },
        components:{
            Head
        },
        methods:{
            no_look(){
                if(this.num==1){
                    alert('砍价成功！')
                    this.num++
                }else if(this.num == 2){
                    alert('没错，砍价成功了！')
                    this.num++
                }else if(this.num == 3){
                    alert('成功了...\n快走吧！')
                    this.num++
                }else if(this.num == 4){
                    alert('-.-')
                    this.num++
                }else if(this.num == 5){
                    alert('想必你已经发现了 -.- \n')
                    this.num++
                }else if(this.num == 6){
                    alert('那么...')
                    this.gg = true
                }else{
                    return
                }
            }
        }
    }
    </script>

    <style>

    </style>

-->