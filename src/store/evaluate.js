import axios from 'axios';


export default function EvaluateShopData(){
    return {
        state:{
           shopAll:[],
           evaluateShopMessage:[],
           i:''
        },
        mutations:{
          setEvaluateShopMessage(state,iData){
              let{data,i} = iData;
              state.evaluateData = data;
              state.i = i;
            //   console.log(state.evaluateData);
            //   console.log(i)
          },
          saveShopAll(state,data){
              state.shopAll = data;
          }
        },
        actions:{
          
        },
        getters:{
            
        }
    }
}