import axios from 'axios';


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
                axios.get(global.globalData.api+'/shop/goods/category/all')
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