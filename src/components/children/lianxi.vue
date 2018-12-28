<template>
	<div>
		<img src="../../assets/banner3.jpg" style="width: 100%;display: block;" alt="">
		<div class="content">
			<div class="dizhi">
				<div class="title">联系我们</div>
				<div class="heng"></div>
				<div class="con">
				<div class="left">
					<div class="lt">背景百草园中医中医诊所</div>
					<div class="come">
						<div><img src="../../assets/公交车.png" alt="">地址 </div>
						<div><img src="../../assets/联系电话.png" alt=""> 电话</div>
						<div><img src="../../assets/邮箱.png" alt=""> 邮箱</div>
						<div><img src="../../assets/公司邮编.png" alt=""> 邮编</div>
					</div>
					<div class="erweima">
						<div>百草园官方微信</div>
						
						<div>二维码</div>
					</div>
				</div>
				<div class="right" style="border:1px solid ">
					<div class="amap-wrapper">
					<el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
					</div>
								</div>
				</div>
					
			</div>
			<div class="luxian">
				<div class="title">乘车路线</div>
				<div class="heng"></div>
				<div class="come">
					<div><img src="../../assets/公交车.png" alt=""><span class="title">公交车</span><span>路线呢</span></div>
					<div><img src="../../assets/公交车.png" alt=""><span class="title">公交车</span><span>路线呢</span></div>
					<div><img src="../../assets/公交车.png" alt=""><span class="title">公交车</span><span>路线呢</span></div>
				</div>
			</div>
			<div class="tousu">
				<div class="title">投诉意见</div>
				<div class="heng"></div>
				<div class="button">
					<div>投诉意见</div>
					<div>加盟经销商</div>
				</div>
			</div>
			<div class="liuyan">
				<div class="title">留言</div>
				<div class="heng"></div>
				<div class="liudi">
					<div class="left">
						<div><input type="text" placeholder="姓名"></div>
						<div>	<input type="text" placeholder="电话"></div>
						<div><input type="text" placeholder="E-mail"></div>
					</div>
					<div class="right" >
						<textarea value="" style="width: 100%;" placeholder="您的留言" />
					</div>
				</div>
				<div style="clear: both;"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				 msg: 'vue-amap向你问好！'
			};
		}
	}
</script>

<style scoped>
	.content{
			width: 70%;
			margin: 0 auto;
	}
	.title{
		padding: 70px 0 42px 0;
		font-size: 40px;
	}
	.heng{
		border-top: 2px solid  rgb(175,155,130);
		height: 1px;
		margin-bottom: 60px;
	}
	.con{
		overflow: hidden;
	}
	.dizhi .con .right{
		float: right;
		width: 50%;
		margin-right: 3%;
		height: 600px;
		background: palegoldenrod;
	}
	.dizhi .con .left{
		float: left;
	}
	.lt{
		font-size: 30px;
	}
	.come{
		padding-top: 30px;
	}
	.come>div{
		margin: 20px 0;
		font-size: 20px;
	}
	.come{
		padding-left: 30px;
	}
	.come img{
		vertical-align: middle;
		width: 60px;
		color:rgb(175,155,130) ;
		margin-right: 20px;
	}
	.come .title{
		font-size: 30px;
		margin-right: 30px;
	}
	.come>div>span{
		vertical-align: middle;
	}
	
	.erweima{
		text-align: center;
	}
	.erweima>div:nth-child(2){
		margin-top: 40px;
		display: inline-block;
		width: 200px;
		height: 200px;
		background: cyan;
	}
	.amap-wrapper {
  width: 100%;
  height: 600px;
}
.button{
		display: flex;
		justify-content: flex-start;
		margin-top: 30px;
	}
	.button>div{
		float: left;
		color: white;
		line-height: 40px;
		margin-right: 100px;
		font-size: 20px;
		text-align: center;
		background: rgb(218,122,37);
		width: 15%;
		border-radius: 5px;
		box-shadow: 5px 5px 8px #333;
	}
	.liudi>div{
		width: 50%;
		float: left;
	}
	.liudi>.right{
		box-sizing: border-box;
		padding-left: 3%;
	}
	.liudi>.right>textarea{
		resize: none;
		width: 50%;
		height: 200px;
		font-size: 20px;
	}
	.liudi>.left>div{
		margin-bottom: 30px;
		font-size: 20px;
	}
	.liudi>.left input{
		font-size: 30px;
		width: 90%;
	}
	.liuyan{
		/* overflow: hidden; */
		margin-bottom: 48px;
	}
</style>
