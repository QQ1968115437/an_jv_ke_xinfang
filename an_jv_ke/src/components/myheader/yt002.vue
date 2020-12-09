        <!-- 页头-中-->
<template>
    <div class="yt002">
        <div class="ding-2-1 h-50 row no-gutters my-3">
            <div class="col-4 d-flex align-items-center">
                <i class="bg-img-4"></i>
                <i class="mx-2 font-weight-light">|</i>
                <i class="bg-img-5"></i>
                <bj/>
            </div>
            <div class="col-8 text-right">
                <input type="text" class="w-50 h-100 p-2" placeholder="请输入楼盘名或地址">
                <button class="text-white h-100">搜索</button>
                <a href="#" class="ml-3">
                    <i class="bg-img-6 d-inline-block mb-1 mr-1"></i>
                    <span class="h6">地图找房</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import bj from './bj'
    export default {
        name: 'yt002',
        components: {
        bj
    }
    }
</script>

<style>
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
</style>