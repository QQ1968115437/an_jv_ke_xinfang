<template>
  <div class="QuanBu">
    <myheader/>
    
    <div class="QuanBu0">
      <quan-bu01/>
      <quan-bu02/>
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
  }
}
</script>

<style>
  .QuanBu0{width: 1180px;margin: auto;}
</style>