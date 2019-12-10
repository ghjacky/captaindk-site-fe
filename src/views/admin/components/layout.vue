<template>
    <div class="admin_layout">
      <el-container>
        <el-aside width="200px">
          <slot name="admin_sidebar"></slot>
        </el-aside>
        <el-main>
          <slot name="admin_content"></slot>
        </el-main>
      </el-container>
    </div>
</template>

<script>
  export default {
    name: 'AdminLayout'
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
