<template>
	<div class="publisher-header">
		<!--蒙版-->
		<div class="publisher-header-mask"></div>
		<div class="publisher-header-wrapper">
			<div class="publisher-icon">
				<!--替代性img-->
				<img class="publisher-icon-img" src="../../../assets/logo.png" alt="logo">
			</div>
			<div class="publisher-text">
				<span class="publisher-text-title">
					<slot name="title"></slot>
				</span>
				<span class="publisher-text-subtitle">
					<span class="sp">最新</span>
					<span class="sp">·</span>
					<span class="sp">年</span>
					<span class="sp">·</span>
					<span class="sp">月</span>
					<span class="sp">·</span>
					<span class="sp">日</span>
				</span>
			</div>
			<!--阴影效果-->
			<div class="publisher-scroll-progress"></div>
		</div>
		<slot name="logo"></slot>
	</div>
</template>

<script>
	export default {
		name: "publisher-header"
	}
</script>

<style scoped>
.publisher-header{
	position: relative;
	height: 50px;
	width: 100%;
}
.publisher-header-wrapper{
	width: 100%;
	height: 100%;
	position: absolute;
	background-color: transparent;
	box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 2px -1px rgba(0, 0, 0, 0.2);
	border-radius: 6px;
	overflow: hidden;
}
.publisher-icon{
	position: absolute;
	width: 50px;
	height: 100%;
	vertical-align: top;
	display: inline-block;
}
.publisher-icon-img{
	position: relative;
	height: 60%;
	width: 60%;
	display: block;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.publisher-text{
	padding: 5px;
	position: absolute;
	left: 50px;
}
.publisher-text-title{
	user-select: none;
	font-weight: 500;
	font-size: 17px;
	display: block;
	position: relative;
	text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
	white-space: nowrap;
	overflow: hidden;
	margin-right: 40px;
	text-overflow: ellipsis;
	left: 3px;
}
.publisher-text-subtitle{
	top: 3px;
	user-select: none;
	position: relative;
	display: block;
	bottom: 4px;
	height: 19px;
	font-size: 0;
	white-space: normal;
	overflow: hidden;
	margin-right: 40px;
	text-overflow: ellipsis;
}
.sp{
	font-size: 14px;
	cursor: default;
	display: inline-block;
	margin-left: 3px;
	margin-right: 3px;
	line-height: 14px;
	user-select: none;
	vertical-align: middle;
	opacity: 0.75;
}
</style>