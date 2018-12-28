import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	strict:true,
	state:{
		select:"show"
	},
	getters:{
		getSl(state){
			return state.select
		}
	},
	mutations:{
		setSl(state,d){
			state.select = d;
		}
	}
})