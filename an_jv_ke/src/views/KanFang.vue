<template>
  <div class="KanFang">
    <myheader/>
    
    <div class="yt1">
      <!-- 顶部 -->
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
          <ul class="d-flex border-bottom">
              <li class="px-3 py-2 border-right">专车看房</li>
              <li class="px-3 py-2 border-right">大巴看房</li>
          </ul>
          <div class="position-absolute">
            <div>区域：<span style="color:#f00;">全部</span></div>
            <span class="ml-3" v-for="(z,i) of AA1" :key="i">{{z}}</span>
          </div>
          <div class="position-absolute">
            <div>区域：<span style="color:#f00;">全部</span></div>
            <span class="ml-3" v-for="(z,i) of AA2" :key="i">{{z}}</span>
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
  data () {
    return {
      AA1:[],AA2:[]
    }
  },
  components: {
    myheader,myfooter
  },
  mounted () {
    this.axios.get("/KanFang").then(a => {
          this.AA1=a.data.zhuan_che;
          this.AA2=a.data.da_ba;
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

.lv>ul{color: #60ad00;border-top: 2px solid #62ab00;user-select: none;cursor: pointer;}
.lv>div{color: #000;font-size: 14px;top:54px}
.lv>div>span:hover{color: #f00;}
/* <!-- 顶部结束 --> */
</style>