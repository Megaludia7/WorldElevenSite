<template>
  <div id="EasyCalc">
    <h1>aho </h1>
    <button v-on:click="PlusNumber">１個たす</button>
    <button v-on:click="MinusNumber">１個引く</button>
    <p> {{number}} </p>
  </div>
</template>

<script>

export default {
  name: 'EasyCalc', //Javaでいうクラス名
  components: {
  },
  data : function() {
      return {
        number : 1
      }
    },
  methods : {
    PlusNumber: function() {
      this.number += 1
    },
    MinusNumber:function() {
      this.number -= 1
    }
  }
}
</script>


<style>
#EasyCalc {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  margin-right: 50%;
  color: green;
  margin-top: 60px;
  background-color: aqua;
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
