
export default function ShopCar(){
    return {
        state:{
            shopDataList:[],
            text:'编辑',
            btnDel:false
        },
        mutations:{
            getLocationShopData(state){
                let data = JSON.parse(localStorage.getItem('shopData'));
                if(data == null){
                    return;
                }
                state.shopDataList = data;
            },
            setLocationShopData(state){
                localStorage.setItem('shopData',JSON.stringify(state.shopDataList));
            },
            addShoppingCart(state,shop){
                //判断购物车中是否存在要添加商品，如果存在，则只加数量；不存在则push
                //一些问题：
                //同样的商品 不同的规格 是否需要新建一个对象-.-
                let some = true;
                state.shopDataList.forEach(ele => {
                    if(ele.goodsId == shop.goodsId){
                        some = false;
                        ele.number+=shop.number;
                    }
                })
                if(some){
                    state.shopDataList.push(shop);
                }
                this.commit('setLocationShopData')
            },
            addCount(state,id){
                state.shopDataList.forEach(ele => {
                    if(ele.goodsId == id){
                        ele.number++
                    }
                })
                this.commit('setLocationShopData')
            },
            minusCount(state,id){
                state.shopDataList.forEach(ele => {
                    if(ele.goodsId == id){
                        ele.number<=1?'':ele.number--;
                    }
                })
                this.commit('setLocationShopData')
            },
            checkedToggle(state,id){
                state.shopDataList.forEach(ele => {
                    if(ele.goodsId == id){
                        ele.checked = !ele.checked;
                    }
                })
                this.commit('setLocationShopData')
            },
            allCheckToggle(state,check){
                state.shopDataList.forEach(ele => {
                    ele.checked = !check
                });
                this.commit('setLocationShopData')
            },
            redactFn(state,ber){
                if(ber){
                    state.text = '完成';
                    state.btnDel = true;
                }else{
                    state.text = '编辑';
                    state.btnDel = false;
                }
            },
            removeFn(state){
                let ok = confirm('您确定要删除这些商品吗？');
                if(ok){
                    state.shopDataList = state.shopDataList.filter(ele => {
                        return !ele.checked
                    })

                    /* 这... 我一直在纠结于 '删除' ; 根本没有想到过滤 -.-|||  look!↓*/
                    // state.shopDataList.forEach((ele,i) => {
                    //     if(ele.checked){
                    //         // console.log(state.shopDataList.indexOf(ele));
                    //         state.shopDataList.splice(state.shopDataList.indexOf(ele),1);
                    //         // state.shopDataList.remove(state.shopDataList.indexOf(ele));
                    //     }
                    // })
                    this.commit('setLocationShopData')
                }
            }
        },
        getters:{
            shopCartList:state => state.shopDataList
        }
    }
}