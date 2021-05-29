<template>
  <div id="home">
  <h1>ホーム画面</h1>
  <Header/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'Home', //Javaでいうクラス名
  components: {
    Header
  }
}
</script>

<style>
#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
