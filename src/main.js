import Vue from 'vue'
import App from './App'
import store from './store'

import '@/styles/index.scss'
import '../static/weui.css'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/index/index',
      'pages/publish-post/publish-post',
      'pages/login/login',
      'pages/register/register'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '有咩',
      navigationBarTextStyle: 'black'
    }
    // tabBar: {
    //   list: [{
    //     pagePath: 'pages/index/index',
    //     text: '首页'
    //   }, {
    //     pagePath: 'pages/index/index',
    //     text: '我的'
    //   }]
    // }
  }
}
