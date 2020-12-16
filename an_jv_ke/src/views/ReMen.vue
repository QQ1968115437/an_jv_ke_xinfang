<template>
    <div class="ReMen">
        <myheader/>
            
            <!-- 轮播图 -->
            <lunbo/>
            <!-- 中间 -->
            <div class="row no-gutters mt-4 justify-content-between">
                <!-- 左 -->
                <div class="col-9">
                    <div class="w888" v-for="(z,i) of zhu" :key="i">
                        <h5 class="font-weight-light mb-3">[{{z.wen1.qv1}} {{z.wen1.qv2}}] {{z.wen1.t}}</h5>
                        <div class="d-flex">
                            <div class="w-50"><img class="w-100" :src="require(`../img/ReMen/${z.imgs}`)" alt=""></div>
                            <div class="w-50">
                                <h5 class="ml-4 mb-5">{{z.wen2}}</h5>
                                <div class="row no-gutters ml-4 ">
                                    <p class="col-6 text-dark" v-for="(m,n) in z.wen3" :key="n">
                                        <span class="text-success">{{n}}</span>{{m}}
                                    </p>
                                </div>
                                <div class="p-3 baoming">
                                    <div>
                                        <h3 class="m-0">{{z.wen4}}</h3>
                                        <span>立即报名</span>
                                    </div>
                                    <div>
                                        <div>{{zhu.times}}
                                            <img src="@/img/ReMen/clock.svg" width="14">
                                            还剩：<daoshi :shi="z.times"/>
                                        </div>
                                        <span><span class="text-danger">{{z.ren}}</span>人已参加</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 右 -->
                <div class="col-3 pl-4">
                    <div class="youce">
                            <!-- 1 -->
                        <div>
                            <p class="text-white py-3 pl-4 mb-2">报名活动已进行<span class="h4">663</span>场</p>
                            <div class="ml-4">覆盖楼盘数<span class="ml-2">671</span></div>
                            <div class="ml-4">报名人数<span class="ml-4">105909</span></div>
                        </div>
                            <!-- 2 -->
                        <div>
                            <gun-dong/>
                        </div>
                            <!-- 3 -->
                        <div>
                            <h5>订阅优惠信息</h5>
                            <p class="m-0">没有满意的优惠？输入以下信息，完成个性优惠订阅</p>
                            期望区域：
                            <select>
                                <option value="qiwang-0">请选择</option>
                                <option value="qiwang-1" v-for="(z,i) of zhu" :key="i">{{z.wen1.qv1}}</option>
                            </select><br>
                            手机号码：<input type="text" class="px-2" placeholder="请输入手机号码">
                            <button class="btn btn-success mt-2 w-100">订阅</button>
                        </div>
                            <!-- 4 -->
                        <div><img class="h-100" src="../img/ReMen/downfdoad.jpg" alt=""></div>
                    </div>
                </div>
            </div>
            <!-- 想提前知道有哪些热门楼盘 -->
            <div class="row no-gutters h148 flex-nowrap">
                <div class="col-4">
                    <p>想提前知道有哪些热门楼盘吗？</p>
                    <div>
                        <input type="text" placeholder="输入邮箱订阅热门楼盘">
                        <span>订阅</span>
                    </div>
                </div>
                <i></i>
                <div class="col-2">
                    <p>关注我们</p>
                    <a href="#">安居客新浪微博</a>
                </div>
                <i></i>
                <div class="col-2">
                    <p>用户帮助</p>
                    <a href="#">往期优惠活动</a>
                    <a href="#">常见问题</a>
                    <a href="#">优惠活动意向收集</a>
                </div>
                <i></i>
                <div class="col-2">
                    <p>商务合作</p>
                    <a href="#">提供优惠活动信息</a>
                </div>
                <i></i>
                <div class="col-2">
                    <p>公司信息</p>
                    <a href="#">关于我们</a>
                    <a href="#">联系我们</a>
                </div>
            </div>
            <!-- 底部新房直达 -->
            <div id="zhida" class="p-4">
                <p class="float-left">新房直达：</p>
                <ul class="list-unstyled float-right"> 
                    <!-- <li v-for="(zhi,i) in AAA" :key="i">{{zhi}}</li> -->
                </ul>
            </div>

        <myfooter/>
    </div>
