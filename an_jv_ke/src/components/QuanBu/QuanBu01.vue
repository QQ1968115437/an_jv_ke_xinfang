<!--上面----------------------------------------------------- -->
<template>
    <div class="QuanBu01">
        <div class="h347 mt-3 border mb-3 p-3">
            <!-- 位置 -->
            <div>位置：
                <span id="qvyv" :class="qvyv1"><a href="#" @mouseover="a01">区域找房<i>▼</i></a></span>
                <span class="ml-4" :class="qvyv2"><a href="#" @mouseover="a02">地铁找房<i>▼</i></a></span>
                <ul class="nav" v-if="aa1">
                    <li class="nav-item"><a class="nav-link quan" href="#">全部</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">朝阳</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">大兴</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">燕郊</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">北京周边</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">涿州</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">固安</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">昌平</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">海淀</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">通州</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">廊坊</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">香河</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">丰台</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">顺义</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">房山</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">石景山</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">永清</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">大厂</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">平谷</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">天津</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">密云</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">门头沟</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">怀柔</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">延庆</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">雄安新区</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">东城</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">西城</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">旅居</a></li>
                </ul>
                <ul class="nav" v-else>
                    <li class="nav-item"><a class="nav-link" href="#">1号线</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">2号线</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">4号线大兴线</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">5号线</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">6号线</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">7号线</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">8号线北段</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">9号线</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">10号线</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">13号线</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">14号线(东)</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">14号线(西)</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">15号线</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">16号线</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">S1线</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">八通线</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">昌平线</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">房山线</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">首都机场线</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">西郊线</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">亦庄线</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">燕房线</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">8号线南段</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">大兴机场线</a></li>
                </ul>
            </div>
            <i class="w-100 xuxian d-block"></i>
            <!-- 价格 -->
            <div class="my-2">价格：
                <span id="jiage" :class="jiage1"><a href="#" @mouseover="b01">单价<i>▼</i></a></span>
                <span class="ml-4" :class="jiage2"><a href="#" @mouseover="b02">总价<i>▼</i></a></span>
                <ul class="nav" v-if="bb1">
                    <li class="nav-item"><a class="nav-link quan" href="#">全部</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">1万以下</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">1-2万</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">2-3万</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">3-4万</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">4-6万</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">6-8万</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">8-10万</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">10万以上</a></li>
                </ul>
                <ul class="nav" v-else>
                    <li class="nav-item"><a class="nav-link quan" href="#">全部</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">100万以下</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">100-150万</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">150-200万</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">200-300万</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">300-500万</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">500-1000万</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">1000万以上</a></li>
                </ul>
            </div>
            <i class="w-100 xuxian d-block"></i>
            <!-- 户型 -->
            <div class="d-flex my-2">
                <ul class="nav">
                    <li class="nav-item nav-link">户型：</li>
                    <li class="nav-item"><a class="nav-link quan" href="#">全部</a></li>
                    <li class="nav-item nav-link d-flex align-items-center"><input type="checkbox" name="huxing" id="1">一室</li>
                    <li class="nav-item nav-link d-flex align-items-center"><input type="checkbox" name="huxing" id="2">二室</li>
                    <li class="nav-item nav-link d-flex align-items-center"><input type="checkbox" name="huxing" id="3">三室</li>
                    <li class="nav-item nav-link d-flex align-items-center"><input type="checkbox" name="huxing" id="4">四室</li>
                    <li class="nav-item nav-link d-flex align-items-center"><input type="checkbox" name="huxing" id="5">五室及以上</li>
                </ul>
            </div>
            <i class="w-100 xuxian d-block"></i>
            <!-- 面积 -->
            <div class="d-flex my-2">
                <ul class="nav">
                    <li class="nav-item nav-link">面积：</li>
                    <li class="nav-item"><a class="nav-link quan" href="#">全部</a></li>
                    <li class="nav-item nav-link d-flex align-items-center"><input type="checkbox" name="mianji" id="1">60m²以下</li>
                    <li class="nav-item nav-link d-flex align-items-center"><input type="checkbox" name="mianji" id="2">60-80m²</li>
                    <li class="nav-item nav-link d-flex align-items-center"><input type="checkbox" name="mianji" id="3">80-100m²</li>
                    <li class="nav-item nav-link d-flex align-items-center"><input type="checkbox" name="mianji" id="4">100-120m²</li>
                    <li class="nav-item nav-link d-flex align-items-center"><input type="checkbox" name="mianji" id="5">120-150m²</li>
                    <li class="nav-item nav-link d-flex align-items-center"><input type="checkbox" name="mianji" id="5">150-200m²</li>
                    <li class="nav-item nav-link d-flex align-items-center"><input type="checkbox" name="mianji" id="5">200m²以上</li>
                </ul>
            </div>
            <i class="w-100 xuxian d-block"></i>
            <!-- 更多 -->
            <div class="d-flex mt-2">
                <ul class="nav d-flex align-items-center">
                    <li class="nav-item nav-link">更多：</li>
                    <div class="dropdown">
                        <button data-toggle="dropdown" class="dropdown-toggle">销售状态</button>
                        <ul class="dropdown-menu">
                            <li><a href="#">全部</a></li>
                            <li><a href="#">在售</a></li>
                            <li><a href="#">待售</a></li>
                            <li><a href="#">售罄</a></li>
                        </ul>
                    </div>
                    <div class="dropdown ml-3">
                        <button data-toggle="dropdown" class="dropdown-toggle">物业类型</button>
                        <ul class="dropdown-menu">
                            <li><a href="#">全部</a></li>
                            <li><a href="#">住宅</a></li>
                            <li><a href="#">别墅</a></li>
                            <li><a href="#">商业</a></li>
                            <li><a href="#">商铺</a></li>
                            <li><a href="#">写字楼</a></li>
                        </ul>
                    </div>
                    <div class="dropdown ml-3">
                        <button data-toggle="dropdown" class="dropdown-toggle">开盘时间</button>
                        <ul class="dropdown-menu">
                            <li><a href="#">全部</a></li>
                            <li><a href="#">本月开盘</a></li>
                            <li><a href="#">未来一个月</a></li>
                            <li><a href="#">未来三个月</a></li>
                            <li><a href="#">未来半年</a></li>
                            <li><a href="#">过去一个月</a></li>
                            <li><a href="#">过去三个月</a></li>
                            <li><a href="#">全部已开盘</a></li>
                        </ul>
                    </div>
                    <div class="dropdown mx-3">
                        <button data-toggle="dropdown" class="dropdown-toggle">装修状况</button>
                        <ul class="dropdown-menu">
                            <li><a href="#">全部</a></li>
                            <li><a href="#">毛坯</a></li>
                            <li><a href="#">简装修</a></li>
                            <li><a href="#">带装修</a></li>
                        </ul>
                    </div>
                    <li class="nav-item nav-link d-flex align-items-center"><input type="checkbox" name="gengduo" id="1">在售</li>
                    <li class="nav-item nav-link d-flex align-items-center"><input type="checkbox" name="gengduo" id="2">即将开盘</li>
                    <li class="nav-item nav-link d-flex align-items-center"><input type="checkbox" name="gengduo" id="3">近期已开</li>
                    <li class="nav-item nav-link d-flex align-items-center"><input type="checkbox" name="gengduo" id="4">VR看房</li>
                </ul>
            </div>
        </div>
        <zhuyao/>
    </div>
