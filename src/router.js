import Vue from 'vue'
import Router from 'vue-router'
import MainMenu from './views/MainMenu.vue'
import EasyCalc from './views/EasyCalc.vue'
//
// 他のコンポーネントは省略
//

Vue.use(Router)

export default new Router({
  // デフォルトの挙動では URL に `#` が含まれる.
  // URL から hash を取り除くには `mode:history` を指定する
  mode: 'history',                  
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'mainmenu',
      component: MainMenu
    },
    //
    // 省略
    //
    {
      path: '/EasyCalc',
      name: 'EasyCalc',
      component: EasyCalc 
    }
  ]
})