<template>
<div>
	<div class="title">热销推荐</div>
	<ul>
		<router-link
			tag='li'
			:to="'/detail/'+ item.id"
			class="item .border-bottom" 
			v-for="item in recommendList " 
			:key='item.id'
		 >
			<img class="item-img"  :src="item.imgUrl" >
			<div class="item-info">
				<p class="item-title">{{item.title}}</p>
				<p class="item-desc">{{item.desc}}</p>
				<button class="item-button">查看详情</button>
			</div>
		</router-link>
	</ul>
</div>
</template>

<script>
/* eslint-disable */
// eslint-disable-next-line
export default{
  name:'HomeRecommend',
  props : {
  	recommendList: Array
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
.item
	display:flex
	height:1.9rem
	overflow:hidden
	.item-img
		height:1.7rem
		width:1.7rem
		padding:.1rem
	.item-info
		flex:1
		padding:.1rem
		min-width:0
		.item-title
			line-height:.48rem
			font-size:.32rem
			ellipsis()
		.item-desc
			line-height.34rem
			font-size:.28rem
			color:#ccc
		.item-button
			line-height:.4rem
			background:#ff9300
			border-radius:.2rem
			color:#fff
			margin-top:.1rem
			padding: 0 .2rem
</style>

