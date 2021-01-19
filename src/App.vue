<template>
  <div id="app">
    <div id="nav">
      <v-btn @click="$router.push({name: 'Home'})">Home</v-btn>
      <v-btn @click="$router.push({name: 'About'})">about</v-btn>
      <v-btn @click="$router.push({ name: 'poyo'})">poyo</v-btn>
      <v-btn @click="$router.push({ name: 'mon'})">MON</v-btn>
      <v-btn @click="$router.push({ name: 'taka'})">taka</v-btn>
    </div>
    <router-view/>
  </div>
</template>


<script>
export default {
  methods: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
