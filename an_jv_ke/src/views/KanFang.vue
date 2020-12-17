<template>
  <div class="KanFang">
    <myheader/>
    
    <!-- <div class="QuanBu0">
      <quan-bu01/>
      <quan-bu02/>
      <quan-bu03/>
    </div> -->

    <myfooter/>
  </div>
</template>

<script>
import myheader from '@/components/myheader/myheader'
import myfooter from '@/components/myfooter/myfooter'

export default {
  components: {
    myheader,myfooter
  }
}
</script>

<style>
  .QuanBu0{width: 1180px;margin: auto;}
</style>