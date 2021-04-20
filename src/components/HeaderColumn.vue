<template>
    <div id="header-column"> 
      <p>{{title}}</p>
    </div>
</template>

<script>

export default {
  name: 'HeaderColumn',
  data () {
    return {
      number: 5,
    };
  },
  props: ["title"],
}
</script>

<style>
#header-column {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: blueviolet;
  margin: 0px 4px;
  display: inline-block;

}
</style>
