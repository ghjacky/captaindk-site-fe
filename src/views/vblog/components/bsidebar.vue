<template>
  <div class="bsidebar">
    <sidebar height="100%" width="90%" title="边栏标题" class="left_sidebar_01">
      <el-tree slot="sidebar_content" class="filter-tree" :data="data" :props="defaultProps" default-expand-all :filter-node-method="filterNode"
               ref="tree"></el-tree>
    </sidebar>
<!--    <sidebar height="100%" width="90%" title="边栏标题" class="left_sidebar_02">-->
<!--      <el-tree slot="sidebar_content" class="filter-tree" :data="data" :props="defaultProps" default-expand-all :filter-node-method="filterNode"-->
<!--               ref="tree"></el-tree>-->
<!--    </sidebar>-->
  </div>
</template>

<script>
  import Sidebar from '@/components/Sidebar/Sidebar'

  export default {
    components: { Sidebar },
    methods: {
      filterNode(value, data) {
        if (!value) return true
        return data.label.indexOf(value) !== -1
      }
    },
    data() {
      return {
        filterText: '',
        data: [
          {
            id: 1,
            label: '一级 1',
            children: [
              {
                id: 4,
                label: '二级 1-1',
                children: [
                  {
                    id: 9,
                    label: '三级 1-1-1'
                  }, {
                    id: 10,
                    label: '三级 1-1-2'
                  }
                ]
              }
            ]
          }, {
            id: 2,
            label: '一级 2',
            children: [
              {
                id: 5,
                label: '二级 2-1'
              }, {
                id: 6,
                label: '二级 2-2'
              }
            ]
          }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
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
