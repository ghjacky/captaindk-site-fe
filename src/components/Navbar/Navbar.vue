<template>
  <el-row direction="horizontal" class="Navbar">
    <!--    <el-aside width="250px">-->
    <!--      {{ siteTitle }}-->
    <!--    </el-aside>-->
    <el-col :span="6" class="nav_logo">

    </el-col>
    <el-col :span="12" class="nav_main">
      <el-menu :default-active="activeIndex()" :router="true" mode="horizontal" background-color="#545c64" @select="handleSelectNavItem"
               text-color="#fff" active-text-color="#ffd04b" style="display: inline-block">
        <template v-for="navItem in navRoutesList">
          <el-submenu v-if="hasChildren(navItem)" :key="navItem.index" :index="navItem.index">
            <template slot="title">{{ navItem.meta.title }}</template>
            <el-menu-item v-for="subNavItem in navItem.children" :key="subNavItem.index" :index="subNavItem.index" :route="{path: subNavItem.path}">
              {{ subNavItem.meta.title }}
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-else :key="navItem.index" :index="navItem.index" :route="{path: navItem.path}">{{ navItem.meta.title }}</el-menu-item>
        </template>
      </el-menu>
    </el-col>
    <el-col :span="6" class="nav_search">
<!--      <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="textTobeSearch" class="nav_search"></el-input>-->
    </el-col>
  </el-row>
</template>

<script>
  import { setNavBarActiveIndex, getNavBarActiveIndex, removeNavBarActiveIndex } from '@/utils/cookie'
  import { navRoutesList } from '@/router/nav'

  export default {
    name: 'Navbar',
    props: {},
    data() {
      return {
        textTobeSearch: '',
        siteTitle: '我的博客',
        navRoutesList: navRoutesList
      }
    },
    destroyed() {
      removeNavBarActiveIndex()
    },
    methods: {
      hasChildren(item) {
        return item.children !== undefined
      },
      activeIndex() {
        return getNavBarActiveIndex()
      },
      handleSelectNavItem(index, path) {
        setNavBarActiveIndex(index)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "Navbar";
</style>
