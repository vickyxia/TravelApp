<template>
<div>
	<div class="search">
		<input v-model="keyword" class="search-input" type="text"  placeholder="请输入城市名称或拼音"/>
	</div>
	<div class="search-content" ref="bswrapper" v-show="keyword">
		<ul>
			<li class="search-item border-bottom" 
          v-for="item in list"
          @click="handleCityClick(item)"
        >{{item}}</li>
			<li class="search-item" v-show="showOrNot">没有找到匹配城市</li>
		</ul>
	</div>
</div>

</template>

<script>
import Bscroll from "better-scroll"
export default {
  name: 'CitySearch',
  props: {
  	cities: Object
  },
  data () {
      return {
      	keyword: '',
      	list: [],
      	// timer是用来节流--定时器
      	timer: null 
      }
  },
  computed: {
  	showOrNot () {
  		return !this.list.length
  	}
  },
  watch: {
  	// 监听keyword变化
  	keyword() {
  		// 节流--定时器100ms
      if(this.timer){
      	clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
            const result  = []
            // 遍历citied对象内容,找到对应项
            for(let key in this.cities){
            	this.cities[key].forEach(item => {
            		if(item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1 ){
            			result.push(item.name)
            		}
            	})
            }
            this.list = result
      }, 100)

  	}
  },
  methods: {
    handleCityClick (city) {
        this.$store.commit('changeCity', city)  //跳过action这步,直接commit给mutations
        this.$router.push('/')     // 跳回主页
    }
  },
  mounted() {
  	// 使用better-scroll 放在mounted里面,创建实例,传入dom
  	this.scroll = new Bscroll(this.$refs.bswrapper,{
      click: true
    })
  }
}

</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
	height:.72rem
	background: $bgcolor
	padding: 0 .1rem
	.search-input
		box-sizing:border-box
		padding: 0 .1rem
		width: 100%
		height:.62rem
		line-height:.62rem
		text-align:center
		border-radius:.1rem
		color:#666
.search-content
	z-index:20
	overflow:hidden
	position:absolute
	left:0
	right:0
	bottom:0
	top:1.28rem
	background:#eee
	.search-item
		line-height:.44rem
		padding:.1rem 0 .1rem .2rem
		color:#666
</style>
