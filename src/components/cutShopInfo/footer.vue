<template>
    <footer class="cutshop-info-foot">
        立即发起砍价 最低可砍到{{data.basicInfo?data.basicInfo.kanjiaPrice:''}}元
    </footer>
</template>
<script>
export default {
    computed:{
        data(){
            return this.$store.getters.shopInfoData
        }
    }
}
</script>