</template>

<script>
import myheader from '@/components/myheader/myheader'
import lunbo from '@/components/ReMen/lunbo'
import GunDong from '@/components/ReMen/GunDong'
import daoshi from '@/components/ReMen/daoshi'
import myfooter from '@/components/myfooter/myfooter'

export default {
    components: {
        myheader,myfooter,lunbo,GunDong,daoshi
    },
    data () {
        return {
            zhu:[]
        }
    },
    mounted () {
        this.axios.get("/ReMen01").then(a=>{
            this.zhu=a.data.zhu;
        })
    }
}
</script>

<style scoped>
.ReMen{width: 1180px;margin: auto;}
.w400{width: 400px;left: 160px;top: -64px;background-color: #f0f0f0f6;z-index: 1500;}
.w400 b{display: block; height: 1px;width: 100%;border-bottom: 1px dashed rgb(194, 194, 194);}
.w400 a{font-size: 10px;color: #53a3ff; padding: 5px;}
.w400 a:hover{color: #ffa053}
.w400 i{font-size: 14px;}
.w400:hover{display: block !important}
.w888{
    width: 888px;height: 360px;
    border: 1px solid rgba(185, 185, 185, 0.637);
    padding: 20px 0 20px 20px;
    border-radius: 5px;
    margin-bottom: 20px;
    cursor: pointer;
}
#kuang1{
    position: absolute;
    left: 160px; top: -82px;
    background-color: #fff;
    font-size: 10px;
    border: 0;
    color: #000;
    text-decoration: none;
}
img:hover{background-color: #e9e9e938;cursor: pointer;}

/* 中间-左1 */
.w888:hover{border: 1px solid rgba(255, 107, 107, 0.5);}
.w888 img{height: 97%;}
.baoming{height: 44%; background-color: #fff9ea;color: rgb(138, 138, 138);}
.baoming>div{display: flex;justify-content: space-between;padding: 10px;}
.baoming>div>h3+span{width: 110px;height: 35px;line-height: 35px; color: #fff;text-align: center; font-size: 1.2rem; background-color: #F60;}
.baoming>div>h3+span:hover{background-color: #f00;}
.baoming>div>h3{font-size: 1.6rem;color: #F60;}

/* 右侧广告 */
.youce>div{margin-bottom: 20px;border: 1px solid rgba(185, 185, 185, 0.637);border-radius: 10px;}
.youce>div:nth-child(1){height: 150px;}
.youce>div:nth-child(1)>p{border-radius: 10px 10px 0 0;background-color: #F60;}
.youce>div:nth-child(1)>div.ml-4{color: rgb(105, 105, 105)}
.youce>div:nth-child(1)>div>span{color: rgb(255, 109, 51);font-size: 22px;}

.youce>div:nth-child(2){height: 262px;padding-bottom:15px;}

.youce>div:nth-child(3){height: 232px;padding: 20px 20px 20px 15px;}
.youce>div:nth-child(3)>p{font-size: 14px; color: rgb(146, 146, 146);}
.youce>div:nth-child(3)>input,
.youce>div:nth-child(3)>select{width: 65%;height: 25px;margin-top: 10px;font-size: 14px;}

.youce>div:nth-child(4){height: 262px;padding: 25px 0;text-align: center;}

/* 想提前知道有哪些热门楼盘 */
.h148{height: 148px;margin-top: 40px;border: 1px solid #ffae6b70;}
.h148>div{height: 100%;padding: 20px 35px !important;color: rgb(85, 85, 85)}
.h148>div:nth-child(1) input{padding: 6px;border: 1px solid rgb(190, 190, 190);font-size: 15px;}
.h148>div:nth-child(1) span{padding: 8px 20px !important; background-color: #ffa053;color: #fff;}
.h148>div:nth-child(1) span:hover{background-color: #ff3939;}
.h148>div a{color: rgb(148, 148, 148);font-size: 14px;display: block;}
.h148>div a:hover{color: rgb(255, 151, 103);text-decoration: none;}

.h148 i{height: 80%;border-right: 1px dashed rgb(207, 207, 207);margin: 15px 0 !important;}
</style>