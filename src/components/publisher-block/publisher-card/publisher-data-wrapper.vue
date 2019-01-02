<template>
	<div class="publisher-data">
		<!--传值后进行数据遍历-->
		<div class="publisher-link" v-for="i in dataList" :key="i.id">
			<div class="md-layout">
				<div class="md-layout-item md-size-16">
					<span class="text">{{i.datetime | lastTime}}</span>
				</div>
				<div class="md-layout-item md-size-80">
					<a :href="i.link" class="link" v-text="i.title"></a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "publisher-data-wrapper",
		props:["dataList"],
		filters:{
			lastTime:function (value) {
				if (!value) return ''
				let date1 = new Date(value.replace(/\-/g, "/"))
				let date2 = new Date()
				let date3 = Math.abs(date1.getTime() - date2.getTime())
				let days = Math.floor(date3/(23*3600*1000))
				let leave1= date3 % (24*3600*1000)
				let hours= Math.floor(leave1/(3600*1000))
				if (days === 0){
					return hours + '时'
				}
				return days + '天' + hours + '时'
			}
		}
	}
</script>

<style scoped>
.publisher-data{
	overflow-y: scroll;
	overflow-x: hidden;
	padding: 5px;
	position: absolute;
	left: 0;
	top: 60px;
	right: -17px;
	bottom: 0;
}
.publisher-link{

}
.text{
	font-size: 14px;
	color: #777;
	padding-left: 7px;
}
.link{
	cursor: pointer;
	color: #0060a0;
	text-decoration: none;
	border-bottom: 1px solid rgba(0,96,160,0.15);
	font-size: 15px;
}


</style>