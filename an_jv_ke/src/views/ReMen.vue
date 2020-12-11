<template>
    <div class="ReMen">
        <myheader/>
        <lunbo/>
        <myfooter/>
    </div>
</template>

<script>
import myheader from '@/components/myheader/myheader'

import myfooter from '@/components/myfooter/myfooter'
import lunbo from '@/components/ReMen/lunbo'

export default {
    components: {
        myheader,myfooter,lunbo
    }
}
</script>

<style>
  .ReMen{width: 1180px;margin: auto;}
</style>