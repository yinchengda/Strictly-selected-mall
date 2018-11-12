import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import IndexData from './index';
import ClassifyData from './classify';
import ShopInfo from './shopInfo';

const indexData = IndexData();
const classifyData = ClassifyData();
const shopInfo = ShopInfo();

Vue.use(Vuex);


const store = new Vuex.Store({
    state:{
        userName:'',
        token:'',
    },
    mutations:{
        setUserToken(state,token){
            state.token = token;
        }
    },
    actions:{

    },
    getters:{
        
    },
    modules:{
        indexData,
        classifyData,
        shopInfo
    }
})

export default store