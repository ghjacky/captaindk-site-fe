<template>
  <el-dialog id="dialog-category" :visible.sync="visible" :close-on-click-modal="false" v-el-drag-dialog :title="title" :before-close="handleClose">
    <el-form label-position="left" size="mini">
      <el-form-item label="分类名">
        <el-input v-model="categoryName"></el-input>
      </el-form-item>
      <el-form-item label="父级">
        <el-input v-model="categoryParent" :disabled="true"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" size="mini" @click="handleSubmit">提交</el-button>
  </el-dialog>
</template>

<script>
  import { mixinsCommonDialogMethods } from '../../mixins/dialog-common'
  import elDragDialog from '@/directive/el-drag-dialog'
  import { addCategory, updateCategory } from '@/api/admin'
  import { mapGetters } from 'vuex'

  export default {
    directives: {
      elDragDialog
    },
    mixins: [mixinsCommonDialogMethods],
    props: {
      operType: {
        type: String,
        default: 'add'
      },
      visible: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      },
      category: {
        type: Object,
        default: () => { return {} }
      }
    },
    data() {
      return {
        categoryName: '',
        categoryParent: ''
      }
    },
    computed: {
      ...mapGetters([
        'currentUser'
      ])
    },
    created() {
      if (this.operType === 'add') {
        this.categoryParent = this.category.name
      } else if (this.operType === 'edit') {
        this.categoryParent = this.category.parent
      }
    },
    methods: {
      handleSubmit() {
        this.category.parent = this.categoryParent
        this.category.name = this.categoryName
        this.category.author = this.currentUser.username
        if (this.operType === 'add') {
          this.category.id = 0
          addCategory(this.category).then(res => {
            if (res.data.code === 100000) {
              this.$message({
                message: '分类添加成功',
                type: 'success',
                showClose: true,
                duration: 2000
              })
              this.handleClose()
            }
          })
        } else if (this.operType === 'edit') {
          updateCategory(this.category).then(res => {
            if (res.data.code === 100000) {
              this.$message({
                message: '分类更新成功',
                type: 'success',
                showClose: true,
                duration: 2000
              })
              this.handleClose()
            }
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>
