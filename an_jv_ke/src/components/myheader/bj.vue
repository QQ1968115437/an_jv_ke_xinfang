<template>
    <div class="bj">
        <a id="kuang1" href="#" class="dropdown-toggle" @mouseover="bg0" @mouseout="bg1">北京</a>
        <div v-show="bg2" class="w400 position-absolute p-3 border">
            <div v-for="(z,i) in A" :key="i">
                <i>{{i}}</i>
                <ul class="nav list-unstyled"><li v-for="(m,n) in z" :key="n"><router-link :to="m">{{n}}</router-link></li></ul>
                <b></b>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            bg2:false,A:{}
        }
    },
    methods: {
        bg0(){this.bg2=true},
        bg1(){this.bg2=false}
    },
    mounted () {
        this.axios.get("/header").then(a=>{
            this.A=a.data.bj;
        })
    }
}
</script>

<style>
.bj{z-index: 5;}
.bj a:hover>i{color: #f00;}
.bj .w400{width: 400px;left: 160px;top: 28px;background-color: #fffffff6;border-radius: 5px;}
.bj .w400 b{display: block; height: 1px;width: 100%;border-bottom: 1px dashed rgb(194, 194, 194);}
.bj .w400 a{font-size: 10px;color: #53a3ff; padding: 5px;}
.bj .w400 a:hover{color: #ffa053}
.bj .w400 i{font-size: 14px;}
.bj .w400:hover{display: block !important}
#kuang1{position: absolute;left: 160px; top: 8px;background-color: #fff;border: 0;color: rgb(105, 105, 105);font-size: 14px;}
#kuang1:hover{color: rgb(255, 68, 68);}
</style>