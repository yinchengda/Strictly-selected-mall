<template>
    <div id="moduleInfo">
        <Head>{{title}}</Head>
        <GroupBooking v-if="group"/>
        <CutPrice v-if="cut"/>
        <Topic v-if="topic"/>
    </div>
</template>
<script>
import Head from "@/components/common/header";
import GroupBooking from '@/components/moduleInfoList/groupBooking';
import CutPrice from '@/components/moduleInfoList/cutPrice';
import Topic from '@/components/moduleInfoList/topic';
export default {
    components:{
        Head,
        GroupBooking,
        CutPrice,
        Topic
    },
    data(){
        return {
            title:"",
            group:false,
            cut:false,
            topic:false,
            recommend:false
        }
    },
    created(){
        // console.log();
        
        // 获取from 
        let from = this.$route.params.type;//或者这样：this.$router.history.current.params.type;
        console.log(from)
        if(from == 'group'){
            this.title = "拼团列表";
            this.group = true;
        }else if(from == "cutPrice"){
            this.title = "全民砍价";
            this.cut = true;
        }else if(from == 'topic'){
            this.title = "严选专栏";
            this.topic = true;
        }else if(from == 'topicInfo'){
            this.title = '专栏详情'
        }else if(from == '推荐'){
            this.title = "c";
            this.c = true;
        }else{
            this.$router.push("/index")
        }
    },
    methods:{

    }
}
</script>
<style scoped>
#moduleInfo{
    background: #fff;
}
</style>
