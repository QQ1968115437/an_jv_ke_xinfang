<template>
	<div v-if="a==1?true:false" class="border p-3 mt-3 d-flex zd">
		<div style="width: 110px;">新房直达：</div>
		<div>
			<ul class="d-flex flex-wrap m-0">
				<li v-for="(z,i) in AA4" :key="i" class="pr-3"  @mouseover="chuan(i)">{{i}}</li>
			</ul>
			<!-- 超多重显示优化  v-else-if="aa1==i里i是父级传递的* -->
			<div v-for="(z,i) in AA4" :key="i">
				<ul v-if="aa1=='1'?true:false" class="d-flex flex-wrap m-0">
					<li v-for="n of AA4.雄安新区" :key="n" class="pr-3">{{n}}</li>
				</ul>
				<ul v-else-if="aa1==i?true:false" class="d-flex flex-wrap m-0">
					<li v-for="n of z" :key="n" class="pr-3">{{n}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        props: ["wen"],
        data () {
            return {
                AA4:{},aa1:"雄安新区",a:0
            }
        },
        methods: {
            chuan(e){
		        this.aa1=e;
	        }
        },
        mounted () {
            setTimeout(()=>{this.AA4=this.wen;this.a=1},1000)
        }
    }
</script>

<style>
.zd{color: #858585;height: 120px;}
.zd>div>div>ul>li:hover{color: #d46a6a;cursor: pointer;}
</style>