<template>
  <div>
    <myheader :u="1" v-on:shuru="shuru"/>
    
    <div class="yt1">
      <quan-bu01/>
      <quan-bu02 :shuru1="shuru1"/>
      <quan-bu03/>
    </div>

    <myfooter/>
  </div>
</template>

<script>
import myheader from '@/components/myheader/myheader'
import QuanBu01 from '@/components/QuanBu/QuanBu01'
import QuanBu02 from '@/components/QuanBu/QuanBu02'
import QuanBu03 from '@/components/QuanBu/QuanBu03'
import myfooter from '@/components/myfooter/myfooter'

export default {
  components: {
    myheader,QuanBu01,QuanBu02,QuanBu03,myfooter
  },
  data () {
    return {
      shuru1:""
    }
  },
  methods: {
    // 模糊查询
	  shuru(e){this.shuru1=e}
  }
}
</script>
