<template>
<div>
	<div class="banner" @click="handleBannerClick">
		<img class="banner-img" :src="bannerImg"/>
		<div class="banner-info">
			<div class="banner-title">{{this.sightName}}</div>
			<div class="banner-number">
				<span class="iconfont banner-icon">&#xe67a;</span>
				{{this.gallaryImgs.length}}
			</div>
		</div>
	</div>
	<!-- 加上渐隐渐现效果common-gallery相当于插槽 -->
	<fade-animation>
		<common-gallery 
			:imgs = 'gallaryImgs' 
			v-show="showGallery" 
			@closeGallery="handleCloseGallery"
		></common-gallery>
	</fade-animation>
</div>

</template>
<script>
import CommonGallery from 'common/gallery/Gallery'
import FadeAnimation from 'common/fade/FadeAnimation'
export default{
	name:'DetailBanner',
	props : {
		sightName: String,
		bannerImg: String,
		gallaryImgs: Array
	},
	data () {
		return {
			showGallery: false
		}
	},
	components: {
		CommonGallery,
		FadeAnimation
	},
	methods: {
		handleBannerClick() {
			this.showGallery = true
		},
		handleCloseGallery() {
			this.showGallery = false
		}
	}
}

</script>
<style lang="stylus" scoped>
.banner
	overflow:hidden
	heigth:0
	padding-bottom:0%
	position:relative
	.banner-img
		width:100%
	.banner-info
		display:flex
		color:#fff
		position:absolute
		left:0
		right:0
		bottom:0
		line-height:.6rem
		background:#2B2B39
		opacity:.5
		.banner-title
			flex:1
			padding-left:.1rem
			font-size:.32rem
		.banner-number
			padding: 0 .4rem
			border-radius:.2rem
			background: rgba(0, 0, 0, .8)
			.banner-icon
				font-size:.18rem
				margin-top:.4rem
			.iconfont
				font-size:.24rem

</style>
