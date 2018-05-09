<template>
<div class="container" @click="handelGalleryClick">
	<div class="wrapper">
		<swiper :options="swiperOption">
			<swiper-slide
				v-for="(item,index ) in imgs" 
				:key="index">
				<img class="gallery-img" :src="item"/>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		
	</div>
</div>

</template>

<script>
export default{
	name:"CommonGallery",
	props: {
		imgs:{
			type: Array,
			default () {
				return []
			}
		} 
	},
	data () {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				paginationType:'fraction',
			//  监听dom变化,自动自我刷新,解决宽度计算问题
				observeParents: true,
				observer:true
			}
		}
	},
	methods:{
		handelGalleryClick() {
			this.$emit("closeGallery")
		}
	}
}

</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
	overflow:inherit
.container
	position:fixed
	left:0
	right:0
	top:0
	bottom:0
	background:#000
	z-index:99
	display:flex
	justify-content:center
	flex-direction: column
	.wrapper
		padding-bottom:100%
		height:0
		width:100%
		.gallery-img
			width:100%
		.swiper-pagination
			color:#fff
			bottom:-1rem





</style>
