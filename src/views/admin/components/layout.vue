<template>
  <div class="admin_layout">
    <el-container>
      <el-aside width="200px">
        <a-sidebar :menu-list="adminRouter"></a-sidebar>
      </el-aside>
      <el-main>
        <transition name="fade-transform" mode="out-in">
          <router-view />
        </transition>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import ASidebar from '@/views/admin/components/sidebar'
  import { adminRouter } from '@/router/admin'
  import AdminLayout from '@/views/admin/components/layout'
  import AContent from '@/views/admin/components/content/'

  export default {
    name: 'AdminLayout',
    components: {
      ASidebar,
      AdminLayout,
      AContent
    },
    computed: {
      routeKey: {
        get: function() {
          return this.$route.path
        }
      }
    },
    data() {
      return {
        adminRouter: adminRouter.children
      }
    }
  }
</script>

<style scoped lang="scss">
  .admin_layout {
    height: 100%;

    .el-container {
      height: 100%;
    }
  }
</style>
