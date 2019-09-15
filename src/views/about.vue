<template>
  <div>
    <h1>关于我们</h1>
    <p>{{item}}</p>
  </div>
</template>

<script>
export default {
  asyncData({ store, route }) {
    return store.dispatch('fetchItem', route.query.id)
  },
  computed: {
    item () {
      // return this.$store.state.items[this.$route.query.id]
      return this.$store.state.items
    }
  }
}
</script>

<style>

</style>
