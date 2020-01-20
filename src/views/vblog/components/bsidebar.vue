<template>
  <div class="bsidebar">
    <sidebar height="100%" width="90%" title="边栏标题" class="left_sidebar_01">
      <el-tree slot="sidebar_content" class="filter-tree" :data="data" :props="defaultProps" default-expand-all :filter-node-method="filterNode"
               ref="tree"></el-tree>
    </sidebar>
  </div>
</template>

<script>
  import Sidebar from '@/components/Sidebar/Sidebar'
  import { MixinsDataSidebar } from '@/views/vblog/mixins/data-sidebar'

  export default {
    components: { Sidebar },
    mixins: [MixinsDataSidebar],
    methods: {
      filterNode(value, data) {
        if (!value) return true
        return data.label.indexOf(value) !== -1
      }
    }
  }
</script>

<style scoped lang="scss">
  .bsidebar {
    height: 100%;
    .left_sidebar_01 {
      height: 30%;
    }

    .left_sidebar_02 {
      height: 30%;
    }
  }
</style>
