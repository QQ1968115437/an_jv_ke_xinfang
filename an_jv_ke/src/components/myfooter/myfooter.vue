<template>
    <div class="di-0">
        <div class="di-1">
            免责声明：本站旨在为广大用户提供更多信息服务，不声明或保证所提供信息的准确性和完整性。页面所载内容及数据仅供用户参考和借鉴，最终以开发商实际公示为准，用户因参照本站信息进行相关交易所造成的任何后果与本站无关。如楼盘信息有误，您可以投诉或拨打举报电话：400-620-6688
        </div>
        <div class="di-2">
            <ul class="breadcrumb m-0 p-0">
                <li class="breadcrumb-item" v-for="(z,i) of A" :key="i">
                    <router-link :to="z.href">{{z.wen}}</router-link>
                </li>
            </ul>
        </div>
        <div class="di-3 pt-2">
            客服热线/虚假信息举报：400-620-6688
            &nbsp;&nbsp;邮箱：
            <a href="#">service@58ganji.com</a>
            &nbsp;&nbsp;Copyright © 2007-2020 www.anjuke.com All Rights Reserved 
            <a href="#">ICP号：沪 B2-20090008</a>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            A:[{wen:"关于安居客",href:"#"},{wen:"联系我们",href:"#"},{wen:"用户协议",href:"#"},{wen:"友情链接",href:"#"},{wen:"网站地图",href:"#"},{wen:"其他城市",href:"#"},{wen:"最新房源",href:"#"},{wen:"最新房源",href:"#"},{wen:"最新问答",href:"#"},{wen:"房贷计算器",href:"#"},{wen:"订阅退订",href:"#"}]
        }
    }
}
</script>
<style>
.di-0{width: 1180px; height: 140px;margin: 30px auto 50px;}
.di-1{height: 60px;margin-bottom: 20px;padding: 12px 35px;background-color: #f7f7f7;font-size: 12px;color: #999;}
.di-2{height: 34px;padding-top: 15px;border-top: 1px solid #e0e0e0;font-size: 12px;}
.di-2 a,.di-3 a,.di-3{text-decoration: none;color: rgb(88, 88, 88);}
.di-3{font-size: 12px;text-align: center;}

.breadcrumb {
    background-color: #fff;
    justify-content: center;
}
.breadcrumb-item + .breadcrumb-item::before {
    padding: 0 12px;
    content: "|";
}
</style>