<template>
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
                    <i @click="toggleShade" class="iconfont icon-guanbi"></i>
                </div>
                <div class="type-content">
                    <div class="type-box" v-for="(item,i) in infoData.properties" :key="i">
                        <div class="title">
                            {{item.name}}
                        </div>
                        <span  v-for="(ele,i) in item.childsCurGoods" :key="i" @click="setId(ele.id,ele.name)" :class="ele.id == typeId?'item active':'item'">{{ele.name}}</span>
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
                <span class="foot" @click="addShopCart(true)">
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
        addShopCart(type){
            if(this.typeId == ""){
                if(!this.infoData.properties[0].childsCurGoods.length){
                    if(this.$store.state.shopBtnTxt == '立即购买'){
                        this.$router.push('/confirmOrder')
                    }else{
                        this.addShop();
                    }
                    return;
                }else{
                    alert("请选择规格！")
                    return;
                }
            }

            if(this.$store.state.shopBtnTxt == '立即购买'){
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
                this.$store.commit('setOrderList',shop);
                this.$router.push('/confirmOrder');
                this.toggleShade()
            }else{
                this.addShop();
            }
        },
        setId(id,name){
            this.typeId = id;
            this.name = name
        },
        addShop(){
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
            this.$store.commit('addShoppingCart',shop);
            this.$store.commit('accessToggle')
            this.toggleShade();

        },

    }
}
</script>