<template>
  <div class="blog">
    <layout>
      <template slot="left_sidebar_01">
        <bsidebar></bsidebar>
      </template>
      <template slot="content" v-if="route.params.id === undefined">
        <posts></posts>
      </template>
      <template slot="content" v-else>
        <post></post>
      </template>
    </layout>
  </div>

</template>

<script>
  import Layout from '@/components/Layout'
  import bsidebar from '@/views/vblog/components/bsidebar'
  import { setNavBarActiveIndex } from '@/utils/cookie'
  import { navIndexMap } from '@/router/nav'
  import posts from '@/views/vblog/vlog'
  import post from '@/views/vblog/post'

  export default {
    name: 'Blog',
    components: { Layout, bsidebar, posts, post },
    created() {
      setNavBarActiveIndex(navIndexMap[this.$options.name])
    },
    data() {
      return {
        route: this.$route
      }
    }
  }
</script>

<style scoped>

</style>
