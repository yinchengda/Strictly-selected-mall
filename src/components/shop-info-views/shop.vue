<template>
    <div>
        <ShopMessage />
        <ShopMain />
        <Foot />
    </div>
</template>
<script>
import ShopMessage from '../shopInfo/shopMessage';
import ShopMain from '../common/shopMain';
import Foot from '../shopInfo/foot';
export default {
    components:{
        ShopMessage,
        ShopMain,
        Foot
    }
}
</script>