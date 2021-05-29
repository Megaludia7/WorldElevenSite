<template>
  <div id="UserDetail">
    <h1>UserDetailのページ</h1>
        <tr
          v-for="(value, name) in users[$route.params.id - 1]"
          :key="name">
          <td>
            {{ name }}
          </td>
          <td>
            {{ value }}
          </td>
        </tr>  </div>
</template>

<script>

export default {
  name: 'UserDetail',
  components: {
  },
  data : function() {
      return {
        users: [
          {
            id: 1,
            name: 'ahoaho',
          }
        ]
      }
    },
  methods : {
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
#UserDetail{
  width:100%;
  margin-right: 80%;
  text-align: center;
  background-color: whitesmoke;

}
.Eighty{
  color: black;
}
</style>
