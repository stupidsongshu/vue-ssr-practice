<template>
  <div id="app">
    <p>NODE_ENV: {{nodeEnv}}</p>
    <p>VUE_ENV: {{vueEnv}}</p>
    <img src="./assets/logo.png">
    <router-link to="/">Home</router-link>
    <router-link :to="{path: '/about', query: { id: 123 }}">About</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  // created() {
  //   console.log(process.env)
  // },
  computed: {
    nodeEnv() {
      return process.env.NODE_ENV
    },
    vueEnv() {
      return process.env.VUE_ENV
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
