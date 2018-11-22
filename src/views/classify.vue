<template>
    <div id="classify">
        <Top />
        <div class="classify-container">
            <List />
            <Content />
        </div>  
    </div>
</template>
<script>
import axios from 'axios';
import Top from '@/components/classify/classify-top';
import List from '@/components/classify/classify-list';
import Content from '@/components/classify/classify-content';
import setHeigt from '../utils/setHeight';
export default {
    components:{
        Top,
        List,
        Content
    },
    mounted(){
        setHeigt();// -.- Bug百出的一个...一个...插件？工具？设高器（-.-）?
    }
}
</script>
<style scoped>
</style>
