<template>
	<div class="header">
		<div class="top"></div>
		<div class="banner">
			<img src="../assets/img/20171031091402654.png" alt="">
			<div>
				<span :class="{ red: $store.getters.getSl == 'show' }" @click="$store.commit('setSl','show')">首页</span>
				<i></i>
				<span :class="{ red: $store.getters.getSl == 'me' }" @click="$store.commit('setSl','me')">关于我们</span>
				<i></i>
				<span :class="{ red: $store.getters.getSl == 'll' }" @click="$store.commit('setSl','ll')">百草中医</span>
				<i></i>
				<span :class="{ red: $store.getters.getSl == 'toMe' }" @click="$store.commit('setSl','toMe')">联系我们</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.top{
		height: 23px;
		background: rgb(175,155,130);
	}
	.banner{
		padding-top: 100px;
		position: relative;
		text-align: center;
	}
	.banner>img{
		top: 0;
		position: absolute;
		left: 5%;
	}
	.banner>div{
		padding: 10px 0;
		font-size: 26px;
		color: rgb(175,155,130);
	}
	.banner>div>span{
		padding:0 30px;
	}
	.banner>div>i{
		border-left: 1px solid rgb(175,155,130);
		display: inline-block;
		height: 20px;
	}
	.red{
		color: red;
	}
</style>
