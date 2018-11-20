import axios from 'axios';
// import global from '../config/global';
// let{global.globalData.api} = global;

export default function indexData() {
    return {
        state:{
            shopDataList:[]
        },
        
        mutations:{
            setShopDataList(state,data){
                state.shopDataList = data;
            }
        },
        actions:{
            getBanner({commit},callBack){
                axios.get(global.globalData.api+'/banner/list')   
                .then(res => {
                    let{data} = res.data;
                    // console.log(callBack)
                    callBack(data);
                })

            },
            /* 
             * 考虑到商品数据被多个组件使用(砍价、推荐..).        
             * 但因为他们是不同的组件，
             * （组件内data数据是私有的）
             * 所以在不同的组件，相同的接口需要请求多次
             * 同样的数据请求多次显然过于繁琐
             * 但要想只请求一次，需要通过组件传参... (更麻烦 -.-) 
             * 或者
             * 像这样，将他保存在中央仓库：
             */
            getShopDataList({commit}){
                axios.get(global.globalData.api+'/shop/goods/list')
                .then(res => {
                    let {data} = res.data;
                    commit("setShopDataList",data)
                })
            },
            getTopicList({commit},callBack){
                axios.get(global.globalData.api+'/cms/news/list')
                .then(res => {
                    let{data} = res.data;
                    callBack(data)
                })
            }
        },
        getters:{
            shopData:(state) => state.shopDataList
        }
    }
}