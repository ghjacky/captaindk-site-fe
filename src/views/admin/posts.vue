<template>
  <admin-layout>
    <template slot="admin_sidebar">
      <el-menu default-active="2" class="admin_sidebar" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">文章管理</span>
        </el-menu-item>
      </el-menu>
    </template>
    <template slot="admin_content">
      <div class="admin_content">

      </div>
    </template>
  </admin-layout>
</template>

<script>
  import AdminLayout from './components/layout'

  export default {
    name: 'posts',
    components: { AdminLayout },
    data() {
      return {
        posts: [
          {
            id: 'uuid01',
            title: '',
            summary: '',
            tags: [
              {
                name: 'tag1',
                id: 1
              },
              {
                name: 'tag2',
                id: 2
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .admin_sidebar {
    width: 100%;
    height: 100%;
  }
</style>
