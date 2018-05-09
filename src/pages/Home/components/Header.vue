<template>
<div class="header">
	<div class="header-left">
		<div class="iconfont">&#xe604;</div>
	</div>
	<div class = "header-input">
		<span class="iconfont">&#xe633;</span>
		输入城市/景点/游玩主题
	</div>
	<router-link to="/city">
		<div class="header-right" >
			<!-- 从vuex的state共享传递的数据 -->
		<!-- {{this.$store.state.city}} -->
		{{this.city}}
		<span class="iconfont bottom-icon">&#xe668;</span>
		</div>
		</router-link>
</div>
</template>

<script>
/* eslint-disable */
// eslint-disable-next-line
import {mapState} from 'vuex'
export default{
  name: 'HomeHeader',
  computed:{
        ...mapState(['city'])
  }
}

</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
	display: flex
	line-height: .43rem
	background: $bgcolor
	color: #fff
	font-size: 12px
	text-align:center
	.header-left
		float: left
		width: .64rem
		margin-top:.06rem
	.header-input
		flex: 1
		background:#fff
		border-radius:.1rem
		margin-top:.06rem
		margin-bottom: .06rem
		margin-left:.02rem
		color: #ccc
	.header-right
		text-align:center
		loat: right
		min-width:1.04rem
		padding:0 .1rem
		margin-top:.06rem
		color: #fff
		.bottom-icon
			font-size:.24rem
			margin-left: -.03rem
</style>
