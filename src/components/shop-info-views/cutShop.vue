<template>
    <div>
        <CutShop />
        <ShopMain />
        <Foot />
    </div>
</template>
<script>
import CutShop from '../cutShopInfo/shopMessage';
import ShopMain from '../common/shopMain';
import Foot from  '../cutShopInfo/footer';
export default {
    components:{
        CutShop,
        ShopMain,
        Foot
    }
}
</script>