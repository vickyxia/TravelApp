<template>
<!-- 推荐游玩组件 -->
<div class="icons">
 <swiper >
	<swiper-slide  :options="swiperOption"  v-for="(page, index) of pages" :key="index">
		<div
		class="icon"
		v-for = "item of page"
		:key="item.id"
		>
			<div class="icon-img">
			<img class="icon-content" :src="item.imgUrl" />
			</div>
		<p class="icon-desc">{{item.desc}}</p>
		</div>
	</swiper-slide>
</swiper>
</div>
</template>

<script>
/* eslint-disable */
// eslint-disable-next-line
export default({
  name:'HomeIcon',
  props : {
    iconList:Array
  },
  data () {
    return {
         // 不自动滚动
        swiperOption: {
           autoplay: false
      }
    }
  },
  computed : {
    pages () {
        const pages = [];
        this.iconList.forEach(( item, index ) => {
        const page = Math.floor(index / 8)
          if(!pages[page] ){
               pages[page] = []
           }
           pages[page].push(item)
           })
           return pages
    }
  }
})

</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.icons
	overflow:hidden
	height:0
	padding-bottom:50%
	.icon
		position:relative
		height:0
		width:25%
		padding-bottom:25%
		overflow:hidden
		float:left
		.icon-img
			position:absolute
			box-sizing:border-box
			left:.0
			right:0
			top:0
			bottom:.45rem
			margin: 0 auto
			.icon-content
				height:90%
				padding-left:.45rem
		.icon-desc
			text-align:center
			display:inline-block
			position:absolute
			left:0
			right:0
			bottom:0
			height:.3rem
			line-height:.24rem
			color:#ccc
			font-size: .24rem
			ellipsis()

</style>
