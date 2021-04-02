<template>
    <div id="header"> 
      this is aho header. 
      <HeaderColumn name="aho"/>
      <HeaderColumn name="ahぼけo"/>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
