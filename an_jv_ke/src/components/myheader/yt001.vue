        <!-- 页头-上 -->
<template>
    <div class="yt0">
        <div class="yt001">
        <div class="YT-1 border-bottom">
            <div class="d-flex m-auto">                
                <ul class="breadcrumb">
                    <li v-for="(zhi,i) in YT1" :key="i" class="breadcrumb-item">
                        <a :href="i">{{zhi}}</a>
                    </li>
                </ul>
                <ul class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="#">客户登录
                            <i class="bg-img-1 d-inline-block ml-1"></i>
                        </a>
                        <div class="kehu border">
                            <a href="#">中国网络经纪人</a>
                            <a href="#">云店通</a>
                        </div>
                    </li>
                    <li class="breadcrumb-item">
                        <a href="#">
                            <i class="bg-img-2 d-inline-block"></i>
                            用户登录</a>
                        <a href="#" class="ml-3">注册</a>
                    </li>
                    <li class="breadcrumb-item">
                        <a href="#">
                            <i class="bg-img-3 d-inline-block"></i>
                            收藏夹</a>
                    </li>
                </ul>
            </div>
        </div>
        </div>
        <div id="w1180">
            <yt002/><yt003/>
        </div>
    </div>
</template>

<script>
    import yt002 from './yt002'
    import yt003 from './yt003'
    export default {
        data () {
            return {
                YT1:{"#01":"首 页","#02":"新 房","#03":"二手房","#04":"租 房","#05":"商铺写字楼","#06":"海外地产","#07":"装修","#08":"楼 讯","#09":"房产研究院","#010":"房 价","#011":"问 答"}
            }
        },

    name: 'yt001',
    components: {
    yt002,yt003
  }
}
</script>
<style>
    #w1180{width: 1180px;margin: auto;}
    .YT-1>div{width: 1180px;justify-content: space-between;}
    .YT-1>div>ul{background-color: #fff;margin: 0;}
    .YT-1 a{color: rgb(121, 121, 121);font-size: 14px;}
    .YT-1 a:hover{color: rgb(255, 129, 129);}
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
</style>