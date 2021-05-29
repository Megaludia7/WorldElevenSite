<template>
  <div id="app">
    <div 
      id="nav" 
      class="tab-area-base">
      <ul class="tab-menu-base">
        <!-- `router.js` で定義したルーティングルールとの紐付けを行っている -->
        <li><router-link to="/">MainMenu</router-link></li>
        <!-- *** -->
        <!-- 省略 -->
        <!-- *** -->
        <li><router-link to="/EasyCalc">計算の練習</router-link></li>
        <li><router-link to="/Home">Home画面</router-link></li>
        <li><router-link to="/Users/1">User画面</router-link></li>
        <li><router-link to="/GoUserDetail">User以降画面へ</router-link></li>
      </ul>
    </div>

    <!-- routerのJavaScriptを適応させる. 動的に/#/や/#/EasyCalcになる -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
