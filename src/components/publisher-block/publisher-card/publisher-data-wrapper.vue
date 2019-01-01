<template>
	<div>
		<!--传值后进行数据遍历-->
		<div  v-for="i in dataList" :key="i.id">
			<span v-text="i.title"></span>
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

</style>