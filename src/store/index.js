/*
* @Author: vicky
* @Date:   2018-05-06 16:30:44
* @Last Modified by:   vicky
* @Last Modified time: 2018-05-07 10:28:01
* @vuex--store
*/
// vuex使用按照官网的图
// component-> action->mutations->state
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
// 使用插件vuex
Vue.use(Vuex)

export default new Vuex.Store({
	state:state , // state放公用数据
	actions: actions, // 异步操作或者批量处理同步操作(简单情况可跳过action直接到mutations)
	mutations: mutations
})
