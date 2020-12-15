<template>
<div>
    <ul class="d-flex float-right m-0" style="cursor: pointer;user-select: none;">
        <li :class="ys" @click="shang()">上一页</li>

        <ul v-for="i of zhu_zong" :key="i">
            <li v-if="i==xian" :class="ys">{{i}}</li>
            <li v-else-if="xian<5&&(i)<6" @click="tiao(i)" :class="ys">{{i}}</li>
            <li v-else-if="zhu_zong<7||i==1||i==zhu_zong||(xian-2<=i&&i<=xian+2)" @click="tiao(i)" :class="ys">{{i}}</li>
            <li v-else>
                <ul>
                    <li v-if="xian<5&&i==6">...</li>
                    <li v-if="xian==4&&i==7">...</li>
                    <li v-if="xian>4&&i==xian-3">...</li>
                    <li v-if="xian>4&&i==xian+3">...</li>
                </ul>
            </li>
        </ul>

        <li :class="ys" @click="xia()">上一页</li>
    </ul>

    <!-- <div><img src="./aa.svg" alt=""></div> -->
</div>
</template>

<script>
export default {
    model:{ //通过v-model传过来的参数
        prop: 'xian',
        event: 'xian0'
    },
    props:{
        zhu_zong:{
            type: Number,
            default: 1
        },
        xian:{ //通过v-model传过来的参数
            type: Number,
            default: 1
        }
    },
    data(){
        return {
            xian0:'', //避免操作props参数
            ys:"btn-sm btn-success px-3 ml-2 disabled"
        }
    },
    computed: {
        prevDisable(){ //“上一页”按钮是否可点
            if(this.xian > 1){
                return false;
            }else{
                return true
            }
        },
        nextDisable(){ //“下一页”按钮是否可点
            if(this.xian < this.zhu_zong && this.zhu_zong > 1){
                return false;
            }else{
                return true;
            }
        },
    },
    methods: {
        shang(){ //点击上一页
            if(this.xian == 1){
                return ;
            }else{
                this.$emit('xian0',this.xian-1);
                this.$emit('on-tiao',this.xian-1);
            }
        },
        xia(){ //点击下一页
            if(this.xian == this.zhu_zong){
                return ;
            }else{
                this.$emit('xian0',this.xian+1); //修改当前页码
                this.$emit('on-tiao',this.xian+1); //跳转
            }
        },
        tiao(id){ //直接跳转
            if(id>this.zhu_zong){ 
                id=this.zhu_zong;
            }
            this.xian0 = '';
            this.$emit('xian0',id); //修改当前页码
            this.$emit('on-tiao',id); //跳转
        }
    }
}
</script>

<style scoped>
ul>li{margin: 0 !important;}
</style>