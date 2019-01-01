<template>
	<div>
		<publisher-header>
			<template slot="logo">
				<!--插槽插图片-->
				<img src="" alt="">
			</template>
			<template slot="title">
				{{item.sites}}
			</template>
		</publisher-header>
		<publisher-data-wrapper :dataList="item.list"></publisher-data-wrapper>
	</div>
</template>

<script>
	import PublisherHeader from "@/components/publisher-block/publisher-card/publisher-header";
	import PublisherDataWrapper from "@/components/publisher-block/publisher-card/publisher-data-wrapper";
	export default {
		name: "publisher-card",
		components: {PublisherDataWrapper, PublisherHeader},
		props:['item']
	}
</script>

<style scoped>

</style>