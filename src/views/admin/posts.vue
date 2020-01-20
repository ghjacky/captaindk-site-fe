<template>
  <div class="admin_posts">
    <el-button size="mini" type="primary" style="display: block; margin-bottom: 10px" @click="handleClick">写文章</el-button>
    <el-table :data="posts" border size="mini" :cell-style="handleCellStyle" :header-cell-style="handleHeaderCellStyle">
      <el-table-column v-for="(column, index) in columns" :key="index" :label="column.label" :prop="column.prop"></el-table-column>
      <el-table-column label="操作">
        <el-button type="text" size="mini">编辑</el-button>
        <el-button type="text" size="mini">删除</el-button>
      </el-table-column>
    </el-table>
    <add-post :visible.sync="showAddDialog" :title="titleAddDialog"></add-post>
  </div>
</template>

<script>
  import AddPost from '@/views/admin/components/dialogs/add-post'

  export default {
    components: { AddPost },
    data() {
      return {
        titleAddDialog: '',
        showAddDialog: false,
        columns: [
          { label: '序号', prop: 'id', width: '30px' },
          { label: '标题', prop: 'title', width: '150px' },
          { label: '创建时间', prop: 'created_at', width: '100px' },
          { label: '更新时间', prop: 'updated_at', width: '100px' }
        ],
        posts: [
          {
            id: 1,
            title: '文章一',
            created_at: '2019-10-10 15:16:17',
            updated_at: '2019-10-10 15:16:17'
          }
        ]
      }
    },
    methods: {
      handleClick() {
        this.showAddDialog = true
      },
      handleCellStyle() {
        return 'text-align: center'
      },
      handleHeaderCellStyle() {
        return 'text-align: center; background: #d3dce3; font-style: bold; '
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
