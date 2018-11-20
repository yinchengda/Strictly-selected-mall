<template>
    <footer class="cutshop-info-foot">
        <a @click="cutPriceFn">
            立即发起砍价 最低可砍到{{data.basicInfo?data.basicInfo.kanjiaPrice:''}}元
        </a>
    </footer>
</template>
<script>
export default {
    computed:{
        data(){
            return this.$store.getters.shopInfoData
        }
    },
    methods:{
        cutPriceFn(){
            // console.log(this.$store.state.token)
            if(this.$store.state.token == ""){
                let login = confirm('需要登陆后才能砍价,\n您要去登陆吗？')
                if(login){
                    this.$router.push('/login');
                    return;
                }else{
                    return;
                }
            }
            this.$router.push('/goCutPrice');
        }
    }
}
</script>