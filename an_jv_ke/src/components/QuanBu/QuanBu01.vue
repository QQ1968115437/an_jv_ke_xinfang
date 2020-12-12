<!--上面----------------------------------------------------- -->
<template>
    <div id="QuanBu01">
        <div class="h347 my-3 borderp-3 border">
            <!-- 位置 -->
            <div>位置：
                <span id="qvyv" :class="qvyv1"><a href="#" @mouseover="a01">区域找房<i>▼</i></a></span>
                <span class="ml-4" :class="qvyv2"><a href="#" @mouseover="a02">地铁找房<i>▼</i></a></span>
                <ul class="nav quan" v-if="aa1">
                    <li class="nav-item" v-for="(z,i) of qvyv.a" :key="i"><router-link class="nav-link" :to="z.href">{{z.wen}}</router-link></li>
                </ul>
                <ul class="nav" v-else>
                    <li class="nav-item" v-for="(z,i) of qvyv.b" :key="i"><router-link class="nav-link" :to="z.href">{{z.wen}}</router-link></li>
                </ul>
            </div>
            <i class="xuxian"></i>
            <!-- 价格 -->
            <div class="my-2">价格：
                <span id="jiage" :class="jiage1"><a href="#" @mouseover="b01">单价<i>▼</i></a></span>
                <span class="ml-4" :class="jiage2"><a href="#" @mouseover="b02">总价<i>▼</i></a></span>
                <ul class="nav quan" v-if="bb1">
                    <li class="nav-item" v-for="(z,i) of jiage.a" :key="i"><router-link class="nav-link" :to="z.href">{{z.wen}}</router-link></li>
                </ul>
                <ul class="nav quan" v-else>
                    <li class="nav-item" v-for="(z,i) of jiage.b" :key="i"><router-link class="nav-link" :to="z.href">{{z.wen}}</router-link></li>
                </ul>
            </div>
            <i class="xuxian"></i>
            <!-- 户型 -->
            <div class="d-flex my-2">
                <ul class="nav quan2">
                    <li class="nav-item nav-link">户型：</li>
                    <li class="nav-item"><a class="nav-link" href="#">全部</a></li>
                    <li :class="nav_1" v-for="(z,i) in huxing" :key="i"><input type="checkbox" name="huxing" :id="i">{{z}}</li>
                </ul>
            </div>
            <i class="xuxian"></i>
            <!-- 面积 -->
            <div class="d-flex my-2">
                <ul class="nav quan2">
                    <li class="nav-item nav-link">面积：</li>
                    <li class="nav-item"><a class="nav-link" href="#">全部</a></li>
                    <li :class="nav_1" v-for="(z,i) in mianji" :key="i"><input type="checkbox" name="mianji" :id="i">{{z}}</li>
                </ul>
            </div>
            <i class="xuxian"></i>
            <!-- 更多 -->
            <div class="d-flex mt-2">
                <ul class="nav d-flex align-items-center">
                    <li class="nav-item nav-link">更多：</li>
                    <div class="dropdown ml-3" v-for="(z,i) in geng" :key="i">
                        <button data-toggle="dropdown" class="dropdown-toggle">{{i}}</button>
                        <ul class="dropdown-menu">
                            <li v-for="(m,n) of z" :key="n"><router-link :to="m.href">{{m.wen}}</router-link></li>
                        </ul>
                    </div>
                    <li :class="nav_1" v-for="(z,i) in genged" :key="i"><input type="checkbox" name="gengduo" :id="i">{{z}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    data () {
        return {
            aa1:true,bb1:true,
            qvyv1:"qvyv",jiage1:"jiage",
            qvyv2:"",jiage2:"",nav_1:"nav-item nav-link d-flex align-items-center",
            qvyv:{},jiage:{},huxing:[],mianji:[],geng:{},genged:[]
        }
    },
    methods: {
        a01(){this.aa1=true;this.qvyv1="qvyv";this.qvyv2=""},
        a02(){this.aa1=false;this.qvyv1="";this.qvyv2="qvyv"},
        b01(){this.bb1=true;this.jiage1="jiage";this.jiage2=""},
        b02(){this.bb1=false;this.jiage1="";this.jiage2="jiage"}
    },
    mounted () {
        this.axios.get("/QuanBu").then(a=>{
            this.qvyv=a.data.qvyv;
            this.jiage=a.data.jiage;
            this.mianji=a.data.mianji;
            this.huxing=a.data.huxing;
            this.geng=a.data.geng;
            this.genged=a.data.genged;
        })
    }
}
</script>

<style scoped>
#QuanBu01 .h347{height: 347px;padding: 15px 15px 5px;}
#QuanBu01 .xuxian{width: 100%;height: 1px;border-bottom: 1px dashed rgb(223, 223, 223);display: block;}
.qvyv>a,.jiage>a,.qvyv>a>i,.jiage>a>i{color: rgb(255, 114, 58) !important;}

#QuanBu01 a{font-size: 14px;color: rgb(80, 80, 80);}
#QuanBu01 a:hover{color: rgb(255, 108, 41);}
#QuanBu01 .quan>li:first-child a,#QuanBu01 .quan2>li:nth-child(2) a{color: rgb(255, 51, 0);}

.h347>div i{font-size: 5px;color: rgb(85, 85, 85);}
.h347>div{font-size: 14px;color: rgb(85, 85, 85);}
#QuanBu01 a:hover>i{color: rgb(255, 99, 37);}

#QuanBu01 .dropdown-menu {
    min-width: 6rem;
    margin-top: 0;
    font-size: 0.9rem;
    padding: 0.5rem 0.5rem;
    background-color: rgba(255, 255, 255, 0.692);
    border: 1px solid rgba(163, 163, 163, 0.15);
    color: #494949;
}
#QuanBu01 .dropdown-toggle {
    color: #494949;
    border-radius: 8px;
    border: 1px solid #d1d1d1;
    background-color: #fff;
    width: 100px;
    height: 30px;
}
#QuanBu01 .dropdown-menu:hover {display: block;}
#QuanBu01 .dropdown-toggle:focus {outline: 0}
#QuanBu01 .dropdown-toggle:hover+ul {display: block;}
</style>