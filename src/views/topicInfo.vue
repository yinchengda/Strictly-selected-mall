<template>
    <div class="topice-info">
        <Head>专题详情</Head>
        <div class="main">
            <div class="title">
                <div class="img-box">
                    <img class="author-img" :src="img" alt="" />
                </div>
                <p class="describe">
                    {{describe}}
                </p>
            </div>
            <!-- 内容 -->
            <div id="topic-content" style="font-size:.6rem;padding:.5rem;line-height:1rem" v-html="ihtml"></div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import Head from "@/components/common/header";
export default {
    components:{
        Head
    },
    data(){
        return {
            ihtml:'',
            img:'',
            describe:''
        }
    },
    mounted(){
        let id = this.$route.params.id;
        axios.get('https://api.it120.cc/small4/cms/news/detail/?id='+id)
        .then(res => {
            let {data} = res.data;
            this.ihtml = data.content;
            this.img = data.pic;
            this.describe = data.descript;
        })
    }
}    
</script>
<style lang="scss" scoped>
.topice-info{
    .main{
        .title{
            .img-box{
                    // flex: 0 0 100%;
                    width: rem(30);
                    height: rem(30);
                    border-radius: 50%;
                    overflow: hidden;
                .author-img{
                    width: 100%;
                    height: 100%;
                }
            }
            .describe{

            }
        }
        
    }
}
</style>

