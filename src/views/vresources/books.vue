<template>
  <div class="res_books">
    <div slot="content">
      <h1>Books Page</h1>
    </div>
  </div>
</template>

<script>
  import { setNavBarActiveIndex } from '@/utils/cookie'
  import { navIndexMap } from '@/router/nav'

  export default {
    name: 'Res_books',
    created() {
      setNavBarActiveIndex(navIndexMap[this.$options.name])
    }
  }
</script>

<style scoped>

</style>
