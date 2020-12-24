<template>
    <div id="tou-0">
        <!-- 页头-上 -->
        <div class="yt001">
        <div class="YT-1 border-bottom">
            <div class="d-flex m-auto">                
                <ul class="breadcrumb">
                    <li v-for="(z,i) in yt1" :key="i" class="breadcrumb-item">
                        <a :href="z">{{i}}</a>
                    </li>
                </ul>
                <ul class="breadcrumb xiao">
                    <li class="breadcrumb-item">
                        <a href="#">客户登录
                            <i class="bg-img-1 ml-1"></i>
                        </a>
                        <div class="kehu border">
                            <a href="#">中国网络经纪人</a>
                            <a href="#">云店通</a>
                        </div>
                    </li>
                    <li class="breadcrumb-item">
                        <a href="#">
                            <i class="bg-img-2"></i>
                            用户登录</a>
                        <a href="#" class="ml-3">注册</a>
                    </li>
                    <li class="breadcrumb-item">
                        <a href="#">
                            <i class="bg-img-3"></i>
                            收藏夹
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        </div>
        <div id="w1180">
            <!-- 页头-中-->
            <div class="yt002">
                <div class="ding-2-1 h-50 row no-gutters my-3">
                    <div class="col-4 d-flex align-items-center">
                        <i class="bg-img-4"></i>
                        <i class="mx-2 font-weight-light">|</i>
                        <i class="bg-img-5"></i>
                        <bj/>
                    </div>
                    <div class="col-8 text-right">
                        <input v-model="shuru" type="text" class="w-50 h-100 p-2 shuru" placeholder="请输入楼盘名或地址">
                        <button class="text-white h-100" @click="sou">搜索</button>
                        <a href="#" class="ml-3">
                            <i class="bg-img-6 d-inline-block mb-1 mr-1"></i>
                            <span class="h6">地图找房</span>
                        </a>
                    </div>
                </div>
            </div>
            <!-- 页头-下-->
            <div class="yt003">
                <ul class="nav">
                    <li v-for="(z,i) in yt3" :key="i" class="nav-item">
                        <router-link :to="z" class="nav-link m-0 h6" :class="i==uu?'upd':'1'">{{i}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import bj from './bj'
export default {
    props: ["u"],
    components: {bj},
    data () {
        return {
            yt1:{},yt3:{},uu:"",shuru:""
        }
    },
    methods: {
        sou(){
            this.$emit('shuru', this.shuru);
            setTimeout(()=>{this.shuru="";},500);
        }
    },
    mounted () {
        this.axios.get("/header").then(a=>{
            this.yt1=a.data.yt1;
            this.yt3=a.data.yt3;
        });
        switch (this.u) {
            case 1:this.uu="新盘";break;
            case 2:this.uu="楼讯";break;
            case 3:this.uu="热门活动";break;
            case 4:this.uu="看房团";break;
            case 5:this.uu="房源";break;
            case 6:this.uu="商业地产";break;
            case 7:this.uu="海外地产";break;
            default:this.uu="品牌专区";break;
        }
    }
}
</script>

<style scoped>
/* <!-- 页头-上 --> */
    #w1180{width: 1180px;margin: auto;}
    .YT-1>div{width: 1180px;justify-content: space-between;}
    .YT-1>div>ul{background-color: #fff;margin: 0;}
    .YT-1 a{color: rgb(121, 121, 121);font-size: 14px;}
    .YT-1 a:hover{color: rgb(255, 129, 129);}
    .xiao>li i{display: inline-block;}
    .breadcrumb-item + .breadcrumb-item::before {
    color: #6c757d;
    content: "|";
    }
    .bg-img-1,.bg-img-2,.bg-img-3{background-image: url("../../img/header/dingbu-1.png");}
    .bg-img-1{
        width: 10px;height: 10px;
        background-position: -20px -57px;
    }
        a:hover>.bg-img-1{
            background-position: 0px -59px;
        }
    .bg-img-2{
        width: 19px;height: 19px;
        vertical-align: middle;
        background-position: -40px -60px;
    }
        a:hover>.bg-img-2{
            background-position: -60px -60px;
        }
    .bg-img-3{
        width: 14px;height: 14px;
        vertical-align: middle;
        background-position: -80px -60px;
    }
        a:hover>.bg-img-3{
            background-position: -100px -60px;
        }

.kehu{
    width: 120px;height: 70px;
    position: absolute;
    z-index: 1000;
    padding-top: 15px;
    padding-bottom: 15px;
    top: 34px;
    display: none;
    flex-direction: column;
    padding: 10px;
    background-color: #fff;
}
    .yt001 a:hover+.kehu,.kehu:hover {
        display: flex;
    }
/* <!-- 页头-中--> */
.shuru:focus{outline: 0;}
.yt002 .bg-img-4,.yt002 .bg-img-5{
    vertical-align: middle;
    background-image: url("../../img/header/dingbu-1.png");
}
.yt002 .bg-img-4{
    width: 85px;height: 25px;
}
.yt002 .bg-img-5{
    width: 48px;height: 25px;
    background-position: -76px 3px;
    background-size: 251px;
}
.yt002 .bg-img-6{
    width: 14px;height: 15px;
    vertical-align: middle;
    background-image: url("../../img/header/dingbu-2.png");
    background-position: -77px 0px;
}
.yt002 input{font-size: 14px;}
.yt002 button{
    width: 15%;
    background-color: rgb(255, 152, 68);
    border: 0;
    margin-left: -6px;
    margin-top: -1px;
    border-radius: 0 4px 4px 0;
}
.yt002 a>span{color: rgb(124, 124, 124);}
.yt002 button:focus,.yt002 button:hover{background-color: rgb(255, 94, 0); outline: 1px solid rgb(255, 215, 189);}
/* <!-- 页头-下--> */
.yt003>ul{background-color:#62ab00;}
.yt003>ul>li>a{padding: 10px 18px;}
.yt003 .nav-item a.h6 {
    height: 100%;
    color: #fff;
}
.yt003 .nav .nav-item a:hover,.nav .nav-item a:focus,.upd {
    background-color: #599700;border-radius: 5px;
}
</style>