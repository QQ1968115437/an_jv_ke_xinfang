<template>
	<div class="KanFang">
    	<myheader :u="4" v-on:shuru="shuru"/>
    
		<div class="yt1">
			<!-- 顶部 -->
			<div>
				<div class="d1 d-flex my-3">
					<div>
						<div class="kan">
							<h5>免费专车看房</h5><h6>专车免费约</h6><h6>私人订制</h6>
							<div>立即查看</div>
						</div>
					</div>
					
					<div>
						<div class="kan">
							<h5>免费大巴看房</h5><h6>享独家优惠</h6><h6>线路更方便</h6>
							<div>立即查看</div>
						</div>
					</div>
				</div>
				<div class="border pb-5 lv position-relative">
					<ul class="d-flex border-bottom" @click="cf">
						<li class="px-3 py-2 border-right" :class="lvv1">专车看房</li>
						<li class="px-3 py-2 border-right" :class="lvv2">大巴看房</li>
					</ul>
					<div v-if="a1">
						<div>区域：<span style="color:#f00;">全部</span></div>
						<span class="ml-3" v-for="(z,i) of AA1" :key="i">{{z}}</span>
					</div>
					<div v-else>
						<div>区域：<span style="color:#f00;">全部</span></div>
						<span class="ml-3" v-for="(z,i) of AA2" :key="i">{{z}}</span>
					</div>
				</div>
			</div>

			<!-- 中间 -->
			<div class="d-flex mt-3">
				<div class="w-75">
					<div class="anquan">安全提示：看房出门前请务必配佩戴口罩出行，做好防护措施</div>

					<div class="border mt-2">
						<div class="border-bottom tw">
							<div>免费专车看房</div>
							<div>
								<router-link to="1" class="mr-2">上一页</router-link>
								<router-link to="1">下一页</router-link>
							</div>
						</div>
						<div v-for="(z,i) of BB1" :key="i" class="d-flex mx-3 py-3 xuxian">
							<div class="img_k1"><img :src="require(`../img/ReMen/${z.imgs}`)" alt=""></div>
							<div class="w-100 pl-4 col_dan">
								<div class="mb-3">
									<span class="col_dan1 text-secondary">[{{z.wen1.qv1}}] {{z.wen1.t}}</span>
									<span class="float-right">总价 <b class="h3 text-danger">{{z.wen3.价格}}</b>万元/套起</span>
								</div>
								<p>看房优惠 <span class="text-danger ml-2">案场优惠</span></p>
								<p>服务承诺 <span class="ml-2">免费专车 一对一来回接送 随时看房</span></p>
								<p>推荐理由 
									<span class="px-2 border ml-2">免费专车</span>
									<span class="px-2 border ml-2">刚需直选</span>
									<span class="px-2 border ml-2">花园洋房</span>
									<span class="px-2 border ml-2">自持物业</span>
								</p>

								<div>
									<button class="btn btn-success px-4">约车看房</button>
									<span class="ml-3"><span class="text-danger">{{z.ren}}</span> 人已参加</span>
									<span><daoshi :shi="z.times" class="float-right py-2 text-info"/></span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="w-25 pl-3">
					<div class="h90"></div>
					<div class="border px-4 py-3 mt-3">
						<p>专车看房活动楼盘 {{1187}} 个</p>
						<p class="text-secondary">参加人数 <span class="ml-3 text-danger">{{22773}}</span></p>
						<p class="mb-0">查看免费专车活动页>></p>
					</div>
					<div class="border pl-4 py-2 mt-3 d-flex" style="color: #60ad00">
						<b style="font-size: 40px" class="mr-2">☏</b>
						<div>
							<div class="text-secondary">看房热线:</div>
							<div class="h3">400-890-9320</div>
						</div>
					</div>

					<ul class="border list-unstyled mt-3">
						<li class="h37">
							热门楼盘<span class="float-right mr-4 h6 mt-1">更多>></span>
						</li>
						<li class="h220 xuxian m-2" v-for="(z,i) of youce" :key="i">
							<div class="mb-2"><img class="w-100" :src="require(`@/img/QuanBu/${z.imgs}`)" alt=""></div>
							<span>{{z.wen1}}</span>
							<div class="my-1">
								<span class="text-danger m-0 h6">{{z.wen2}}</span>
								<i class="float-right">{{z.shu}}人已报名</i>
							</div>
							<!-- <i class="xuxian"></i> -->
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

			<!-- 底部 -->
			<div class="border mt-3 w-75">
				<div class="border-bottom tw">
					<div>往期看房团回顾</div>
					<div>更多>></div>
				</div>
				<!-- v-if="AA3.length>0" 解决加载前属性未定义 -->
				<div class="d-flex justify-content-around" v-if="AA3.length>0">
					<div v-for="i of 4" :key="i" class="pt-3 tu1">
						<div><img :src="require(`@/img/KanFang/huigu/${AA3[i-1].imgs}`)" class="w-100 h-100"></div>
						<p>{{AA3[i-1].wen1}}</p>
						<p>
							<span>{{AA3[i-1].can}}</span>人参加 
							<span>{{AA3[i-1].qian}}</span>人签订意向
						</p>
					</div>
				</div>
			</div>
			<!-- 新房直达 -->
			<dx-1 :wen="AA4"/>
		</div>

		<!-- 提示框 -->
        <div v-if="ti==1?true:false" class="tishi">{{tishi}}</div>

    	<myfooter/>
	</div>
