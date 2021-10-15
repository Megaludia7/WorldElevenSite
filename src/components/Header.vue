<template>
    <div id="header"> 
      <h2>this is aho header.</h2> 
      <HeaderColumn title="データ受け渡し"/>
      <HeaderColumn title="横並び"/>
    </div>
</template>

<script>
import HeaderColumn from '@/components/HeaderColumn.vue'

export default {
  name: 'Header',
  components:{
    HeaderColumn,
  }
}
</script>

<style>
#header {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: red;
  margin: 20px 80px 20px 80px;
  padding: 12px 0px 12px 0px;
}
</style>
