import Vue from 'vue'
import MpvueRouterPatch from 'mpvue-router-patch'
import WXP from 'minapp-api-promise'
import api from '@/api/allApi'
import store from '@/store'
import App from '@/App'
import utils from '@/utils'
import '../static/colorui/animation.wxss'
import '../static/colorui/icon.wxss'
import '../static/colorui/main.wxss'
import '../static/iconfont.css'
Vue.use(MpvueRouterPatch)
Vue.prototype.$wx = WXP
Vue.prototype.$api = api;
Vue.prototype.utils = utils
console.log(api);
Vue.config.productionTip = false
new Vue({
  mpType: 'app',
  store,
  ...App
}).$mount()
getApp().globalData = { uid: '123456' }
Vue.prototype.globalData = getApp().globalData
getApp().onLaunch();