<template>
  <div class="res_tvs">
    <div slot="content">
      <h1>TVs Page</h1>
    </div>
  </div>
</template>

<script>
  import { setNavBarActiveIndex } from '@/utils/cookie'
  import { navIndexMap } from '@/variables'

  export default {
    name: 'Res_tvs',
    created() {
      setNavBarActiveIndex(navIndexMap[this.$options.name])
    }
  }
</script>

<style scoped>

</style>
