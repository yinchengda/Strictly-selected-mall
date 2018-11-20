<template>
    <div id="signIn">
        <Head> &nbsp;
            <div class="head-sigin">
                <p>您的可用积分</p>
                <h1>7</h1>
            </div>
        </Head>
        <div class="signin-integral">
            <ul>
                <li v-for="(item,i) in regulation" :key="i" v-if=" i>=day & i<day+7" :class="i==0?'active active-after':''">
                    +{{item.continuous}}
                </li>
            </ul>
            <ol>
                <li class="active">1天</li>
                <li>2天</li>
                <li>3天</li>
                <li>4天</li>
                <li>5天</li>
                <li>6天</li>
                <li>7天</li>                
            </ol>
        </div>
        <div class="sigin-btn-box">
             <!-- class="checked-in" -->
            <button @click="sigi_inFn" :class="btnTxt=='已签到'?'checked-in':''">{{btnTxt}}</button>
        </div>
        <div class="singin-go-other">
            <div class="singin-go-other-item shopping">
                <div class="img-box">
                    <img src="../assets/img/sign-in-item1.png" />
                </div>
                <div class="text">
                    <h3 class="item-title">消费购物</h3>
                    <p class="item-describe">购物完成，确认收货后立返积分</p>
                </div>
                <div class="item-go-box">
                    <router-link to="/index">
                        <span class="go-shoppping">去购物</span>
                    </router-link>
                </div>
            </div>
            <div class="singin-go-other-item conversion">
                <div class="img-box">
                    <img src="../assets/img/sign-in-item2.png" />
                </div>
                <div class="text">
                    <h3 class="item-title">积分兑换</h3>
                    <p class="item-describe">积分兑换好礼，20积分即可兑换礼券 </p>
                </div>
                <div class="item-go-box">
                    <router-link to="/index">
                        <span class="go-conversion">去兑换</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
/*
 * 目前的逻辑是肯定不正确的.(随意写的逻辑...)
 */
import axios from 'axios';
import Head from "@/components/common/header";
export default {
  components: {
    Head
  },
  data() {
    return {
      day: 0,
      regulation: [],
      btnTxt:'签到'
    };
  },
  mounted() {
    axios.get("https://api.it120.cc/small4/score/sign/rules").then(res => {
      this.regulation = res.data.data;
    });
  },
  /* 进入页面时
     * 请求签到积分递增规则
     * 显示判断为：
     * 大于用户签到的天数小于用户已签天数加要显示未来签到天数(7)
     * 
     * 用户第一次点击签到
     * 存入localStorage中一条数据 为用户签到的天数
     * 判断本地是否有签到数据,有责加1,无责存入1
     * 
     * 
     * */
  methods: {
    sigi_inFn() {
      let token = this.$store.state.token;
      if (!token) {
        this.$router.push("/login");
        return;
      }
      axios
        .post("https://api.it120.cc/small4/score/sign", "token=" + token)
        .then(res => {
        //   console.log(res);
          if(res.data.code==0){
              alert('签到成功');
              this.btnTxt = '已签到';
          }else{
              alert(res.data.msg);
              this.btnTxt=='已签到'?'':this.btnTxt = '已签到';
          }
        });
    }
  }
};
</script>