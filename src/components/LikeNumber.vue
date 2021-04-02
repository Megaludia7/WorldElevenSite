<template>
    <div id="likenumber"> 
      いいね({{number}})
      <button @click="increment">1足せ</button>
      いいね({{number}})
      <button @click="increment">1足せ</button>
    </div>
</template>

<script>

export default {
  name: 'LikeNumber',
  data() {
    return {
      number: 5,
    };
  },
  methods: {
    increment() {
      this.number += 1
    }
  },
}
</script>

<style>
#likenumber {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: red;
  margin-top: 60px;
}
</style>
