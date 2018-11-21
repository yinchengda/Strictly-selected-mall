<template>
    <div>
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
    toggleShade() {
      this.$store.commit("toggleLazyShow");
    },
    countFn(type) {
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
      // console.log(this.typeId)
      let token = this.$store.state.token;
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
      console.log(skuStr);

      /* 购买商品时
             * 选择sku
             * 设置函数
             * 判断是加入购物车还是立即购买
             * 选择SKU
             * v-for数组
             * 函数参数i
             * data定义两个数据
             * 点击时判断sku长度大于1
             * 选择sku函数
             * 参数为 i
             * i==0；则改变第一条数据;i==1；则改变第二条数据
             * class判断；
             * 定义函数判断;
             * 传入i
             * 拿到sku数组
             * return
             * 数组第i个
             * 等于等于第i条数据. 
             */
      // console.log(token)
      if ((this.typeId === "") | (this.typeTwoId === "")) {
        // typeid == '' 如果用户没有选择规格
        //SKU的数量等于0,切按钮等于立即购买 则跳转至订单页   好吧  其实这块这么繁琐的原因是我sku没写好导致的 -.-
        console.log(this.infoData.properties[0].childsCurGoods.length);
        //                                                   只判断1个规格真的可以吗? ... 不可以 如何改善呢？
        if (
          !this.infoData.properties[0].childsCurGoods.length |
          (this.typeId != "")
        ) {
          //←这一串是SKU的数量 如果不存在子级规格
          if (this.$store.state.shopBtnTxt == "立即购买") {
            //按钮等于立即购买
            if (token == "") {
              this.$router.push("/login");
              return;
            } //判断登陆状态
            let shop = {
              goodsId: this.infoData.basicInfo.id,
              number: this.count,
              propertyChildIds: skuStr,
              logisticsType: 0,
              name: this.infoData.basicInfo.name,
              describe: this.infoData.basicInfo.characteristic,
              price: this.infoData.basicInfo.originalPrice,
              checked: true,
              pic: this.infoData.basicInfo.pic,
              typeTxt:
                "选择" + this.infoData.properties[0].name + ":" + this.name
            };
            this.$store.commit("setOrderList", shop); //保存至vux的订单列表
            this.getOrderAllPrice(); //计算订单总额
            this.toggleShade(); //拟态框隐藏
            this.$router.push("/confirmOrder"); //跳转页面
          } else if (this.$store.state.shopBtnTxt == "加入购物车") {
            //等于加入购物车
            this.addShop(); //加入购物车
          }
          return;
        } else {
          alert("请选择规格！");
          return;
        }
      }

      //用户选择了规格
      if (this.$store.state.shopBtnTxt == "立即购买") {
        if (token == "") {
          this.$router.push("/login");
          return;
        } //判断登陆状态
        let shop = {
          goodsId: this.infoData.basicInfo.id,
          number: this.count,
          propertyChildIds: this.infoData.properties[0].id + ":" + this.typeId,
          logisticsType: 0,
          name: this.infoData.basicInfo.name,
          describe: this.infoData.basicInfo.characteristic,
          price: this.infoData.basicInfo.originalPrice,
          checked: true,
          pic: this.infoData.basicInfo.pic,
          typeTxt: "选择" + this.infoData.properties[0].name + ":" + this.name
        };
        this.getOrderAllPrice(); //计算订单总额
        this.$store.commit("setOrderList", shop); //保存至vux的订单列表
        this.toggleShade(); //拟态框隐藏
        this.$router.push("/confirmOrder"); //跳转页面
      } else if (this.$store.state.shopBtnTxt == "加入购物车") {
        this.addShop(); //加入购物车
      }
    },
    setId(id, name, i) {
      this.name = name;
      if (i == 0) {
        this.typeId = id;
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