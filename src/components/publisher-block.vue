<template>
	<div class="md-layout">
		<div class="md-layout-item md-large-size-33 md-xlarge-size-33 md-medium-size-33 md-small-size-50 md-xsmall-size-100 publisher-block"
			v-for="item in publishList" :key="item.id">
			<publisher-card :item="item"></publisher-card>
		</div>
	</div>
</template>

<script>
	import PublisherCard from "@/components/publisher-block/publisher-card";
	import axios from 'axios'
	export default {
		name: "publisher-block",
		components: {PublisherCard},
		data() {
			return{
				publishList:[
				{
					id:1,
					sites:"豆瓣",
					all_news:[
						{id:1, title:"机智的weekbin又写了一个网站机智的weekbin又写了一个网站机智的weekbin又写了一个网站"},
						{id:2, title:"机智的weekbin组件化写的非常漂亮"},
						{id:3, title:"机智的weekbin写的代码就艺术品"},
					]
				},
				{
					id:2,
					sites:"知乎",
					all_news:[
						{id:1, title:"还有三分钟就要睡觉了"},
						{id:2, title:"结果并没有按时睡觉"},
					]
				},
				{
					id:3,
					sites:"斗鱼",
					all_news:[
						{id:1, title:"早上起来奋斗"},
						{id:2, title:"写代码是没有睡眠的"},
					]
				},
				{
					id:4,
					sites:"郝轲打炉石",
					all_news:[
						{id:1, title:"早上起来奋斗"},
						{id:2, title:"写代码是没有睡眠的"},
					]
				},
				{
					id:5,
					sites:"丁丁打英雄联盟",
					all_news:[
						{id:1, title:"早上起来奋斗"},
						{id:2, title:"写代码是没有睡眠的"},
					]
				}
			]
			}
		},
		methods:{
			publish(){
				axios.get("/News").then(response=>{
					this.publishList = response.data.publishList
				})
			}
		},
		mounted:function () {
			this.publish()
		}
	}
</script>

<style scoped>
.publisher-block{
	position: relative;
	overflow: hidden;
	height: 400px;
	padding: 8px;
}
</style>