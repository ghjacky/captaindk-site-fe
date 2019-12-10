<template>
  <div class="layout">
    <el-header>
      <navbar></navbar>
    </el-header>
    <el-main style="width: 100%">
      <div class="left_sidebar">
        <slot name="left_sidebar_01"></slot>
      </div>
      <contents>
        <div slot="content">
          <slot name="content"></slot>
        </div>
      </contents>
      <div class="right_sidebar"></div>
    </el-main>
    <el-footer>
      <foot></foot>
    </el-footer>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar/Navbar'
  import Contents from '@/components/Content/Content'
  import Foot from '@/components/Foot/Foot'

  export default {
    name: 'Layout',
    components: { Navbar, Foot, Contents }
  }
</script>

<style scoped lang="scss">
  @import "index";
  @import "~@/styles/variables.scss";
  .el-header {
    padding: 0;
  }

  .el-main {
    height: calc(100% - #{$topNavBarHeight} - #{$bottomFootHeight});
    padding: 0;
    width: 100%;

    .left_sidebar, .right_sidebar {
      width: 15%;;
      overflow: auto;
      margin: 0 auto;
      height: calc(100% - 20px - #{$bottomFootHeight} - #{$topNavBarHeight});
      top: 80px;
      position: absolute;
    }

    .right_sidebar {
      right: 0;
    }
  }

  .el-footer {
    padding: 0;
  }
</style>
