<template>
    <div id="QuanBu03">
        <!-- 猜你喜欢 -->
        <div class="w-100 h270">
            <p class="h5">猜你喜欢</p>
            <ul class="d-flex list-unstyled justify-content-between m-0">
                <li class="w-25 position-relative" v-for="(z,i) of A" :key="i">
                    <img class="w-100 pr-3" :src="require(`@/img/QuanBu/${z.imgs}`)" alt="">
                    <i class="position-absolute"></i>
                    <p><a :href="z.href">{{z.wen}}</a></p>
                    <p>{{z.nb}}元/㎡</p>
                </li>
            </ul>
        </div>
        <div v-for="(z,i) of B" :key="i">
            <img :src="require(`@/img/QuanBu/${z.imgs}`)" alt="">
        </div>
            <!-- 底部推荐，相关信息 -->
        <div>
            <div class="text-center my-3 pb-3 border-bottom">
                <p class="mb-1">北京房产网，提供北京楼盘信息，包括北京新开楼盘，在售楼盘，新房开盘等。安居客北京新房房产信息网频道，让您了解楼盘动态。</p>
                <a v-for="(z,i) in C" :key="i" :href="z.href">{{z.wen}}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            A:[],B:[],C:[]
        }
    },
    mounted () {
        this.axios.get("/QuanBu03").then(a => {
            this.A=a.data.a;
            this.B=a.data.b;
            this.C=a.data.c;
        })
    }
}
</script>

<style scoped>
.h270{height: 270px;font-size: 14px;}
a{font-size: 14px;color: rgb(90, 90, 90);padding: 0 5px;}
a:hover>i{color: #f00;}
a:hover{color: rgb(255, 51, 15);text-decoration: none;}
div.h270>ul>li>i:nth-child(2){top: 140px;left: 8px;width: 20px;height: 20px;background-repeat: no-repeat;background-size: 20px; background-image: url("../../img/QuanBu/download.png");}
div.h270>ul>li>p:nth-child(3)>a{font-size: 16px;}
div.h270>ul>li>p{margin-top: 4px;margin-bottom: 4px;color: rgb(255, 102, 14);}
#QuanBu03>div:last-child>div{color: rgb(150, 150, 150);}
</style>