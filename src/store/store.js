import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import IndexData from './index';
import ClassifyData from './classify';
import ShopInfo from './shopInfo';
import ShopCar from './shopCar';
import EvaluateShopData from './evaluate';

const indexData = IndexData();
const classifyData = ClassifyData();
const shopInfo = ShopInfo();
const shopCar = ShopCar();
const evaluateShopData = EvaluateShopData()

Vue.use(Vuex);


const store = new Vuex.Store({
    state:{
        shopBtnTxt:'',
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
            state.lazyShow = !state.lazyShow;
            state.shopBtnTxt = sl
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
        shopCar,
        evaluateShopData
    }
})

export default store