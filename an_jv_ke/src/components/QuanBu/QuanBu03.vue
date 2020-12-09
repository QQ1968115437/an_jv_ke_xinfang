<template>
    <div id="QuanBu03">
        <!-- 猜你喜欢 -->
        <div class="w-100 h270">
                    <p class="h5">猜你喜欢</p>
                    <ul class="d-flex list-unstyled justify-content-between m-0">
                        <li class="w-25 position-relative">
                            <img class="w-100 pr-3" src="@/img/QuanBu/sef80x135m.jpg" alt="">
                            <i class="position-absolute"></i>
                            <p><a href="#">石景山-长安和玺</a></p>
                            <p>11111元/㎡</p>
                        </li>
                        <li class="w-25 position-relative">
                            <img class="w-100 pr-3" src="@/img/QuanBu/hyju180x135m.jpg" alt="">
                            <i class="position-absolute"></i>
                            <p><a href="#">大兴-亦庄橡树湾</a></p>
                            <p>22222元/㎡</p>
                        </li>
                        <li class="w-25 position-relative">
                            <img class="w-100 pr-3" src="@/img/QuanBu/jlli180x135m.jpg" alt="">
                            <i class="position-absolute"></i>
                            <p><a href="#">北京周边-八达岭孔雀城</a></p>
                            <p>33333元/㎡</p>
                        </li>
                        <li class="w-25 position-relative">
                            <img class="w-100 pr-3" src="@/img/QuanBu/fgnyt180x135m.jpg" alt="">
                            <i class="position-absolute"></i>
                            <p><a href="#">固安-拾光锦云</a></p>
                            <p>44444元/㎡</p>
                        </li>
                        <li class="w-25 position-relative">
                            <img class="w-100 pr-3" src="@/img/QuanBu/ppj180x135m.jpg" alt="">
                            <i class="position-absolute"></i>
                            <p><a href="#">燕郊-嘉都</a></p>
                            <p>55555元/㎡</p>
                        </li>
                    </ul>
        </div>
        <img src="@/img/QuanBu/ad1cc5d3619475ec3664103ad301d1a0.jpg" alt="">
            <!-- 底部推荐，相关信息 -->
        <div>
            <div class="text-center my-3 pb-3 border-bottom">
                <p class="mb-1">北京房产网，提供北京楼盘信息，包括北京新开楼盘，在售楼盘，新房开盘等。安居客北京新房房产信息网频道，让您了解楼盘动态。</p>
                手机找房：<a href="#">北京楼盘</a>
                户型找房：<a href="#">北京楼盘大全</a>
                <a href="#">北京开发商</a>
                <a href="#">北京物业公司</a>
                <a href="#">北京热门楼盘</a>
                <a href="#">北京学校大全</a>
                <a href="#">北京地图找房</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.h270{height: 270px;font-size: 14px;}
a{font-size: 14px;color: rgb(150, 150, 150);padding: 0 5px;}
a:hover>i{color: #f00;}
a:hover{color: rgb(255, 51, 15);text-decoration: none;}
div.h270>ul>li>i:nth-child(2){top: 140px;left: 8px;width: 20px;height: 20px;background-repeat: no-repeat;background-size: 20px; background-image: url("../../img/QuanBu/download.png");}
div.h270>ul>li>p:nth-child(3)>a{font-size: 16px;}
div.h270>ul>li>p{margin-top: 4px;margin-bottom: 4px;color: rgb(255, 102, 14);}
#QuanBu03>div:last-child>div{color: rgb(150, 150, 150);}
</style>