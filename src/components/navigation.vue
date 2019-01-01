<template>
	<div>
		<md-toolbar class="navigation md-transparent">
			<h3 class="md-title" style="flex: 1">
				<logo></logo>Title
			</h3>
			<md-button>
				<slide-menu></slide-menu>
			</md-button>
		</md-toolbar>
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
.navigation{
	height: 150px;
	box-shadow: none;
}
</style>