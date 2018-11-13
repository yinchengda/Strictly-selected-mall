<template>
    <div class="addsite-main">
       <Head>新增地址</Head>
       <table cellspacing="0" cellpandding="0">
               <tr>
                   <td class="site-key">联系人</td>
                   <td class="site-value">
                       <input type="text" v-model="userName" placeholder="姓名">
                   </td>
               </tr>
               <tr>
                   <td class="site-key">手机号</td>
                   <td class="site-value">
                       <input type="text" v-model="userNum" placeholder="11位手机号码">
                   </td>
               </tr>
               <tr>
                   <td class="site-key">选择地区</td>
                   <td class="site-value">
                       <select>
                           <option>请选择</option>
                       </select>
                       <select>
                           <option>请选择</option>
                       </select>
                       <select>
                           <option>请选择</option>
                       </select>
                   </td>
               </tr>
               <tr>
                   <td class="site-key">详细地址</td>
                   <td class="site-value">
                       <input type="text" v-model="userSite" placeholder="街道门牌号">
                   </td>
               </tr>
               <tr>
                   <td class="site-key">邮政编号</td>
                   <td class="site-value">
                       <input type="text" v-model="userCode" placeholder="">
                   </td>
               </tr>
               <tr>
                   <td class="site-key"></td>
                   <th class="site-value">
                       <input type="checkbox" v-model="isDefault"/>设为默认地址
                   </th>
               </tr>
       </table>
       <button class="save-site" @click="addSite">保存</button>
       <!-- <button disabled="disabled">删除啊||ヽ(*￣▽￣*)ノミ|Ю</button> -->
       <button class="read-site">从微信读取</button>
       
       <button class="clear" @click="clear">取消</button>

    </div>
</template>
<script>
import axios from 'axios';
import Head from '@/components/common/header';
export default {
    data(){
        return{
            userName:'',
            userNum:'',
            userSite:'',
            userCode:'',
            isDefault:false
        }
    },
    components:{
        Head
    },
    methods:{
        addSite(){
            let token = this.$store.state.token;
            // console.log(token)
            if(this.userName!=''&this.userNum!=''&this.userSite!=''&this.userCode!=''){
                axios.post('https://api.it120.cc/small4/user/shipping-address/add',
                'address='+this.userSite+
                '&cityId=20'+
                '&code='+this.userCode+
                '&linkMan='+this.userName+
                '&mobile='+this.userNum+
                '&provinceId=10'+
                '&token='+token+
                '&isDefault='+this.isDefault
                ).then(res => {
                    if(res.data.code==0){
                        alert('添加成功！')
                        this.$router.push('/mySite')
                    }else{
                        console.log(res);
                    }
                })
            }else{
                alert('信息不完善！')
            }
        },
        clear(){
            window.history.back()
        }
    }
}
    
</script>