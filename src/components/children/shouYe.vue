<template>
	<div class="shouYe">
		<img src="../../assets/img/banner1.jpg" alt="">
		<div class="content">
			<div class="xiangmu">
				<div class="title">
					<i></i>
					<span>特色项目</span>
					<i></i>
				</div>
				<div class="nei">
					<img src="@/assets/img/i_4-4.png" alt="">
					<img src="@/assets/img/i_6-6.png" alt="">
					<img src="@/assets/img/i_7-7.png" alt="">
					<img src="@/assets/img/i_8-8.png" alt="">
					<img src="@/assets/img/i_1-1.png" alt="">
					<img src="@/assets/img/i_2-2.png" alt="">
					<img src="@/assets/img/i_3-3.png" alt="">
					<img src="@/assets/img/i_5-5.png" alt="">
				</div>
			</div>
			
			
			<div class="news">
				<div class="title">
					<i></i>
					<span>医馆新闻</span>
					<i></i>
				</div>
				<div class="nei">
					<div class="con">
						<div class="left">左侧</div>
						<div class="right">
							<div style="padding: 20px;">
							<div class="fudong">
								<div style="vertical-align: middle; display: inline-block;height: 30px;width: 10px;background: rgb(172,106,0);"></div>
								中医常识
							</div>
							<div class="le">
								<!-- 模板 -->
								<div>
									<span></span>
									<span>唐太重的即便白起呢奥术大师</span>
								</div>
								<div>
									<span></span>
									<span>唐太重的即便白起呢奥术大师</span>
								</div>
								<div>
									<span></span>
									<span>唐太重的即便白起呢奥术大师</span>
								</div>
								<div>
									<span></span>
									<span>唐太重的即便白起呢奥术大师</span>
								</div>
								<div>
									<span></span>
									<span>唐太重的即便白起呢奥术大师</span>
								</div>
								<div>
									<span></span>
									<span>唐太重的即便白起呢奥术大师</span>
								</div>
							</div>
							<div class="le">
								<div>
									<span></span>
									<span>唐太重的即便白起呢奥术大师</span>
								</div>
								<div>
									<span></span>
									<span>唐太重的即便白起呢奥术大师</span>
								</div>
								<div>
									<span></span>
									<span>唐太重的即便白起呢奥术大师</span>
								</div>
								<div>
									<span></span>
									<span>唐太重的即便白起呢奥术大师</span>
								</div>
								<div>
									<span></span>
									<span>唐太重的即便白起呢奥术大师</span>
								</div>
								<div>
									<span></span>
									<span>唐太重的即便白起呢奥术大师</span>
								</div>
								<div>
									<span></span>
									<span>唐太重的即便白起呢奥术大师</span>
								</div>
							</div>
							<div style="clear: both;"> </div>
							</div>
						</div>
					</div>
					
				</div>
				<div class="button">
					<div>免费咨询</div>
					<div>在线预约</div>
					<div>常见问题</div>
					<div>就诊指南</div>
				</div>
			</div>
		
			<div class="zhongyi">
				<div class="title">
					<i></i>
					<span>热门中医</span>
					<i></i>
				</div>
				<div class="swiper">
					<div class="left" @click="zuo"> < </div>
					<div class="yincang" ref="yincang">
						<div class="gundong" ref="gundong">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
					<div class="right" @click="you"> > </div>
				</div>
			</div>
			
			<div class="ketang">
				<div class="title">
					<i></i>
					<span>中医课堂</span>
					<i></i>
				</div>
				<div class="con">
					<div>
						<div class="title">健康之声</div>
						<div>防止糖尿病按摩八步皱</div>
						<div>防止糖尿病按摩八步皱</div>
						
						<div>防止糖尿病按摩八步皱</div>
						<div>防止糖尿病按摩八步皱</div>
						<div>防止糖尿病按摩八步皱</div>
						<div>防止糖尿病按摩八步皱</div>
						<div>防止糖尿病按摩八步皱</div>
						<div>防止糖尿病按摩八步皱</div>
						<div>防止糖尿病按摩八步皱</div>
						<div>防止糖尿病按摩八步皱</div>
						
					</div>
					<div>
						<div class="title">健康之声</div>
						<div>防止糖尿病按摩八步皱</div>
						<div>防止糖尿病按摩八步皱</div>
						
						<div>防止糖尿病按摩八步皱</div>
						<div>防止糖尿病按摩八步皱</div>
						<div>防止糖尿病按摩八步皱</div>
						<div>防止糖尿病按摩八步皱</div>
						<div>防止糖尿病按摩八步皱</div>
						<div>防止糖尿病按摩八步皱</div>
						<div>防止糖尿病按摩八步皱</div>
						<div>防止糖尿病按摩八步皱</div>
					
					</div>
					<div>
						<div class="title">健康之声</div>
						<div>防止糖尿病按摩八步皱</div>
						<div>防止糖尿病按摩八步皱</div>
						
						<div>防止糖尿病按摩八步皱</div>
						<div>防止糖尿病按摩八步皱</div>
						<div>防止糖尿病按摩八步皱</div>
						<div>防止糖尿病按摩八步皱</div>
						<div>防止糖尿病按摩八步皱</div>
						<div>防止糖尿病按摩八步皱</div>
						<div>防止糖尿病按摩八步皱</div>
						<div>防止糖尿病按摩八步皱</div>
						
					</div>
				</div>
			</div>
			
			<div class="huanjing">
				<div class="title">
					<i></i>
					<span>医馆环境</span>
					<i></i>
				</div>
				<div class="con">
					<div class="oneL">
						<div>导诊台</div>
						<div>图片</div>
					</div>
					<div class="towL">
						<div>
							图片
						</div>
						<div>
							图片
						</div>
					</div>
					<div class="threeL">
						<div>
							<div>建擦拭</div>
							<div>病房</div>
						</div>
						<div style="height: 20px;"></div>
						<div>
							<div>建擦拭</div>
							<div>病房</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="huoban">
				<div class="title">
					<i></i>
					<span>合作伙伴</span>
					<i></i>
				</div>
				<div class="con">
					<div></div>
					<div class="timen">
						<div style="color: green;font-size: 30px;line-height: 40px;margin: 0 10px;">
							<div>
								安全
							</div>
							<div>
								体系
							</div>
						</div>
						<div>主治医生坐诊</div>
						<div>前沿治疗技术</div>
						<div>医院高科设备</div>
						<div>无菌环境保证</div>
						<div>人文服务体系</div>
						<div><mark style="color: #FFA500;background: white;">【康复热线】</mark>4000000</div>
					</div>
				</div>
			</div>
			
			
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		created(){
			console.log(1);
			this.axios({
				method:'post',
				url:"http://zyg.zkeli.com/?a=catelist&c=article&m=api"
			}).then(function(res){
				console.log(res.data)
			})
		},
		methods:{
			zuo(){
			
				var l = this.$refs.gundong.offsetLeft;
				if(l < 0){
					console.log(1);
					var d = l + 500;
					if(d < 0){
						this.$refs.gundong.style.left = d + "px";
					}else{
						this.$refs.gundong.style.left = 0;
					}
				}
			},
			you(){
				var l = this.$refs.gundong.offsetLeft;
				var w = this.$refs.gundong.clientWidth;
				var w2 = this.$refs.yincang.clientWidth;
				console.log(l,w)
				if(l > - (w - w2)){
					var d = l - 500;
					if(d > - (w - w2) ){
						this.$refs.gundong.style.left = d + "px";
					}else{
						this.$refs.gundong.style.left = -(w - w2)  + "px";
					}
				}
			}
		}
	}
