// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/index.js'
import Axios from 'axios'
import VueAMap from 'vue-amap'
let xio  = Axios.create({
  headers: {"x-requested-with":"XMLHttpRequest",'Content-Type':'application/x-www-form-urlencoded'},

})
Vue.prototype.axios = xio;
Vue.config.productionTip = false
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
	key:'19a69ab33737fe77ee057c0cf0263df0',
	 plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
