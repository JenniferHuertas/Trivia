<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Login</router-link> |
      <router-link to="/createAccount">Create Account</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('bindpreguntasStarWars');
  },
};

</script>

<style>
@import url("../node_modules/bootstrap/dist/css/bootstrap.css");
</style>
