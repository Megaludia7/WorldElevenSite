<template>
  <div id="app">
  <Header/>
    <h1> startpage </h1>
    <LikeNumber/>
    <LikeNumber/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import LikeNumber from '@/components/LikeNumber.vue'

export default {
  name: 'App', //Javaでいうクラス名
  // data: {
  //   message: "aho",
  // },
  components: {
    Header,LikeNumber,
  },

}
</script>

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
