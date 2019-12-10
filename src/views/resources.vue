<template>
  <div class="resources">
    <layout>
      <div slot="content">
        <router-view></router-view>
      </div>
    </layout>
  </div>
</template>

<script>
  import Layout from '@/components/Layout'

  export default {
    name: 'Resources',
    components: { Layout }
  }
</script>

<style scoped>

</style>
