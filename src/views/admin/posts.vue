<template>
  <el-container class="admin_posts">
    <el-aside id="blog_category">
      <el-tree :data="categories" node-key="name" :props="treeProps" @node-click="handleCategoryClick" @node-contextmenu="handleRightClickNode"
               default-expand-all :expand-on-click-node="false"></el-tree>
    </el-aside>
    <el-main>
      <el-button size="mini" type="primary" style="display: block; margin-bottom: 10px" @click="handleClick">写文章</el-button>
      <el-table :data="posts" border size="mini" :cell-style="handleCellStyle" :header-cell-style="handleHeaderCellStyle">
        <el-table-column v-for="(column, index) in columns" :key="index" :label="column.label" :prop="column.prop"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button type="text" size="mini" @click="viewArticle(scope.row.id)">查看</el-button>
            <el-button type="text" size="mini" @click="handleDelete(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <add-post v-if="dialogArticleVisible" :visible.sync="dialogArticleVisible" :title="dialogArticleTitle"></add-post>
    <v-contextmenu ref="contextmenu" v-model="currentNode">
      <v-contextmenu-item @click="handleAddCategory">添加分类</v-contextmenu-item>
      <v-contextmenu-item @click="handleEditCategory(currentNode)">编辑分类</v-contextmenu-item>
      <v-contextmenu-item @click="handleDeleteCategory(currentNode)">删除分类</v-contextmenu-item>
    </v-contextmenu>
    <dialog-category v-if="dialogCategoryVisible" :visible.sync="dialogCategoryVisible" :title="dialogCategoryTitle"
                     :oper-type="dialogCategoryOperType" :category="category"></dialog-category>
  </el-container>
</template>

<script>
  import AddPost from '@/views/admin/components/dialogs/post'
  import dialogCategory from './components/dialogs/category'
  import { deleteCategory, fetchArticles, fetchCategories, deleteArticle } from '@/api/admin'

  export default {
    components: { AddPost, dialogCategory },
    data() {
      return {
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
        ],
        pageQuery: {
          category: '',
          tags: [],
          author: '',
          year: '',
          month: '',
          order_by: 'id',
          order_type: 'asc',
          page: 1,
          pageSizes: [10, 20, 30],
          limit: 10
        },
        categories: [],
        treeProps: {
          children: 'children',
          label: 'name'
        },
        currentNode: {},
        category: {},
        // articles: [],
        article: {},
        dialogArticleOperType: 'add',
        dialogArticleVisible: false,
        dialogArticleTitle: '',
        dialogCategoryOperType: 'add',
        dialogCategoryVisible: false,
        dialogCategoryTitle: '',
        currentuser: { username: 'gmy' }
      }
    },
    watch: {
      dialogCategoryVisible: function() {
        if (!this.dialogCategoryVisible) {
          this.fetchCategories()
        }
      }
    },
    created() {
      this.fetchCategories()
      this.fetchArticles()
    },
    methods: {
      handleRightClickNode(event, currentNode) {
        this.currentNode = currentNode
        this.$refs.contextmenu.show({ left: event.pageX, top: event.pageY })
      },
      // 获取分类树
      fetchCategories() {
        fetchCategories(true).then(res => {
          if (res.data.code === 100000) {
            this.categories = res.data.data
          }
        })
      },
      // 获取文章列表
      fetchArticles() {
        fetchArticles(this.pageQuery).then((res) => {
          if (res.data.code === 100000) {
            this.posts = res.data.data
          }
        })
      },
      // 编辑
      handleEdit(article) {
        this.dialogArticleTitle = '编辑文章'
        this.dialogArticleOperType = 'edit'
        this.article = article
        this.dialogArticleVisible = true
      },
      // 查看文章
      viewArticle(id) {
        this.$router.push(`/blog/posts/${id}`)
      },
      // 删除
      handleDelete(id) {
        this.$confirm('确定删除此文章?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteArticle(id).then((res) => {
            if (res.code === 100000) {
              this.$message({
                message: '文章删除成功',
                type: 'success',
                duration: 2000,
                showClose: true
              })
              this.fetchArticles()
            }
          })
        }).catch()
      },
      handleDeleteCategory() {
        if (this.currentNode.children.length > 0) {
          this.$message({
            message: '该分类包含子分类，故无法删除',
            type: 'warning',
            showClose: true,
            duration: 2000
          })
        }
        this.$confirm('确定删除该分类吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteCategory(this.currentNode.id).then(res => {
            if (res.data.code === 100000) {
              this.$message({
                message: '分类删除成功',
                type: 'success',
                showClose: true,
                duration: 2000
              })
            }
          })
        }).catch()
        this.fetchCategories()
      },
      handleEditCategory() {
        this.dialogCategoryOperType = 'edit'
        this.dialogCategoryTitle = '编辑分类'
        this.category = this.currentNode
        this.dialogCategoryVisible = true
      },
      handleAddCategory() {
        this.dialogCategoryOperType = 'add'
        this.dialogCategoryTitle = '添加分类'
        this.category = this.currentNode
        this.dialogCategoryVisible = true
      },
      // 根据分类检索相应文章
      handleCategoryClick(currentNode) {
        this.currentNode = currentNode
        this.category = currentNode
        this.pageQuery.category = this.category.name
        this.pageQuery.author = this.currentuser.username
        fetchArticles(this.pageQuery).then((res) => {
          if (res.data.code === 100000) {
            this.posts = res.data.data
          }
        })
      },
      handleClick() {
        this.dialogArticleVisible = true
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
