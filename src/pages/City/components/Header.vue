<template>
<div class="header">
	城市选择
	<router-link to="/">
	<div class="iconfont header-back">&#xe604;</div>
	</router-link>
</div>
</template>

<script>
export default{
  name: 'CityHeader'
}

</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.header
	position:relative
	height:.54rem
	line-height:.54rem
	overflow:hidden
	text-align:center
	color:#fff
	background: $bgcolor
	font-size: .32rem
	.header-back
		position:absolute
		top:0
		left:0
		width:.6rem
		text-align:center
		font-size:.4rem
		color:#fff
</style>
