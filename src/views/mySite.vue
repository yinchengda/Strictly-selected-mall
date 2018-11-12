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
        // console.log(token)
        if(!token){
            this.$router.push('/login')
        }else{
            axios.post('https://api.it120.cc/small4/user/shipping-address/list/','token='+token)
            .then(res => {
                this.siteData=res.data.data;
                // console.log(this.siteData)
            })
        }
    }
}
    
</script>