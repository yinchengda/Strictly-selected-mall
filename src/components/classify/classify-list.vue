<template>
    <div class="classify-left">
        <ul id="classify-list">
            <li class="active" @click="all">
                所有分类
            </li>
            <li @click="filterData('jujia2')">
                居家生活
            </li>
            <li @click="filterData('peishi2')">
                配件服饰
            </li>
            <li @click="filterData('fuzhuang2')">
                新品服装
            </li>
        </ul>
    </div>    
</template>
<script>
import priceFilter from '@/utils/priceFilter';
export default {
    mounted(){
        priceFilter('classify-list','li');
    },
    computed:{
        data(){
            return this.$store.getters.classifyCloneData
        }
    },
    methods:{
        filterData(type){
            let data;
            data = 
            this.data.filter(item =>{
                return item.type == type;
            })
            this.$store.commit('setClassifyList',data)
        },
        all(){
            this.$store.commit('allCommodity')
        }
    }
}
</script>

