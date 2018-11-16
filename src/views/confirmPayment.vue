<template>
    <div class="confirm-payment">
        <Head>确认付款</Head>
        <div class="confirm-main">
            <div class="confirm-item">
                <div class="icon-box">
                    <i class="iconfont icon-qian"></i>
                </div>
                <div class="order-message">
                    <p class="shop-all-price">
                        商品总额：
                        <span class="price">￥{{orderAllPrice}}</span>
                    </p>
                    <p class="order-num">
                        订单号：{{orderNum}}
                    </p>
                </div>
            </div>
            <div class="confirm-item">
                <div class="icon-box">
                    <i class="iconfont icon-dizhi"></i>
                </div>
                <div class="order-message">
                    <p class="shop-all-price">
                        {{site.linkMan}}
                        {{site.mobile}}
                    </p>
                    <p class="order-num">
                         {{site.address}}
                    </p>
                </div>
            </div>
        </div>
        <div class="foot" @click="ok">
            微信支付￥{{orderAllPrice}}
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import Head from "@/components/common/header";
export default {
  data() {
    return {
      site: []
    };
  },
  components: {
    Head
  },
  computed: {
    orderNum() {
      return this.$store.getters._orderNum;
    },
    orderAllPrice() {
      return this.$store.getters._orderAllPrice;
    }
  },
  mounted() {
    let token = this.$store.state.token;
    axios
      .post(
        "https://api.it120.cc/small4/user/shipping-address/list/",
        "token=" + token
      )
      .then(res => {
        let siteNullDefault = true;
        // console.log(res.data.data)
        res.data.data.forEach(ele => {
          // console.log(ele)
          if (ele.isDefault) {
            siteNullDefault = false;
            this.site = ele;
          }
        });
        if (siteNullDefault) {
          this.site = res.data.data[0];
        }
      });
  },
  methods: {
    ok() {
      alert("付款成功！");
      this.$router.push("/myOrderList/0");
    }
  }
};
</script>