<template>
	<div>
		<input class="search" placeholder="Search Headlines..." v-model="search_message">
	</div>
</template>

<script>
	export default {
		name: "search-block",
		data(){
			return{
				search_message:null,
			}
		}
	}
</script>

<style scoped>
.search{
	box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
	border-radius: 2px;
	width: 100%;
	min-height: 48px;
	display: flex;
	position: relative;
	font-family: inherit;
	margin: 4px 0 24px;
	padding: 5px 0 0 20px;
	border: none;
}
</style>