<template>
    <div class="bj">
        <a id="kuang1" href="#" class="dropdown-toggle" @mouseover="bg0" @mouseout="bg1">北京</a>
        <div v-show="bg2" class="w400 position-absolute p-3 border">
                <i>华北东北</i>
                <ul class="nav list-unstyled"><li v-for="(zhi,i) in AA[0]" :key="i"><a :href="i">{{zhi}}</a></li></ul>
                <b></b>
                <i>华东地区</i>
                <ul class="nav list-unstyled"><li v-for="(zhi,i) in AA[1]" :key="i"><a :href="i">{{zhi}}</a></li></ul>
                <b></b>
                <i>华南地区</i>
                <ul class="nav list-unstyled"><li v-for="(zhi,i) in AA[2]" :key="i"><a :href="i">{{zhi}}</a></li></ul>
                <b></b>
                <i>中 西 部</i>
                <ul class="nav list-unstyled"><li v-for="(zhi,i) in AA[3]" :key="i"><a :href="i">{{zhi}}</a></li></ul>
                <b></b>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            bg2:false,
            AA:[{"#1":"北京","#2":"天津","#3":"廊坊","#4":"石家庄","#5":"太原","#6":"包头","#7":"潍坊","#8":"烟台","#9":"大连","#10":"哈尔滨","#11":"沈阳","#12":"长春","#13":"保定","#14":"淄博","#15":"秦皇岛","#16":"呼和浩特"},

            {"#17":"上海","#18":"昆山","#19":"杭州","#20":"苏州","#21":"南京","#22":"无锡","#23":"宁波","#24":"合肥","#9":"济南","#10":"青岛","#11":"南通","#12":"扬州","#13":"常州","#14":"蚌埠","#15":"湖州","#16":"绍兴","#16":"徐州","#16":"温州","#16":"盐城","#16":"太仓","#16":"嘉兴"},

            {"#1":"深圳","#2":"广州","#3":"佛山","#4":"三亚","#5":"惠州","#6":"福州","#7":"厦门","#8":"东莞","#9":"珠海","#10":"中山","#11":"江门","#12":"南宁","#13":"南昌","#14":"海口"},

            {"#1":"成都","#2":"重庆","#3":"武汉","#4":"郑州","#5":"西安","#6":"长沙","#7":"昆明","#8":"贵阳","#9":"洛阳","#10":"乌鲁木齐","#11":"兰州","#12":"许昌","#13":"宜昌","#14":"南阳","#15":"郴州","#16":"咸阳","#16":"绵阳"}]
        }
    },
    methods: {
        bg0(){this.bg2=true},
        bg1(){this.bg2=false}
    }
}
</script>

<style>
.bj a:hover>i{color: #f00;}
.bj .w400{width: 400px;left: 160px;top: 30px;background-color: #fffffff6;}
.bj .w400 b{display: block; height: 1px;width: 100%;border-bottom: 1px dashed rgb(194, 194, 194);}
.bj .w400 a{font-size: 10px;color: #53a3ff; padding: 5px;}
.bj .w400 a:hover{color: #ffa053}
.bj .w400 i{font-size: 14px;}
.bj .w400:hover{display: block !important}
.bj #kuang1{position: absolute;left: 160px; top: 8px;background-color: #fff;border: 0;color: rgb(105, 105, 105);font-size: 14px;}
.bj #kuang1:hover{color: rgb(255, 68, 68);}
</style>