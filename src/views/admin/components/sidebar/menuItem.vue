<template>
  <div class="sidebar_menu">
    <template v-for="(menu) in MenuList">
      <template v-if="!hasChild(menu) && hasParent()">
        <el-menu-item v-if="menu.path !== undefined && menu.path !== ''" :index="menu.index" @click="handleClickMenuItem(menu)" :key="menu.index">
          <i :class="menu.icon"></i>
          <span>{{ menu.meta.title }}</span>
        </el-menu-item>
        <el-menu-item v-else :index="menu.index" :key="menu.index">
          <i :class="menu.icon"></i>
          <span>{{ menu.meta.title }}</span>
        </el-menu-item>
      </template>
      <el-submenu v-else-if="hasChild(menu) && !hasParent()" :index="menu.index" :key="menu.index">
        <template slot="title">
          <i :class="menu.icon"></i>
          <span>{{ menu.meta.title }}</span>
        </template>
        <menu-item :parent-index="menu.index" :menu-list="menu.children"></menu-item>
      </el-submenu>
    </template>
  </div>
</template>

<script>
  import { setAdminSidebarActiveIndex } from '@/utils/cookie'

  export default {
    name: 'menuItem',
    props: {
      ParentIndex: {
        type: String,
        default: ''
      },
      MenuList: {
        type: Array,
        default: () => { return [] }
      }
    },
    methods: {
      handleClickMenuItem(menu) {
        setAdminSidebarActiveIndex(menu.index)
        this.$router.push(menu.path)
      },
      hasChild(item) {
        return item.children !== undefined && item.children.length > 0
      },
      hasParent() {
        return this.ParentIndex !== undefined && this.ParentIndex !== ''
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/admin.scss";
</style>
