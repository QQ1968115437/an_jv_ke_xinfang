<template>
    <div>
        <ceshi :zhu_zong="zhu_zong" v-model="xian" @on-jump="jump"></ceshi>
    </div>
</template>

<script>
import ceshi from '../components/Canvas/huojian'
export default {
    components:{
        ceshi
    },
    data () {
        return {
            zhu_zong: 30,
            xian: 1
        }
    },
    methods:{
    jump(id){
        console.log(id)
    }
    }
}
</script>

<style>

</style>