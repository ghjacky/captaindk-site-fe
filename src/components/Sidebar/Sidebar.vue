<template>
  <el-container class="Sidebar" :style="style">
    <el-header style="height: 30px">
      {{ title }}
    </el-header>
    <el-divider></el-divider>
    <el-main>
      <slot name="sidebar_content"></slot>
    </el-main>
  </el-container>
</template>

<script>
  import _ from 'lodash'
  export default {
    props: {
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '100%'
      },
      title: {
        type: String,
        default: ''
      }
    },
    computed: {
      style() {
        return _.join(['width: ' + this.width, 'height: ' + this.height, 'margin: 0 auto', 'background-color: white'], ';')
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "Sidebar";
</style>
