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
                        <select @change="seleFn(true,selectDepth,depthList)" v-model="selectDepth">
                           <option>请选择</option>
                           <option v-for="(item,i) in depthList" :key="i" >{{item.name}}</option>
                        </select>
                        <select v-model="seleRegion" @change="twoSele">
                           <option>请选择</option>
                           <option v-for="(item, i) in regionList" :key="i">{{item.name}}</option>
                        </select>
                        <select v-model="seleCounty" @change="thereFn">
                           <option>请选择</option>
                           <option v-for="(item, i) in countyList" :key="i">{{item.name}}</option>
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
            isDefault:false,
            depthList:[],
            selectDepth:'请选择',
            regionList:[],
            seleRegion:'请选择',
            countyList:[],
            seleCounty:'请选择',
            depthId:'',
            regionId:'',
            countyId:''
        }
    },
    components:{
        Head
    },
    mounted(){
        axios.post('https://api.it120.cc/common/region/province')
        .then(res =>{
            if(res.data.code == 0){
                let {data} = res.data;
                // console.log(data)
                this.depthList = data;
            }
        })
    },
    methods:{
        addSite(){
            let token = this.$store.state.token;
            // console.log(token)
            if(this.userName!=''&this.userNum!=''&this.userSite!=''&this.userCode!=''&this.depthId!=''&this.regionId!=''){
                axios.post('https://api.it120.cc/small4/user/shipping-address/add',
                'address='+this.userSite+
                '&cityId='+this.regionId+
                '&code='+this.userCode+
                '&districtId'+this.countyId+
                '&linkMan='+this.userName+
                '&mobile='+this.userNum+
                '&provinceId='+this.depthId+
                '&token='+token+
                '&isDefault='+this.isDefault
                ).then(res => {
                    // console.log(res)
                    if(res.data.code==0){
                        alert('添加成功！')
                        this.$router.push('/mySite')
                    }else{
                        // console.log(res);
                    }
                })
            }else{
                alert('信息不完善！')
            }
        },
        clear(){
            window.history.back()
        },
        seleFn(isOne,select,list){
            let id;
            if(isOne){
                if(select!='请选择'){
                // console.log(select);
                // console.log(list)
                // list.forEach(ele => {
                //     if(ele.name==select){
                //         id = ele.id;
                //     }
                // })
                id = this.getId(list,select);
                this.depthId = id; //保存市id
                // console.log(id)
                axios.post('https://api.it120.cc/common/region/child?',
                'pid='+id
                ).then(res => {
                    // console.log(res);
                    this.regionList = res.data.data;                    
                })
                }
            }else{
                
            }
        },
        twoSele(){
            let id = this.getId(this.regionList,this.seleRegion);
            this.regionId = id;//保存区id;
            axios.post('https://api.it120.cc/common/region/child?',
            'pid='+id
            ).then(res => {
                // console.log(res);
                this.countyList = res.data.data;                    
            })
        },
        thereFn(){
            this.countyId = this.getId(this.countyList,this.seleCounty);
        },
        getId(list,name){
            // console.log(list,name)
            let id;                //不定义变量直接return ele.id会出错  原因：待解.
            list.forEach(ele => {
                if(ele.name == name){
                    // console.log(ele)
                    // console.log(ele.id)
                    id= ele.id
                }
            })
            return id;
        }

    }
}
    
</script>