<template>
  <div id="app">
    aho
    <Header/>
    <div class="Centre">
      width＋marginで180%
      <div class ="Eighty">Eighty</div>
    </div>

    <Sample/>
    <process-flow/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import ProcessFlow from '@/components/ProcessFlow.vue';
import Sample from '@/components/Sample.vue';

export default {
  name: 'App', //Javaでいうクラス名
  components: {
    Header,ProcessFlow,Sample
  },

}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  /* background-color: aqua; */
}
.Centre{
  text-align: center;
}
.Eighty{
  width:100%;
  margin-left: 80%;
  color: black;
  background-color: blue;
}
</style>
