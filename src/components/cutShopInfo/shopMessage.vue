<template>
        <div class="shop-message">
            <div class="text-box">
                <h3 class="title">{{data.basicInfo?data.basicInfo.name:''}}</h3>
                <p class="describe">{{data.basicInfo?data.basicInfo.characteristic:''}}</p>
                <div class="shop-price">
                    <div class="price-box">
                        <span class="min-price">
                            低价
                           <span class="price">￥{{data.basicInfo?data.basicInfo.minPrice:""}}</span>
                        </span>
                        <span class="old-price">
                            原价￥{{data.basicInfo?data.basicInfo.originalPrice:""}}
                        </span>
                    </div>
                    <div class="store">
                        库存 {{data.basicInfo?data.basicInfo.stores:''}}
                    </div>
                </div>
            </div>

            <div class="shop-type" v-if="this.$store.state.lazyShow">
              <div id="shade" @click="toggleShade"></div>
              <div class="type-main">
                  <div class="shop-data">
                      <div class="img-box">
                          <img :src="infoData.basicInfo?infoData.basicInfo.pic:''" alt="" />
                      </div>
                      <div class="text">
                          <p class="title">{{infoData.basicInfo?infoData.basicInfo.name:''}}</p>
                          <span class="price">￥{{infoData.basicInfo?infoData.basicInfo.originalPrice:''}}</span>
                      </div>
                      <i @click="toggleShade" class="iconfont icon-guanbi del"></i>
                  </div>
                  <div class="type-content">
                      <div class="type-box" v-for="(item,i) in infoData.properties" :key="i">
                          <div class="title">
                              {{item.name}}
                          </div>
                          <span  v-for="(ele,j) in item.childsCurGoods" :key="j" @click="setId(ele.id,ele.name,i)" :class="ele.id == (i==0?typeId:typeTwoId)?'item active':'item'">{{ele.name}}</span>
                          <!-- 这个默认款式真是...  -.-  -->
                          <span v-if="!infoData.properties[0].childsCurGoods.length" @click="setId(1,'默认',0)" :class="1 == typeId?'item active':'item'">默认款式</span>
                          <!-- <span class="item">开发版（未加密版本）</span> -->
                      </div>
                  </div>
                  <div class="count-box">
                      <span class="box-sub">购买数量</span>
                      <div class="count-action">
                          <button class="minus" @click="countFn('minus')">-</button>
                          <span>{{count}}</span>
                          <button class="add" @click="countFn('add')">+</button>
                      </div>
                  </div>
                  <span class="foot" @click="addShopCart">
                          {{this.$store.state.shopBtnTxt}}
                  </span>
              </div>
            </div>
        </div>
        
</template>
<script>
import axios from "axios";
/*
 * 因为所有的逻辑都是从加入购物车商品中拿过来的
 * 但在砍价这块根本用不上
 * So
 * 要删除很多不必要的东西
 * ... 
 */
export default {
  data() {
    return {
      shadeShow: true,
      count: 1,
      okShow: false,
      typeId: "",
      typeTwoId: "",
      name: ""
    };
  },
  computed: {
    infoData() {
      return this.$store.getters.shopInfoData;
    },
    shopCartData() {
      return this.$store.getters.shopCartList;
    },
    data(){
      return this.$store.getters.shopInfoData
    }
  },
  methods: {
    //控制规格框显示隐藏
    toggleShade() {
      this.$store.commit("toggleLazyShow");
    },
    //数量加减
    countFn(type) {S
      if (type == "add") {
        this.count++;
      } else if (type == "minus") {
        this.count <= 1 ? "" : this.count--;
      } else {
        return;
      }
    },
    //非常繁琐的一个函数 -.-
    addShopCart() {
      let token = this.$store.state.token;
      console.log(this.infoData.basicInfo.id)
      if (!(this.typeId === "") | !(this.typeTwoId === "")) {
          // 参与砍价
          axios.post('https://api.it120.cc/small4/shop/goods/kanjia/join',
          'kjid='+this.infoData.basicInfo.id+
          '&token='+token
          )
          .then(res => {
              console.log(res)
          })
      }else{
          alert('请选择规格!')
        }
    },
    setId(id, name, i) {
      
      this.name = name;
      if (i == 0) {
        this.typeId = id;
        console.log(this.typeId)
      } else if (i == 1) {
        this.typeTwoId = id;
      }
    },
    addShop() {
      let skuStr =
        this.infoData.properties.length > 1
          ? this.infoData.properties[0].id +
            "." +
            this.typeId +
            ":" +
            this.infoData.properties[1].id +
            "." +
            this.typeTwoId
          : this.infoData.properties[0].id + ":" + this.typeId;
      let shop = {
        goodsId: this.infoData.basicInfo.id, //id
        number: this.count, //数量
        propertyChildIds: skuStr, //SUK
        logisticsType: 0, //物流
        name: this.infoData.basicInfo.name, //title
        describe: this.infoData.basicInfo.characteristic, //简介
        price: this.infoData.basicInfo.originalPrice, //原价
        checked: true, //购物车内选中
        pic: this.infoData.basicInfo.pic, //图片
        typeTxt: "选择" + this.infoData.properties[0].name + ":" + this.name //规格(string) 不是必须的参数 自己用起来方便.
      };
      this.$store.commit("addShoppingCart", shop); //加入vux购物车列表
      this.$store.commit("accessToggle"); //显示成功动画
      this.toggleShade(); //隐藏拟态框
    },
    getOrderAllPrice() {
      let token = this.$store.state.token;
      let data = this.$store.state.orderList;
      console.log(`${this.clearBr(JSON.stringify(data))}`);
      //订单总额
      axios
        .post(
          global.globalData.api + "/order/create/",
          "token=" +
          token +
          "&goodsJsonStr=" +
          `${this.clearBr(JSON.stringify(data))}` + //!!!!解析字符串这块粗问题啦！！！！就是这块！！！！
            "&expireMinutes=80" +
            "&calculate=true"
        )
        .then(res => {
          // console.log(res);
          //数据正确响应
          if (res.data.code === 0) {
            this.$store.commit("setOrderAllPrice", res.data.data.amountTotle);
          } else {
            //参数出错..
            console.error(
              "error: 组件shopCart footer,在获取订单金额时出错了,如下：\n" +
                res.data.msg
            );
            // console.log(
            // "这是goodsJsonStr的value值：\n" +
            //     this.clearBr(JSON.stringify(data))
            // );
          }
        });
    },
    clearBr(key) {
      key = key.replace(/<\/?.+?>/g, "");
      key = key.replace(/[\r\n]/g, "");
      key = key.replace(/&*/g,""); //终于好了 o(╥﹏╥)o
      return key;
    }
  }
};
</script>