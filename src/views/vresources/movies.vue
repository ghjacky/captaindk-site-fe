<template>
  <div class="res_movies">
      <div slot="content">
        <h1>Movies Page</h1>
      </div>
  </div>
</template>

<script>
  import { setNavBarActiveIndex } from '@/utils/cookie'
  import { navIndexMap } from '@/router/nav'

  export default {
    name: 'Res_movies',
    created() {
      setNavBarActiveIndex(navIndexMap[this.$options.name])
    }
  }
</script>

<style scoped>

</style>
