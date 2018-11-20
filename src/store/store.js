import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import IndexData from './index';
import ClassifyData from './classify';
import ShopInfo from './shopInfo';
import ShopCar from './shopCar';

const indexData = IndexData();
const classifyData = ClassifyData();
const shopInfo = ShopInfo();
const shopCar = ShopCar();

Vue.use(Vuex);


const store = new Vuex.Store({
    state:{
        shopBtnTxt:'立即购买',
        lazyShow:false,
        userName:'',
        token:'',//e7a49293-9f0c-45ef-965b-ebf3750fc5a0
        orderList:[],
        orderNum:'',
        orderAllPrice:'木有计算完'
    },
    mutations:{
        setUserToken(state,token){
            state.token = token;
            console.log(token)
        },
        toggleLazyShow(state,sl){
            if(sl){
                state.lazyShow = !state.lazyShow;
                state.shopBtnTxt = '加入购物车'
            }else{
                state.lazyShow = !state.lazyShow
                state.shopBtnTxt = '立即购买'
            }
        },
        setOrderList(state,data){
            if(!data.length){
                state.orderList = [data];
                return;
            }
            state.orderList = data;
            // console.log(JSON.stringify(state.orderList));
        },
        setOrderNum(state,oredrnum){
            state.orderNum = oredrnum;
        },
        setOrderAllPrice(state,price){
            state.orderAllPrice = price;
        }
    },
    actions:{
        
    },
    getters:{
        _orderNum:state => state.orderNum,
        _orderAllPrice:state => state.orderAllPrice
    },
    modules:{
        indexData,
        classifyData,
        shopInfo,
        shopCar
    }
})

export default store