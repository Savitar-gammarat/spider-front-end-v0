<template>
	<div>
		<logo></logo>
		<slide-menu></slide-menu>
	</div>
</template>

<script>
	import SlideMenu from "@/components/navigation/slide-menu";
	import Logo from "@/components/common/logo";
	export default {
		name: "navigation",
		components: {Logo, SlideMenu}
	}
</script>

<style scoped>

</style>