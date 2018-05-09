<template>
<div>
<!-- <home-header :city = 'city'></home-header> -->
<home-header ></home-header>
<home-swiper :list = "swiperList"></home-swiper>
<home-icon :iconList = "iconList"></home-icon>
<home-recommend :recommendList = "recommendList"></home-recommend>
<home-weekend :weekendList = "weekendList"></home-weekend>
</div>

</template>

<script>
/* eslint-disable */
// eslint-disable-next-line
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/Icon'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import {mapState} from 'vuex'

export default{
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return{
        // city:''
        swiperList: [],
        iconList: [],
        recommendList:[],
        weekendList: [],
        lastCity: ''
    }
  },
  computed: {
    // vuex的city数据
        ...mapState(['city'])
  },
  methods : {
    getHomeInfo () {
      axios.get('/api/index.json? city=' + this.city)
      //axios.get('/static/mock/index.json')
        .then(this.getHomeInfoSucc)
  },
  getHomeInfoSucc (res) {
    res = res.data;
    if(res.ret && res.data){
        const data = res.data
        // this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
  }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
      if(this.lastCity !== this.city){
        this.lastCity = this.city
        this.getHomeInfo()
      }
  }
}

</script>

<style>

</style>
