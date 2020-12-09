<template>
  <div class="QuanBu">
    <yt001/>
    
    <div class="QuanBu0">
      <quan-bu01/>
    </div>

    <myfooter/>
  </div>
</template>

<script>
import yt001 from '@/components/myheader/yt001'
import QuanBu01 from '@/components/QuanBu/QuanBu01'
import myfooter from '@/components/myfooter/myfooter'

export default {
  name: 'QuanBu',
  components: {
    yt001,QuanBu01,myfooter
  }
}
</script>

<style>
  .QuanBu0{width: 1180px;margin: auto;}
</style>