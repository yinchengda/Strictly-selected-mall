<template>
    <div class="my-site-main">
       <Head>我的地址</Head>
       <div class="my-site-list">
           <div class="site-item" v-for="(item,i) in siteData" :key='i'>
               <div class="checked-box">
                   <input type="checkbox" :checked="item.isDefault"/>
               </div>
               <div class="site-message">
                   <p class="username-num">
                       {{item.linkMan}} 
                       {{item.mobile}}
                   </p>
                   <p class="describe">
                       {{item.address}}
                   </p>
               </div>
               <div class="icon-right">
                   <i class="iconfont icon-dingdan"></i>
                   <span class="del" @click="removeSite(item.id)">×</span>
               </div>
           </div>
       </div>
       <div class="foot">
           <router-link to="/addSite">
            <span>+</span>
            新增地址
           </router-link>
       </div>
    </div>
</template>
<script>
import axios from 'axios';
import Head from '@/components/common/header';
export default {
    data(){
        return {
            siteData:[]
        }
    },
    components:{
        Head
    },
    created(){
        let token = this.$store.state.token;
        if(!token){
            this.$router.push('/login')
        }else{
            this.getSiteData(token)
        }
    },
    methods:{
        removeSite(id){
            // alert('假装删除成功！');
            console.log(id);
            // let token = this.$store.state.token;
            // console.log(token)
            // axios.post('https://api.it120.cc/small4/user/shipping-address/delete'+
            // '?token=fea830fc-93ff-4c35-a28b-588598ee0f53'+
            // '&id='+id
            // ).then(res => {
            //     alert('删除成功！');
            //     this.getSiteData(token)
            // })
        },
        getSiteData(token){
            axios.post('https://api.it120.cc/small4/user/shipping-address/list/','token='+token)
            .then(res => {
                this.siteData=res.data.data;
            })
        }
    }
}
    
</script>