<template>
	<div class="KanFang">
    	<myheader/>
    
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
			<!-- 底部 -->
			<div class="border mt-3 w-75">
				<div class="border-bottom tw">
					<div>往期看房团回顾</div>
					<div>更多>></div>
				</div>
				<div class="d-flex justify-content-around">
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
			<div class="border p-3 mt-3 d-flex zd">
				<div style="width: 110px;">新房直达：</div>
				<div>
					<ul class="d-flex flex-wrap m-0">
						<li v-for="(z,i) in AA4" :key="i" class="pr-3"  @mouseover="chuan(i)">{{i}}</li>
					</ul>

					<!-- 超多重显示优化  v-else-if="aa1==i里i是父级传递的* -->
					<div v-for="(z,i) in AA4" :key="i">
						<ul v-if="aa1=='雄安新区'?true:false" class="d-flex flex-wrap m-0">
							<li v-for="n of AA4.雄安新区" :key="n" class="pr-3">{{n}}</li>
						</ul>
						<ul v-else-if="aa1==i?true:false" class="d-flex flex-wrap m-0">
							<li v-for="n of z" :key="n" class="pr-3">{{n}}</li>
						</ul>
					</div>

				</div>
			</div>

		</div>

    	<myfooter/>
	</div>
</template>

<script>
import myheader from '@/components/myheader/myheader'
import myfooter from '@/components/myfooter/myfooter'

export default {
  components: {
    myheader,myfooter
  },
  data () {
    return {
      AA1:[],AA2:[],AA3:[],AA4:{},a1:true,lvv1:"lv2",lvv2:"",aa1:"雄安新区"
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
	}
  },
  mounted () {
    this.axios.get("/KanFang").then(a => {
          this.AA1=a.data.zhuan_che;
          this.AA2=a.data.da_ba;
          this.AA3=a.data.huigu;
          this.AA4=a.data.zhida;
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

/* <!-- 底部开始 --> */
.tw{display: flex;justify-content: space-between;align-items: center;background-color: #f9f9f9;height: 50px;}
.tw>div{padding: 0 20px;font-size: 18px;}
.tw>div:last-child{font-size: 13px;color: #818181;}
.tu1>p{width: 200px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;margin: 5px 0;}
.tu1>p:last-child{font-size: 14px;margin-bottom: 18px;}
.tu1>p>span{color: rgb(255, 94, 0);}
.tu1:hover{background-color: #f3f3f3;cursor: pointer;}
.tu1>div{width: 200px; height: 150px;}

.zd{color: #858585;height: 120px;}
.zd>div>div>ul>li:hover{color: #d46a6a;cursor: pointer;}
/* <!-- 底部结束 --> */
</style>