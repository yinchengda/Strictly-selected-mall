<template>
    <div>
        <Message />
        <Main />
        <Foot />
    </div>
</template>
<script>
import Message from '../groupShopInfo/message';
import Main from '../common/shopMain';
import Foot from '../groupShopInfo/foot';
export default {
    components:{
        Message,
        Main,
        Foot
    }
}
    
</script>