        <!-- 页头-下-->
<template>
    <div class="yt003">
        <ul class="nav">
            <li v-for="(zhi,i) in yt3" :key="i" class="nav-item"><a :href="i" class="nav-link m-0 h6">{{zhi}}</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
    return {
        yt3:{"/1":"新盘","/2":"楼讯","/3":"热门活动","/4":"看房团","/5":"房源","/6":"商业地产","/7":"海外地产","/8":"品牌专区"}
    }
}}
</script>

<style>
.yt003>ul{background-color:#62ab00;}
.yt003>ul>li>a{padding: 10px 18px;}
.yt003 .nav-item a.h6 {
    height: 100%;
    color: #fff;
}
.yt003 .nav .nav-item .active {
    background-color: #599700;
}
.yt003 .nav .nav-item a:hover,.nav .nav-item a:focus {
    background-color: #599700;
}
.yt003 ul>li:nth-child(1)>a{background-color: #599700;}
</style>
    