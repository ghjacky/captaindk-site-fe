<template>
  <transition name="fade-transform" mode="out-in">
    <router-view :key="routeKey"></router-view>
  </transition>
</template>

<script>
  export default {
    computed: {
      routeKey: {
        get: function() {
          return this.$route.path
        }
      }
    }
  }
</script>

<style scoped>

</style>