</script>

<style scoped>
	.content{
		font-size: 18px;
		line-height: 22px;
		color:rgb(175,155,130);
		width: 70%;
		margin: 0 auto;
	}
	.shouYe>img{
		width: 100%;
		display: block;
	}
	.title{
		text-align: center;
	}
	.title>i{
		border-top: 2px solid rgb(175,155,130);
		vertical-align: middle;
		width: 12%;
		display: inline-block;
		background: red;
	}
	.title>span{
		font-size: 50px;
		vertical-align: middle;
		display: inline-block;
		color: rgb(175,155,130);
		padding: 7vh 0;
		font-weight: bold;
	}
	/* 以上为pc端公共样式配置 */
	/* 特色项目样式 */
	.xiangmu>.nei{
		padding: 20px 0;
		display: flex;
		justify-content:space-between;
		flex-flow:wrap row;
	}
	/* 医馆新闻样式 */
	.news>.nei{
		overflow: hidden;
	}
	.news>.nei>.con>div{
		float: left;
	}
	.news>.nei>.con>.left{
		width: 35%;
		background:gainsboro;
		margin: 50px 0;
		height: 300px;
	}
	.news>.nei>.con>.right{
		width: 65%;
		box-sizing: border-box;
		padding: 25px 30px;
		overflow: hidden;
	}
	.news>.nei>.con>.right>div{
		border: 1px dashed rgb(172,106,0);
		box-sizing: border-box;
		position: relative;
	}
	.news .fudong{
		font-size: 30px;font-weight: bolder;background: white;position: absolute;top:-15px;left: 40px;
		color: #333;
	}
	.news .le{
		width: 50%;
		float: left;
	}
	.news .le>div{
		margin: 5px 0;
	}
	.news .le>div>span{
		display: inline-block;
	}
	.news .le>div>span:nth-child(1){
		background:#333;width: 15px;height: 15px;border-radius: 50%;vertical-align: middle;
		margin-right: 15px;
	} 
	.news .le>div>span:nth-child(2){
		font-size: 20px;
		color: #333333;
		padding: 10px 0;
	}
	.news .button{
		display: flex;
		justify-content: space-between;
		margin-top: 30px;
	}
	.news .button>div{
		float: left;
		color: white;
		line-height: 40px;
		font-size: 20px;
		text-align: center;
		background: rgb(218,122,37);
		width: 15%;
		border-radius: 5px;
		box-shadow: 5px 5px 8px #333;
	}
	.ketang .con>div{
		float: left;
		width: 33.3%;
	}
	.ketang .con{
		overflow: hidden;
		text-align: center;
		font-size: 20px;
		color: #666;
		line-height: 50px;
		font-weight: 200;
	}
	.ketang .con .title{
		font-size: 30px;
		color: #333;
		line-height: 40px;
		font-weight: 400;
		margin-bottom: 30px;
	}

	/* 热门中医 */
	.zhongyi .swiper{
		height: 400px;
		position: relative;
		background: #666666;
	}
	.zhongyi .swiper .left{
		font-size: 100px;
		font-weight: bolder;
		position: absolute;
		top:200px
	}
	.zhongyi .swiper .right{
		font-size: 100px;
		font-weight: bolder;
		position: absolute;
		top:200px
	}
	.zhongyi .swiper .left{
		left: -80px;
	}
	.zhongyi .swiper .yincang{
		overflow: hidden;
		position: relative;
		height: 100%;
		white-space: nowrap;
	}
	.zhongyi .swiper .yincang .gundong{
		position: absolute;
		transition: 0.5s;
		white-space: nowrap;
		background: green;
	}
	.zhongyi .swiper .right{
		right:  -80px;
	}
	.zhongyi .swiper .yincang .gundong>div{
		display: inline-block; width: 400px;height: 400px;background: red;
		margin-right: 100px;
	}

	/* 环境 */
	.huanjing .con{
		overflow: hidden;
	}
	.huanjing .con>div{
		width: 31%;
		float: left;
		margin: 0 1.15%;
	}
	.huanjing .oneL>div:nth-child(1){
		background: rgb(109,84,54);
		height: 90px;
		color: white;
		font-size: 40px;
		line-height: 90px;
		text-align: center;
		margin-bottom: 20px;
	}
	.huanjing .oneL>div:nth-child(2){
		background: cyan;
		height: 490px;
		color: white;
		font-size: 40px;
		line-height: 60px;
		text-align: center;
		margin-bottom: 20px;
	}
	.huanjing .towL>div:nth-child(1){
		background: #2C3E50;
		height: 290px;
		margin-bottom: 20px;
	}
	.huanjing .towL>div:nth-child(2){
		background:orange;
		height: 290px;
	}
	.huanjing .threeL>div>div:nth-child(1){
		background: rgb(109,84,54);
		height: 90px;
		color: white;
		font-size: 40px;
		line-height: 90px;
		text-align: center;
		margin-bottom: 20px;
	}
	.huanjing .threeL>div>div:nth-child(2){
		height: 180px;
		background: #FFA500;
	}


	/* 合作伙伴 */
	.huoban .con>div:nth-child(1){
		height: 250px;
		background: lightcyan;
	}
	.huoban .con>div:nth-child(2){
		margin: 25px 12px;
		height: 84px;
		overflow: hidden;
		border: 1px dashed rgb(172,106,0);
	}
	.huoban .con>div:nth-child(2)>div{
		float: left;
		font-size: 24px;
		margin:0 20px;
		line-height: 84px;
		}
	.timen{
		display: flex;
		justify-content: space-between;
	}
	@media screen and (max-width:1300px){
		.content{
			font-size: 18px;
			line-height: 22px;
			color:rgb(175,155,130);
			width: 100%;
			margin: 0 auto;
		}
	}
</style>
