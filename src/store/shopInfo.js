import axios from 'axios';
import router from '../router';
import global from '../config/global';
let{api} = global;


export default function ShopInfo(){
    return {
        state:{
            shopInfoData:[]
        },
        mutations:{
            setShopData(state,data){
                state.shopInfoData = data;
            }
        },
        actions:{
            getShopInfo({commit},callBack){
                let id = router.history.current.params.id;
                
                axios.post(api+'/shop/goods/detail',"id="+id)
                .then(res => {
                    let {data} = res.data;
                    commit("setShopData",data);
                    callBack(data)
                })
            }
        },
        getters:{
            shopInfoData:(state) => state.shopInfoData
        }
    }
}
