<template>
	<span v-text="copyRight" class="copy-right"></span>
</template>

<script>
	export default {
		name: "bottom-bar",
		data(){
			return{
				copyRight:"Copyright © 2019 Group Savitar-gammarat. All rights reserved."
			}
		}
	}
</script>

<style scoped>

</style>