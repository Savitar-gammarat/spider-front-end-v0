<template>
	<div>
		<div class="options">
			<span>All Sites</span>
			<span></span>
		</div>
		<div class="options">
			<span>Any time</span>
		</div>
		<div class="options-chips">
			<md-chip class="md-primary" @click="deleteChips(index)" v-for="(chip, index) in projects" :key="chip" md-deletable>{{ chip }}</md-chip>
		</div>
	</div>
</template>

<script>
	export default {
		name: "search-options",
		currentProject: 'Vue Material',
		data(){
			return{
				projects: [
					'Vue Material',
					'Element UI',
					'Quasar',
					'Axios',
					'Material Design'
				]
			}
		},
		methods:{
			deleteChips(index){
				this.projects.splice(index, 1)
			}
		}
	}
</script>

<style scoped>
.options{
	display: inline-block;
	margin: 0 20px 15px 5px;
}
.options-chips{
	margin: 0 20px 15px 0;
}
</style>