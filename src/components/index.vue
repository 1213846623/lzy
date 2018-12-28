<template>
	<div class="index">
		<h />
		
		<shou v-if="$store.getters.getSl == 'show'"></shou>
		<xq v-if="$store.getters.getSl == 'll'"></xq>
		<lianxi v-if="$store.getters.getSl == 'toMe'"></lianxi>
		<div class="footer">
			<img src="../assets/img/foot.jpg"style="width: 100%;" alt="">
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		components:{
			h:()=>import('@/components/h'),
			f:()=>import('@/components/f'),
			shou:()=>import('@/components/children/shouYe'),
			xq:()=>import('@/components/children/xq'),
			lianxi:()=>import('@/components/children/lianxi')
		},
		created(){
		
		}
	}
</script>

<style>

html{
	background-image: url(../assets/img/bg.png);
	background-size:100% 100%;
}
</style>
