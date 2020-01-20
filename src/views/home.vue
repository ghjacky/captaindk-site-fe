<template>
  <div class="home">
    <layout>
      <div slot="content">
        <h1>Home Page</h1>
      </div>
    </layout>
  </div>
</template>

<script>
  import Layout from '@/components/Layout'
  import { setNavBarActiveIndex } from '@/utils/cookie'
  import { navIndexMap } from '@/router/nav'

  export default {
    name: 'Home',
    components: { Layout },
    data() {
      return {
      }
    },
    created() {
      setNavBarActiveIndex(navIndexMap[this.$options.name])
    },
    methods: {
    }
  }
</script>

<style scoped>
</style>
