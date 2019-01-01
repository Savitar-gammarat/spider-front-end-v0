<template>
	<div>
		<publisher-card v-for="item in publishList" :item="item"></publisher-card>
	</div>
</template>

<script>
	import PublisherCard from "@/components/publisher-block/publisher-card";
	export default {
		name: "publisher-block",
		components: {PublisherCard},
		data() {
			return{
				publishList:[
				{
					id:1,
					sites:"豆瓣",
					list:[
						{id:1, title:"机智的weekbin又写了一个网站"},
						{id:2, title:"机智的weekbin组件化写的非常漂亮"},
						{id:3, title:"机智的weekbin写的代码就艺术品"},
					]
				},
				{
					id:2,
					sites:"知乎",
					list:[
						{id:1, title:"还有三分钟就要睡觉了"},
						{id:2, title:"结果并没有按时睡觉"},
					]
				}
			]
			}
		}
	}
</script>

<style scoped>

</style>