<template>
<div class="list"  ref="wrapper">
	<div>
		<div class="area">
			<div class="title border-topbottom" >当前城市</div>
			<div class="button-list">
				<div class='button-warpper'>
					<div class="button">{{this.$store.state.city}}</div>
				</div>
			</div>
		</div>
		<div class="area">
			<div class="title border-topbottom">热门城市</div>
			<div class="button-list" >
				<div 
					class='button-warpper'
					v-for="item of hotCities" 
					:key="item.id"
					@click="handleCityClick(item.name)"
				>
					<div class="button">{{item.name}}</div>
				</div>
				
			</div>
		</div>

		<div class="area" 
			v-for="(item,key) of cities" 
			:key = "key"
			:ref = "key"
			>
			<div class="title border-topbottom" >{{key}}</div>
			<div class="item-list" >
				<div 
					class="item border-bottom" 
					v-for="innerItem of item" 
					:key="innerItem.id"
					@click="handleCityClick(innerItem.name)"
				>{{innerItem.name}}</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
 /* eslint-disable */
 // eslint-disable-next-line
import Bscroll from 'better-scroll'
export default{
  name: 'CityList',
  props :{
      cities: Object,
      hotCities: Array,
      letter: String
  },
  watch:{
  		letter() {
  			if(this.letter){
  				const ele = this.$refs[this.letter][0]
  				this.scroll.scrollToElement(ele)
  			}
  		}
  },
  methods: {
    handleCityClick (city) {
    	// 1.组件派发给action(sore/index.js) 
    	// --this.$store.dispatch
      this.$store.dispatch('changeCity',city)
      this.$router.push('/')
    }
    
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {
    	click: true
    })
  }
}

</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
	.border-topbottom
		&:before
			border-color:#ccc
		&:after
			border-color:#ccc
	.border-bottom
		&:before
			border-color:#ccc
	.list
		position:absolute
		left:0
		top:1.26rem
		right:0
		bottom:0
		overflow:hidden
		.title
			height:.44rem
			line-height:.44rem
			background:#eee
			padding-left:.2rem
			font-size:.26rem
			color:#666
		.button-list
			overflow:hidden
			padding: .1rem .6rem .1rem .1rem
			.button-warpper
				width:33.3%
				float:left
				.button
					margin:.1rem
					paddidng:.2rem 0
					text-align:center
					border: .02rem solid #ccc
					border-radius: .06rem
		.item-list
			.item
				padding:.1rem .1rem
				margin:.1rem

</style>
