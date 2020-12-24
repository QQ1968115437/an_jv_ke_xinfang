<template>
    <div>
        <myheader :u="5"/>

        <div class="yt1 my-4">
            <!-- 上 -->
            <div class="pt-2 mb-4">
                <div class="m-0 lie">
                    <div class="border bg-white border-bottom-0 lv2">列表找房</div>
                    <!-- <div>地图找房</div> -->
                </div>
                <div class="border pl-3">
                    <p class="d-flex mb-1" v-for="(z,i) in AA" :key="i">
                        <span class="text-nowrap">{{i}}：</span>
                        <ul class="d-flex flex-wrap m-0">
                            <li class="px-2 py-1" v-for="n of z" :key="n">{{n}}</li>
                        </ul>
                    </p>
                </div>
            </div>
            <!-- 中 -->
            <div class="d-flex">
                <div class="lv position-relative w-75">
                    <ul class="d-flex border-bottom m-0">
                        <li class="px-3 py-2 border-right lv2">全部房源</li>
                        <!-- <li class="px-4 py-2 border-right">在售</li> -->
                        <!-- <li class="px-4 py-2 border-right">预告</li> -->
                    </ul>
                    <div class="border-left border-right">
                        <span class="float-right pt-2 pr-3">共有 <span class="text-success">576</span> 套符合要求的 北京新房 房源</span>
                        <ul class="d-flex m-0">
                            <li>推荐</li>
                            <li>最新发布</li>
                            <li>最受关注</li>
                            <li>总价</li>
                        </ul>
                    </div>
                    <div v-for="i of 8" :key="i" class="border mb-3 d-flex p-3">
                        <div class="mr-3">
                            <div><img src="https://pic4.ajkimg.com/display/xinfang/8539443e8a19fb3bd1092d4e82cf59ca/160x120m.jpg" alt=""></div>
                        </div>
                        <div class="w-100">
                            <p>3室1厅2卫 114.95m²</p>
                            <p>[房山 地质公园] 长海御墅 云居寺路 <span class="float-right">售价待定</span></p>
                        </div>
                    </div>
                </div>
                <!-- 右侧栏 -->
                <div class="w-25 pl-4">
                    <ul class="border list-unstyled">
                        <li class="h37">
                            热门楼盘<span class="float-right mr-4 mt-1 h6">更多>></span>
                        </li>
                        <li class="h220" v-for="(z,i) of youce" :key="i">
                            <div class="mb-2"><img class="w-100" :src="require(`@/img/QuanBu/${z.imgs}`)" alt=""></div>
                            <span>{{z.wen1}}</span>
                            <div class="my-1">
                                <span class="text-danger m-0 h6">{{z.wen2}}</span>
                                <i class="float-right">{{z.shu}}人已报名</i>
                            </div>
                            <i class="xuxian"></i>
                        </li>
                    </ul>
                    <div class="h220 border my-3">
                        <h5>北京房价行情</h5>
                        <p class="mb-1">11月均价：<em class="text-danger">40951元/平米</em></p>
                        <p class="mb-1">比10月上涨：<em class="text-danger">↑0.36%</em></p>
                        <div class="mb-2"><img class="w-100" src="@/img/QuanBu/chart.anjukestatic.png" alt=""></div>
                    </div>
                    <div class="h220 border py-2">
                        <img class="w-100 h-100" src="@/img/QuanBu/58_jinrong.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="ru">
            <iframe src="http://localhost:8080/#/002" width="100%" height="10000" frameborder="0" scrolling="no"></iframe>
        </div>
        <myfooter/>
    </div>
</template>

<script>
import myheader from '@/components/myheader/myheader'
import myfooter from '@/components/myfooter/myfooter'

export default {
    components: {
        myheader,myfooter
    },
    data () {
        return {
            AA:{},youce:[]
        }
    },
    mounted () {
        this.axios.get("/FangYuan_1").then(a => {
            this.AA=a.data
        }),
        this.axios.get("/QuanBu02_youce").then(a => {
            this.youce=a.data;
        })
    }
}
</script>

<style scoped>
/* 上 */
.lie>div{border-radius: 5px 5px 0 0;padding: 5px 15px;display: inline-block;position: relative;top: 1px;}
.lie+div li{font-size: 15px;}
.lie+div li:hover,.lie+div li:nth-child(1){color: rgb(231, 90, 71)}
/* 中 */
.lv>ul{color: #818181;user-select: none;cursor: pointer;height: 40px;background-color: #f5f5f5;}
.lv2{color: #60ad00;border-top: 2px solid #62ab00;outline: 1px solid #fff;border-left: 1px solid #d8d8d8;background-color: #fff;}
.lv>div>ul>li{font-size: 14px;padding: 10px 15px;}
.lv>div>ul>li:hover{color: #e04b31;}
.xuxian{border-bottom: 1px dashed rgb(223, 223, 223);}

.h37{height: 37px;padding: 13px 0 0 24px;font-size: 18px;}
.h220{height: 220px;font-size: 14px;padding: 14px 25px 0;}

.ru{height: 120px;margin: 30px 0;overflow: hidden;position: relative;}
.ru>iframe{position: absolute;top: -5844px;}
</style>