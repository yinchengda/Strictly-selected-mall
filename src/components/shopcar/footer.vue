<template>
    <div class="shop-cart-footer">
        <div class="footer-left">
            <input type="checkbox" v-model="allCheck" @click="allCheckedToggle"/>
            全选
        </div>
        <div class="footer-right">
            <div class="all-price-box" v-if="!this.$store.state.shopCar.btnDel">
                合计： ￥{{allPrice}}
            </div>
            <a class="down-order">
                <button v-if="!this.$store.state.shopCar.btnDel" :class="orderOk?'active':''" :disabled="!orderOk" @click="placeAnOrder">下单</button>
                <button @click="removeShop" v-if="this.$store.state.shopCar.btnDel" :class="orderOk?'active':''" :disabled="!orderOk">删除</button>
            </a>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      allCheck: false
    };
  },
  computed: {
    shopCartList() {
      return this.$store.getters.shopCartList;
    },
    orderOk() {
      return this.shopCartList.some(ele => {
        return ele.checked;
      });
    },
    allPrice() {
      let all = 0;
      this.shopCartList.forEach(ele => {
        if (ele.checked) {
          all += ele.price * ele.number;
        }
      });
      return all;
    }
  },
  methods: {
    allCheckedToggle() {
      this.$store.commit("allCheckToggle", this.allCheck);
    },
    removeShop() {
      this.$store.commit("removeFn");
    },
    placeAnOrder() {
      let token = this.$store.state.token;
      if (!token) {
        this.$router.push("/login");
        return;
      }
      let arr = [];
      this.shopCartList.forEach(ele => {
        if (ele.checked) {
          // console.log(ele)
          arr.push(ele);
        }
      });
      this.$store.commit("setOrderList", arr);
      // console.log(this.$store.state.orderList)
      this.$router.push("/confirmOrder"); //跳转值订单

      let data = this.$store.state.orderList;
      console.log(this.clearBr(JSON.stringify(data)));

      //订单总额
      axios
        .post(
          "https://api.it120.cc/small4/order/create/",
          "token=" +
            token +
            "&goodsJsonStr=" +
            this.clearBr(JSON.stringify(data)) +   //!!!!解析字符串这块粗问题啦！！！！就是这块！！！！
            "&expireMinutes=80" +
            "&calculate=true"
        )
        .then(res => {
          console.log(res);
          //数据正确响应
          if (res.data.code === 0) {
            this.$store.commit("setOrderAllPrice", res.data.data.amountTotle);
          } else {
            //参数出错..
            console.error(
              "error: 组件shopCart footer,在获取订单金额时出错了,如下：\n" +
                res.data.msg
            );
            console.log(
              "这是goodsJsonStr的value值：\n" +
                this.clearBr(JSON.stringify(data))
            );
          }
        });
    },
    clearBr(key) {
      key = key.replace(/<\/?.+?>/g, "");
      key = key.replace(/[\r\n]/g, "");
      return key;
    }
  }
};
</script>