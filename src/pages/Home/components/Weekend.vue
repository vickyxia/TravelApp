<template>
<div>
	<div class="title">周末去哪儿</div>
	<ul>
		<li class=" border-bottom"
			v-for="item in weekendList "
			:key='item.id'>
			<div class="item-img-wrapper">
				<img class="item-img"  :src="item.imgUrl" >
			</div>
			<div class="item-info">
				<p class="item-title">{{item.title}}</p>
				<p class="item-desc">{{item.desc}}</p>
			</div>
		</li>
	</ul>
</div>
</template>

<script>
/* eslint-disable */
// eslint-disable-next-line
export default{
  name:'HomeWeekend',
  props : {
  	weekendList: Array
  }
}

</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
	.title
		line-height: .6rem
		background:#eee
		font-size:.24rem
		padding-left:.1rem
		text-index:.2rem
	.item-img-wrapper
		overflow:hidden
		height:0
		padding-bottom:37.9%
		.item-img
			width:100%
	.item-info
		padding:.1rem
		.item-title
			line-height:.48rem
			font-size:.32rem
			ellipsis()
		.item-desc
			line-height.34rem
			font-size:.28rem
			color:#ccc
			ellipsis()
</style>

