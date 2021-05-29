<template>
  <div id="EasyCalc">
    <h1>aho </h1>
    <div class="subcss">
      <button v-on:click="PlusNumber(2)">2個たす</button>
      <button v-on:click="MinusNumber">１個引く</button>
      <p> {{number}} </p>
    </div>
    <p v-on:mousemove="CheckEvent(2, $event)">イベントに関する全ての情報が入っているオブジェクト(今回はmousemoveでイベントを起こす.(clickの場合はclickでイベントが発火する)
      <span v-on:mousemove.stop>ここでは反応しない</span>
    </p>
    <p>{{x}} and {{fixedVal}}</p>
  </div>
</template>

<script>

export default {
  name: 'EasyCalc', //Javaでいうクラス名
  components: {
  },
  data : function() {
      return {
        number : 1,
        x: 0
      }
    },
  methods : {
    PlusNumber: function(times) {
      this.number += 1*times
    },
    MinusNumber:function() {
      this.number -= 1
    },
    CheckEvent: function(inputNumber, event) {
      // console.log(event)
      this.x = event.clientX;
      this.fixedVal = inputNumber;
    }
  }
}
</script>


<style>
.subcss {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  margin-right: 50%;
  color: green;
  margin-top: 60px;
  background-color: aqua;
}
#EasyCalc{
  width:100%;
  margin-right: 80%;
  text-align: center;
  background-color: whitesmoke;

}
.Eighty{
  color: black;
}
</style>
