<template>
    <div class="classify-content">
        <Banner />
        <div class="list-main">
            <ul>
                <li v-for="(item,i) in data" :key="i" v-if="item.name != '牛仔'">
                    <img :src="item.icon" alt="" />
                    <p class="describe">{{item.name}}</p>
                </li>
                
                <!-- 模板 -->
                <!-- <li>
                    <img src="../../assets/img/classify_list.png" alt="" />
                    <p class="describe">男包</p>
                </li> -->
            </ul>
        </div>
    </div>
</template>
<script>
import Banner from './banner';
export default {
    components:{
        Banner
    },
    computed:{
        data(){
            return this.$store.getters.classifyData
        }
    },
    mounted(){
        this.$store.dispatch('getClassifyData',data =>{
            // console.log(data)
        })
        
    }
    
}
</script>

