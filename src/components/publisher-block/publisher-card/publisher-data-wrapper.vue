<template>
	<div class="publisher-data">
		<!--传值后进行数据遍历-->
		<div class="publisher-link" v-for="i in dataList" :key="i.id">
			<div class="md-layout">
				<div class="md-layout-item md-size-16">
					<span class="text">2H</span>
				</div>
				<div class="md-layout-item md-size-80">
					<span class="link" v-text="i.title"></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "publisher-data-wrapper",
		props:["dataList"]
	}
</script>

<style scoped>
.publisher-data{
	overflow-y: scroll;
	overflow-x: hidden;
	padding: 5px;
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