import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)

const state = {
  loading: false,
    UserList: [111,222,333], //用户列表
    themeObj: 0,//主题
    aboutmeObj:'',//关于我的信息
    host:"http://"+window.location.host+"/port/",//接口路径
    keywords:'',//关键词
    errorImg: 'this.onerror=null;this.src="' + require('@/assets/img/tou.jpg') +'"'

}

export default new Vuex.Store({
  state
})
