<template>
	<div>
		<!--将card写死，然后父向子传值-->
		<publisher-card>
		
		</publisher-card>
	</div>
</template>

<script>
	import PublisherCard from "@/components/publisher-block/publisher-card";
	export default {
		name: "publisher-block",
		components: {PublisherCard},
		data() {
			return{
			
			}
		}
	}
</script>

<style scoped>

</style>