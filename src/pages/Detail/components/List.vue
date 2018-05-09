<template>
<div>
	<div 
		class="list"
		v-for ="(item, index) in categoryList"
		:key = "index"
	>
		<div class="item-title">
			<span class="ticket-icon border-bottom" ></span>
			{{item.title}}
		</div>
		<!-- 递归组件:调用自己实现二级的列表 -->
		<div v-if="item.children" class="item-children">
			<detail-list :categoryList = "item.children"></detail-list>
		</div>
	</div>
</div>

</template>
<script>
export default{
	name:'DetailList',
	props: {
		categoryList: Array
	}
}

</script>
<style lang="stylus" scoped>
.list
	padding: 0 .1rem
	left:0
	top:0
	line-height:.6rem
	.ticket-icon
		position:relative
		display: inline-block
		width: .36rem
		height: .36rem
		top: .1rem
		left: .1rem
		margin-right: .1rem
		background-size: .4rem 3rem
		background:url('//s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -.45rem no-repeat
	.item-title
		line-height:.8rem
		font-size:.32rem
		padding: 0 .2rem
	.item.children
		padding: 0 .2rem
</style>
