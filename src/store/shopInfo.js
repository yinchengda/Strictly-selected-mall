import axios from 'axios';
import router from '../router';

export default function ShopInfo(){
    return {
        state:{
            shopInfoData:[],
            access_ok:false
        },
        mutations:{
            setShopData(state,data){
                state.shopInfoData = data;
            },
            accessToggle(state){
                state.access_ok = true;
                setTimeout(() => {
                    state.access_ok = false;
                },1500)
            }
        },
        actions:{
            getShopInfo({commit},callBack){
                let id = router.history.current.params.id;
                axios.post(global.globalData.api+'/shop/goods/detail',"id="+id)
                .then(res => {
                    let {data} = res.data;
                    commit("setShopData",data);
                    callBack(data)
                })
            },
            getShopEvaluate({commit},callBack){
                let id = router.history.current.params.id;
                axios.post('https://api.it120.cc/small4/shop/goods/reputation',
                'goodsId='+id
                ).then(res => {
                    callBack(res);
                })
            }
        },
        getters:{
            shopInfoData:(state) => state.shopInfoData
        }
    }
}
