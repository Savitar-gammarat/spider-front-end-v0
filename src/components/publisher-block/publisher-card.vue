<template>
	<div>
		<publisher-header>
			<template slot="logo">
				<!--插槽插图片-->
				<img src="" alt="">
			</template>
			<template slot="title">
				<!--插槽插标题-->
			</template>
		</publisher-header>
		<publisher-data-wrapper>
			<!--父向子传值-->
		</publisher-data-wrapper>
	</div>
</template>

<script>
	import PublisherHeader from "@/components/publisher-block/publisher-card/publisher-header";
	import PublisherDataWrapper from "@/components/publisher-block/publisher-card/publisher-data-wrapper";
	export default {
		name: "publisher-card",
		components: {PublisherDataWrapper, PublisherHeader},
	}
</script>

<style scoped>

</style>