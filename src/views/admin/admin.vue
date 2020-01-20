<template>
  <admin-layout>
    <template slot="admin_sidebar">
      <a-sidebar :menu-list="adminRouter"></a-sidebar>
    </template>
    <template slot="admin_content">
      <a-content></a-content>
    </template>
  </admin-layout>
</template>

<script>
  import AdminLayout from './components/layout'
  import ASidebar from './components/sidebar/'
  import AContent from './components/content/'
  import { adminRouter } from '@/router/admin'

  export default {
    components: { AdminLayout, ASidebar, AContent },
    data() {
      return {
        adminRouter: adminRouter.children
      }
    }
  }
</script>

<style scoped lang="scss"></style>
