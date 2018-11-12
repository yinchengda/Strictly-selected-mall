import axios from 'axios';
import global from '../config/global';
let{api} = global;

export default function classifyData(){
    return {
        state:{
            data:[],
            cloneData:[]
        },
        mutations:{
            setClassifyList(state,data){
                state.data = data;
            },
            saveCloneList(state,data){
                state.cloneData = data;
            },
            allCommodity(state){
                state.data = state.cloneData;
            }
        },
        actions:{
            getClassifyData({commit},callBack){
                axios.get(api+'/shop/goods/category/all')
                .then(res => {
                    let{data} = res.data;
                    commit("setClassifyList",data);
                    commit("saveCloneList",data)
                    callBack(data);
                })
            }
        },
        getters:{
            classifyData:state => state.data,
            classifyCloneData:state => state.cloneData
        }
    }
}