<template>
  <div id="home">
  <h1>Login画面</h1>
  <p> {{userId}}</p>
  <p>stateのloginにstoreでアクセス{{ loginCheck }} </p>
  <button @click="login">Login</button>
  <p>storeでアクセスすると{{ count }} </p>
  <p>今度はgettersでアクセスすると{{ doubleCount }} </p>
  <button color="#B2EBF2" @click="changeUserId">changeUserId</button>
  <h3> dispatch as follows </h3>
  <button  @click="increment">plus 2</button>
  <br/>
  <button @click="decrement">minus 1 </button>
  </div>
</template>

<script>

export default {
  name: 'Login', //Javaでいうクラス名
  data: function() {
    return {
      userId: "testuser",
      password: "ahoaho"
    }
  },
  computed : {
    loginCheck() {
      return this.$store.getters.loginCheck;
    },
    count() {
      return this.$store.state.count;
    },
    doubleCount() {
      return this.$store.getters.doubleCount;
    }  
  },
  methods: {
    changeUserId() {
      this.userId = 'ahouser';
    },
    login() {
      this.$store.dispatch("login",{
        userId: this.userId,
        password: this.password
      });
    },
    increment() {
      this.$store.commit('increment',2);
    },
    decrement() {
      this.$store.dispatch("decrement",1);
    }
  },

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
