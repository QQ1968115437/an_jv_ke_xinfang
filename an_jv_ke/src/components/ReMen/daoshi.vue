<template>
    <div id="countdown" class="d-inline-block">
        <span v-if="new_time==0?false:true">{{new_time}}</span>
    </div>
</template>

<script>
export default {
    props: ["shi"],
    data () {
        return {
            new_time:0
        }
    },
    mounted() {
        let sum=parseInt(this.shi);
        setInterval(()=>{
            let day,hour,min,second;
            if (sum>=0) {
                day = Math.floor(sum / (60 * 60 * 24));
                hour = Math.floor(sum / (60 * 60)) - (day * 24);
                min = Math.floor(sum / 60) - (day * 24 * 60) - (hour * 60);
                second = Math.floor(sum) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (min * 60);
                if (day <= 9) day = '0' + day;
                if (hour <= 9) hour = '0' + hour;
                if (min <= 9) min = '0' + min;
                if (second <= 9) second = '0' + second;
            }
            this.new_time="还剩："+day+"天"+"  "+hour+"时"+"  "+min+"分"+"  "+second+"秒";
            sum--;
        },1000)
    }
}
</script>
