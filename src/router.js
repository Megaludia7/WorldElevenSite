import Vue from 'vue'
import Router from 'vue-router'
import MainMenu from './views/MainMenu.vue'
import EasyCalc from './views/EasyCalc.vue'
import Home from './views/Home.vue'
import UserDetail from './views/UserDetail.vue'
import GoUserDetail from './views/GoUserDetail.vue'
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
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/GoUserDetail',
      name: 'GoUserDetail',
      component: GoUserDetail
    },
    {
      path: '/Users/:id',
      name: 'user-detail',
      component: UserDetail 
    }
  ]
})