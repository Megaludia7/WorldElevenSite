<template>
  <div id="GoUserDetail">
    <h1>UserDetailへの遷移</h1>
    <input type="number" name="UserId"/>
    <button v-on:click="GetUserId()">ahoaho</button>
    <button v-on:click="GoToUserDetail()">User1へ</button>
  </div>
</template>

<script>

export default {
  name: 'GoUserDetail',
  components: {
  },
  data : function() {
      return {
        users: [
          {
            id: 1,
            name: 'ahoaho',
          }
        ],
        UserId : 2
      }
    },
  methods : {
    GoToUserDetail: function() {
      var paramsId = this.UserId
      if (paramsId != 1) {
        alert("number is wrong.")
        return false
      }
      this.$router.push(
        {
          name: 'user-detail',
          params: {id: paramsId}
        }
      )
    },
    GetUserId: function() {
      this.UserId = 1
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
#GoUserDetail{
  width:100%;
  margin-right: 80%;
  text-align: right;
  background-color: gold;

}
.Eighty{
  color: black;
}
</style>