</template>

<script>
import myheader from '@/components/myheader/myheader'
import myfooter from '@/components/myfooter/myfooter'
import daoshi from '@/components/ReMen/daoshi'
import Dx1 from '../components/ReMen/Dx1'

export default {
  components: {
    myheader,myfooter,daoshi,Dx1
  },
  data () {
    return {
	  AA1:[],AA2:[],AA3:[],AA4:{},a1:true,lvv1:"lv2",lvv2:"",aa1:"雄安新区",
	  BB1:[],youce:[],ti:0,tishi:""
    }
  },
  methods: {
    cf(e){
      if(e.target.nodeName=="LI"){
        switch (e.target.innerHTML) {
          case "专车看房":this.a1=true;this.lvv1="lv2";this.lvv2="";break;
          default:this.a1=false;this.lvv1="";this.lvv2="lv2";break;
        }
      }
	},
	chuan(e){
		this.aa1=e;
	},
	// 模糊查询
	shuru(e){
		this.axios.get("/ReMen01",{
            params:{q:e}
        }).then(a=>{
            if(a.data.length==0){
                this.ti=1;this.tishi="没有查询到,请重新输入";
                setTimeout(()=>{this.ti=0},1500);
            }else{
				this.ti=1;this.tishi=`已查到${a.data.length}个结果`;
                this.BB1=a.data;
                setTimeout(()=>{this.ti=0},1500);
            }
        })
	}
  },
  mounted () {
    this.axios.get("/KanFang").then(a => {
          this.AA1=a.data.zhuan_che;
          this.AA2=a.data.da_ba;
		  this.AA3=a.data.huigu;
          this.AA4=a.data.zhida;
	});
	this.axios.get("/ReMen01").then(a=>{
        this.BB1=a.data;
	})
	this.axios.get("/QuanBu02_youce").then(a => {
            this.youce=a.data;
    });
  }
}
</script>

<style scoped>
/* <!-- 顶部开始 --> */
.d1>div{height: 200px;width: 50%;position: relative;}
.d1>div:first-child{margin-right: 20px;}

.d1>div:first-child{
  background-image: url("../img/KanFang/show_tab_right_02.jpg");
}
.d1>div:last-child{
  background-image: url("../img/KanFang/show_tab_left_02.jpg");
}
@keyframes fu1 {
  0%{background-size: 100% 100%;background-position: 0px 0px;}
  50%{background-size: 110% 110%;background-position: -30px -10px;}
  100%{background-size: 100% 100%;background-position: 0px 0px;}
}
.d1>div:first-child,.d1>div:last-child{background-repeat: no-repeat;background-size: 100% 100.2%;}
.d1>div:first-child:hover,.d1>div:last-child:hover{animation: fu1 5s;}

.kan{position: absolute;padding: 35px 0 0 35px;}
.kan>h5{font-size: 22px;}
.kan>div{
  width: 90px;
  color: #fff;
  margin-top: 20px;
  padding: 5px 0;
  text-align: center;
  font-size: 15px;
  background-color: #f60;
  border-radius: 5px;
}
.kan>div:hover{background-color: #db5700;}

.lv>ul{color: #818181;user-select: none;cursor: pointer;height: 40px;background-color: #f5f5f5;}
.lv2{color: #60ad00;border-top: 2px solid #62ab00;outline: 1px solid #fff;border-left: 1px solid #d8d8d8;background-color: #fff;}
.lv>div{color: rgb(51, 51, 51);font-size: 14px;top:54px;position: absolute;padding-left: 25px;}
.lv>div>span:hover{color: #f00;}
/* <!-- 顶部结束 --> */


/* <!-- 中间开始 --> */
.anquan{padding: 8px 20px;color: #f56d40;background-color: #fee9e3;font-size: 12px;}
.img_k1>img{width: 300px;height: 200px;border-radius: 10px;cursor: pointer;}
.xuxian{border-bottom: 1px dashed rgb(223, 223, 223);}
.col_dan p,.col_dan span{color: #9b9b9b;font-size: 14px;}
.col_dan>p>span{color: #9b9b9b;font-size: 14px;}
.col_dan1{font-size: 24px !important;}

.h90{height: 90px;background-image: url("https://pages.anjukestatic.com/xinfang/img/house/hui/s-carActive.jpg");}
.h37{height: 37px;padding: 13px 0 0 24px;font-size: 18px;}
.h220{height: 220px;font-size: 14px;padding: 14px 25px 0;}
/* <!-- 中间结束 --> */


/* <!-- 底部开始 --> */
.tw{display: flex;justify-content: space-between;align-items: center;background-color: #f9f9f9;height: 50px;}
.tw>div a{color: #818181}
.tw>div{padding: 0 20px;font-size: 18px;}
.tw>div:last-child{font-size: 13px;color: #818181;}
.tw>div a:hover,.tw>div:last-child:hover{color: #fc6a6a;cursor: pointer;}
.tu1>p{width: 200px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;margin: 5px 0;}
.tu1>p:last-child{font-size: 14px;margin-bottom: 18px;}
.tu1>p>span{color: rgb(255, 94, 0);}
.tu1:hover{background-color: #f3f3f3;cursor: pointer;}
.tu1>div{width: 200px; height: 150px;}
.tu1>div>img{border-radius: 10px;}
/* <!-- 底部结束 --> */
</style>