<template>
    <div class="selection-topices">
        <div class="title">
            <router-link to="/moduleInfo/topic">
            精选专题
            <i class="iconfont icon-jiantouyoubian"></i>
            </router-link>
        </div>
        <div class="selection-main">
            <div class="selection-container">
                <div class="selection-item" v-for="(item,i) in topicData" :key="i">
                    <div class="img-box">
                        <router-link :to="'/topic/'+item.id">
                            <img :src="item.pic" alt="" />
                        </router-link>
                    </div>
                    <div class="item-text">
                        <h3 class="topices-title">
                            {{item.title}}
                        </h3>
                        <p class="topices-desricbe">
                            {{item.descript}}
                        </p>
                        <div class="new-arryval">
                            <img src="../../assets/img/new_arryval.png" alt="" />
                        </div>
                    </div>
                </div>
                <!-- 模板 -->
                <!-- <div class="selection-item">
                    <div class="img-box">
                        <img src="../../assets/img/selection_topices1.png" alt="" />
                    </div>
                    <div class="item-text">
                        <h3 class="topices-title">
                            别吃外卖了，来喝碗鸡汤
                        </h3>
                        <p class="topices-desricbe">
                            鸡汤、银耳羹即食好物
                        </p>
                        <div class="new-arryval">
                            <img src="../../assets/img/new_arryval.png" alt="" />
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            topicData:[]
        }
    },
    mounted(){
        this.$store.dispatch('getTopicList',data => {
            this.topicData = data;
        })
    }
}
</script>
