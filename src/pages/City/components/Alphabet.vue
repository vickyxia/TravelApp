<template>
<div class="alpha-list">
	<ul 
	v-for="(item,key) of list"
	@click = "handleLetterClick"
	@touchstart.prevent = "handleTouchStart"
	@touchmove = "handleTouchMove"
	@touchend = "handleTouchEnd"
	:ref = "key"
	>
		<li>{{key}}</li>
	</ul>
</div>
</template>

<script>
export default{
  name: 'CityAlphabet',
  props: {
  	list: Object
  },
  data () {
  	return {
  		touchStatus: false,
  		startY: 0,
  		timer: null
  	}
  },
  updated() {
  	//  为了提高性能
       this.startY = this.$refs['A'][0].offsetTop 
  },
  computed: {
  	letters() {
  		// 得到['A','B','C']数组
  		const letters = []
  		for(let i in this.list){
  			letters.push(i)
  		}
  		return letters
  	}
  },
  methods: {
  	handleLetterClick (e) {
  		this.$emit('change', e.target.innerText)
  	},
  	// 根据手指触摸计算绑定的事件 --
  	// touchstart,touchmove,touchend 是H5事件
  	handleTouchStart () {
       this.touchStatus = true
  	},
  	// 在上面滑动
  	handleTouchMove (e) {
  		if(this.touchStatus){
  			// 加timer是--节流的方法提高性能,不是随时监听滚触摸事件,而是设置定时器
  			if(this.timer){
  				clearTimeout(this.timer)
  			}
  			this.timer = setTimeout( () => {
  				const touchY = e.touches[0].clientY - 69
				const index = Math.floor((touchY - this.startY) /20)
				if(index >= 0 && index < this.letters.length){
					this.$emit('change', this.letters[index])
				}
			}, 16)
  		}
  	},
  	handleTouchEnd() {
       this.touchStatus = false
  	}

  }
}

</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.alpha-list
	position:absolute
	right:0
	top:1.26rem
	bottom:0
	width:.5rem
	display:flex
	flex-direction:column
	justify-content:center
	line-height:.42rem
	text-align:center
	color:#18add5

</style>