<template>
<!--... 抱歉， 因为..  反正.. -->
    <div class="shop-message">
        <div class="text-box">
            <h3 class="title">{{infoData.basicInfo?infoData.basicInfo.name:''}}</h3>
            <p class="describe">{{infoData.basicInfo?infoData.basicInfo.characteristic:''}}</p>
            <div class="shop-price">
                <div class="price-box">
                    <span class="min-price">
                       <span class="zprice">￥{{infoData.basicInfo?infoData.basicInfo.minPrice:''}}</span>
                    </span>
                    <span class="zold-price">
                        ￥{{infoData.basicInfo?infoData.basicInfo.originalPrice:''}}
                    </span>
                </div>
                <div class="zstore">
                    已售 {{infoData.basicInfo?infoData.basicInfo.minScore:''}}
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
                        <span  v-for="(ele,j) in item.childsCurGoods" :key="j" @click="setId(ele.id,ele.name)" :class="ele.id == typeId?'item active':'item'">{{ele.name}}</span>
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
export default {
    data(){
        return {
            shadeShow:true,
            count:1,
            okShow:false,
            typeId:'',
            // typeId:'',
            name:''
        }
    },
    computed:{
        infoData(){
            return this.$store.getters.shopInfoData
        },
        shopCartData(){
            return this.$store.getters.shopCartList
        }
    },
    methods:{
        toggleShade(){
            this.$store.commit('toggleLazyShow')
        },
        countFn(type){
            if(type == 'add'){
                this.count++;
            }else if(type == 'minus'){
                this.count <= 1?'':this.count--;
            }else{
                return;
            }
        },
        addShopCart(){
            // console.log(this.typeId)
        let token = this.$store.state.token;
        console.log(token)
            if(this.typeId == ""){// typeid == '' 如果用户没有选择规格
                //SKU的数量等于0,切按钮等于立即购买 则跳转至订单页   好吧  其实这块这么繁琐的原因是我sku没写好导致的 -.-
                if(!this.infoData.properties[0].childsCurGoods.length){//←这一串是SKU的数量 如果不存在子级规格
                    if(this.$store.state.shopBtnTxt == '立即购买'){//按钮等于立即购买
                    if(token == ""){this.$router.push('/login');return}; //判断登陆状态                
                    this.$router.push('/confirmOrder')     //跳转至订单页
                    }else if(this.$store.state.shopBtnTxt == '加入购物车'){ //等于加入购物车
                        this.addShop();             //加入购物车
                    }
                    return;
                }else{
                    alert("请选择规格！")
                    return;
                }
            }

            //用户选择了规格
            if(this.$store.state.shopBtnTxt == '立即购买'){
                if(token == ""){this.$router.push('/login');return};//判断登陆状态

                let shop = {
                    goodsId:this.infoData.basicInfo.id,
                    number:this.count,
                    propertyChildIds:this.infoData.properties[0].id+':'+this.typeId,
                    logisticsType:0,
                    name:this.infoData.basicInfo.name,
                    describe:this.infoData.basicInfo.characteristic,
                    price:this.infoData.basicInfo.originalPrice,
                    checked:true,
                    pic:this.infoData.basicInfo.pic,
                    typeTxt:'选择'+this.infoData.properties[0].name+':'+ this.name
                }
                this.$store.commit('setOrderList',shop);//保存至vux的订单列表
                this.toggleShade();//拟态框隐藏
                this.$router.push('/confirmOrder');    //跳转页面
            }else if(this.$store.state.shopBtnTxt == '加入购物车'){
                this.addShop(); //加入购物车
            }
        },
        setId(id,name){
            this.typeId = id;
            this.name = name
        },
        addShop(){
            let shop = {
                goodsId:this.infoData.basicInfo.id,//id
                number:this.count,//数量
                propertyChildIds:this.infoData.properties[0].id+':'+this.typeId,//SUK
                logisticsType:0,  //物流
                name:this.infoData.basicInfo.name,//title
                describe:this.infoData.basicInfo.characteristic,//简介
                price:this.infoData.basicInfo.originalPrice,//原价
                checked:true,//购物车内选中
                pic:this.infoData.basicInfo.pic,//图片
                typeTxt:'选择'+this.infoData.properties[0].name+':'+ this.name//规格(string) 不是必须的参数 自己用起来方便.
            }
            this.$store.commit('addShoppingCart',shop);//加入vux购物车列表
            this.$store.commit('accessToggle');//显示成功动画
            this.toggleShade(); //隐藏拟态框

        },

    }
}
</script>