</template>

<script>
    import zhuyao from "./zhuyao"
    export default {
    name: 'QuanBu01',
    components: {
        zhuyao
    },

    data () {
        return {
            aa1:true,bb1:true,
            qvyv1:"qvyv",jiage1:"jiage",
            qvyv2:"",jiage2:""
        }
    },
    methods: {
        a01(){this.aa1=true;this.qvyv1="qvyv";this.qvyv2=""},
        a02(){this.aa1=false;this.qvyv1="";this.qvyv2="qvyv"},
        b01(){this.bb1=true;this.jiage1="jiage";this.jiage2="";},
        b02(){this.bb1=false;this.jiage1="";this.jiage2="jiage";}
    }
}
</script>

<style>
.QuanBu01 .h347{height: 347px;}
.QuanBu01 .xuxian{height: 1px;border-bottom: 1px dashed rgb(223, 223, 223);}
.qvyv>a,.jiage>a,.qvyv>a>i,.jiage>a>i{color: rgb(255, 114, 58) !important;}

.QuanBu01 a{font-size: 14px;color: rgb(80, 80, 80);}
.QuanBu01 a:hover{color: rgb(255, 108, 41);}
.QuanBu01 .quan{color: rgb(255, 51, 0);}

.h347>div i{font-size: 5px;color: rgb(85, 85, 85);}
.h347>div{font-size: 14px;color: rgb(85, 85, 85);}
.QuanBu01 a:hover>i{color: rgb(255, 99, 37);}

.QuanBu01 .dropdown-menu {
    min-width: 6rem;
    margin-top: 0;
    font-size: 0.9rem;
    padding: 0.5rem 0.5rem;
    background-color: rgba(255, 255, 255, 0.692);
    border: 1px solid rgba(163, 163, 163, 0.15);
    color: #494949;
}
.QuanBu01 .dropdown-toggle {
    color: #494949;
    border-radius: 8px;
    border: 1px solid #d1d1d1;
    background-color: #fff;
    width: 100px;
    height: 30px;
}
.QuanBu01 .dropdown-menu:hover {display: block;}
.QuanBu01 .dropdown-toggle:focus {outline: 0}
.QuanBu01 .dropdown-toggle:hover+ul {display: block;}
</style>