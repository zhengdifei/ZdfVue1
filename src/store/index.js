/**
 * time : 2017/3/7 0007.
 * author : zhengdifei
 * desc : vuxe引导页面
 * modules : {
 *      header : 头部状态
 *      loading : 加载状态
 *      building : 建筑物模块状态
 * }
 */
import Vue from 'vue'
import Vuex from 'vuex'
import headerStore from 'components/style3/header.store'

Vue.use(Vuex)

export default new Vuex.Store({
    modules : {
        header : headerStore
    }
})