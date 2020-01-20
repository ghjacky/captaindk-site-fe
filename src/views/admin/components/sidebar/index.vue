<template>
  <el-menu default-active="1" class="admin_sidebar" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <menu-item :menu-list="menuList"></menu-item>
  </el-menu>
</template>

<script>
  import MenuItem from './menuItem'

  export default {
    components: {
      MenuItem
    },
    props: {
      // 仅支持两层
      menuList: {
        type: Array,
        default: () => { return [] }
      }
    },
    data() {
      return {}
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/admin.scss";
</style>
