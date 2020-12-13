<!-- 主楼盘区 -->
<template>
    <div id="QuanBu02" class="row no-gutters justify-content-between">
        <div class="w-76">
            <ul class="row no-gutters h40 border-bottom text-center">
                <li class="col-2 py-2 border xuanfu-1">全部楼盘</li>
                <li class="col-2 py-2 border"><span class="mr-2 font-weight-bold">♙</span><a href="#">近期开盘</a></li>
                <li class="col-2 py-2 border"><span class="mr-2 font-weight-bold">♔</span><a href="#">优惠楼盘</a></li>
            </ul>
            <div class="h50 text-right pt-3">
                <span class="float-left">共有<em class="text-danger">{{zhu.length}}</em>个符合要求的<em>北京楼盘</em></span>
                <span>
                    <a href="#" class="text-danger">默认排序</a>
                    <a href="#" class="ml-2 mr-1">价格</a>▼
                    <a href="#" class="ml-2 mr-1">开盘时间</a>▼
                </span>
            </div>
            <div class="h100"><a href="#"><img src="@/img/QuanBu/dd752a4ca204c24bf7ced5a5d05615fb.jpg" alt=""></a></div>

            <div class="py-3 d-flex h215" v-for="(z,i) of zhu" :key="i">
                <div class="mb-5 mr-3 position-relative">
                    <img :src="require(`@/img/QuanBu/${z.imgs}`)" alt="">
                    <img class="position-absolute bofang" src="@/img/QuanBu/icon_video_m.png" alt="">
                </div>
                <ul class="d-flex flex-column list-unstyled m-0 w-100 zi-1 justify-content-between">
                    <li><a href="#">{{z.wen1}}</a></li>
                    <li class="d-flex justify-content-between align-items-center">
                        <div class="pt-2">{{z.wen2}}</div>
                        <div>总价<span>{{z.jia}}</span>万元/套起</div>
                    </li>
                    <li>
                        <div>
                            户型：<span>{{z.xing}}</span><i> | </i>
                            建筑面积：<span>{{z.mian}}</span>
                        </div>
                    </li>
                    <li>
                        <ul class="d-flex biaoqian">
                            <li class="ml-3" v-for="(m,n) of z.biaoqian" :key="n">{{m}}</li>
                        </ul>
                    </li>
                    <li>
                        <img :src="require(`@/img/QuanBu/${z.bang}`)" alt="">
                        <span class="ml-2">{{z.banged}}</span>
                        <span class="float-right">▼ {{z.hd}}</span>
                    </li>
                </ul>
            </div>
            
            <!-- 分页条 -->
            <div class="mt-5 clearfix mb-4">
                <div class=" mt-2 float-left text-info">共有866个有关北京新房楼盘</div>
                <ul class="d-flex float-right" style="cursor: pointer;">
                    <li class="btn-sm btn-success px-3 ml-2">上一页</li>
                    <li v-for="(z,i) of 7" :key="i" class="btn-sm btn-success px-3 ml-2">{{i+1}}</li>
                    <li class="btn-sm btn-success px-3 ml-2">...</li>
                    <li class="btn-sm btn-success px-3 ml-2">下一页</li>
                </ul>
            </div>
        </div>
            <!-- 右侧栏 -->
        <div class="w-22">
            <ul class="border list-unstyled">
                <li class="h37">
                    热门楼盘<a href="#" class="float-right mr-4 mt-1">更多>></a>
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
</template>
<script>
export default {
    data() {
        return {
            zhu:[],youce:[]
        }
    },
    mounted() {
        this.axios.get("/QuanBu").then(a => {
            this.zhu=a.data.Quan02.zhu;
            this.youce=a.data.Quan02.youce;
        })
    }
}
</script>
<style scoped>
.w-22{width: 22%;}
.w-76{width: 76%;}
.w100{width: 100px;color: rgb(88, 88, 88);}
.w400{width: 400px;left: 160px;top: -80px;background-color: #f0f0f0f6;}
.h347{height: 347px;}
.h40{height: 40px;}
.h50{height: 50px; font-size: 14px;}
.h100{height: 100px;}
.h37{height: 37px;padding: 13px 0 0 24px;font-size: 18px;}
.h215{height: 215px;border-bottom: 1px dashed rgb(172, 172, 172);}
.h220{height: 220px;font-size: 14px;padding: 14px 25px 0;}
.mt-80{margin-top: 80px;}
.mt-45{margin-top: 45px;}
.xuxian{height: 1px;border-bottom: 1px dashed rgb(223, 223, 223);}
.border-bottom{border-bottom: 2px solid #62ab00 !important;}

.bianhong>a,.bianhong>a>i{color: #f00 !important;}

li.h220:hover,div.py-3.d-flex.h215:hover,img:hover{background-color: #e9e9e938;cursor: pointer;}

a{font-size: 14px;color: rgb(80, 80, 80);}
a:hover{color: rgb(255, 51, 15);text-decoration: none;}

.h347>div i{font-size: 5px;color: rgb(85, 85, 85);}
.h347>div{font-size: 14px;color: rgb(85, 85, 85);}
a:hover>i{color: #f00;}

.w400 b{display: block; height: 1px;width: 100%;border-bottom: 1px dashed rgb(194, 194, 194);}
.w400 a{font-size: 10px;color: #53a3ff; padding: 5px;}
.w400 a:hover{color: #ffa053}
.w400 i{font-size: 14px;}
.w400:hover{display: block !important}
#kuang1{position: absolute;left: 160px; top: -100px;background-color: #fff;border: 0;}

.dropdown-menu {
    min-width: 6rem;
    margin-top: 0;
    font-size: 0.9rem;
    padding: 0.5rem 0.5rem;
    background-color: rgba(255, 255, 255, 0.692);
    border: 1px solid rgba(163, 163, 163, 0.15);
    color: #494949;
}
.dropdown-toggle {
    color: #494949;
    border-radius: 8px;
    border: 1px solid #d1d1d1;
    background-color: #fff;
    width: 100px;
    height: 30px;
}
.dropdown-menu:hover {display: block;}
.dropdown-toggle:focus {outline: 0}
.dropdown-toggle:hover+ul {display: block;}

.sanjiao{font-size: 1px;}
.bg-img-1{
    width: 10px;height: 10px;
    background-image: url("../../img/header/dingbu-1.png");
    background-position: -20px -57px;
}
.weizhi-1{color: #f00;}
a.weizhi-1+a+ul+ul{
    width: 0;height: 0;overflow: hidden;border-bottom:1px dashed rgb(172, 172, 172);
}
a.weizhi-2+ul{
    border-bottom:1px dashed rgb(172, 172, 172);
}
a.weizhi-2:hover+ul+ul{
    width: 1095px;height: 74px;overflow: visible;z-index: 1000;
}
a.weizhi-2:hover .weizhi-1{
    width: 0;height: 0;overflow: hidden;
}

ul.h40>li>a{font-size: 18px;}
ul.h40>li:hover>a{color: #fff !important;}
.xuanfu-1,.xuanfu-1+li:hover,.xuanfu-1+li+li:hover{background-color: #62ab00;border: 1px solid #62ab00 !important;color: #fff;}

.bofang{left: 54px; top: 38px;width: 60px;height: 60px;box-shadow: 0 0 5px #83838375;border-radius: 50%;}

.zi-1{font-size: 14px;}
.zi-1>li>a:first-child{font-size: 22px;font-weight: bold;color: rgb(58, 58, 58);}
.zi-1>li>a:first-child:hover{color: rgb(253, 77, 77);}
.zi-1>li:nth-child(2) span{font-size: 25px;color: rgb(255, 62, 62);font-weight: bold;}
.zi-1>li:nth-child(4)>ul>li{color: rgb(167, 167, 167);background-color: #f8f8f8;padding: 3px;height: 20px;line-height: 14px;border-radius: 5px;}

.nav-link {display: block;padding: 0.5rem 0.6rem;}
.w100+ul a,.w100+ul i{color: rgb(143, 143, 143);}

.biaoqian>li:first-child{margin-left: 0 !important;color: #fff !important;background-color: #007bff !important;}
.biaoqian>li:nth-child(2){color: #fff !important;background-color: #17a2b8 !important;}

#loupan>ul>li>a:hover{color: rgb(43, 43, 43)}
#loupan+div a:hover{color: rgb(63, 63, 63);}

#loupan+div+div{color: rgb(143, 143, 143);}
#loupan+div+div>a{color: rgb(126, 182, 255);margin-right: 10px;}
#loupan+div+div>a:hover{color: rgb(255, 156, 126);}
</style>