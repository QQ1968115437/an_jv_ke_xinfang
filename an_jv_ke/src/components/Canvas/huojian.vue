<template>
<!-- // 画个火箭🚀 -->
    <div>
        <canvas width="100" height="50" class="border" id="huo"></canvas>
    </div>
</template>

<script>
export default {
    mounted() {
        let A=document.getElementById("huo");
        let B=A.getContext("2d");
    },
}
</script>

<style>

</style>