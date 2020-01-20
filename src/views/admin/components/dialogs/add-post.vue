<template>
  <el-dialog id="dialog-add-post" :visible.sync="visible" class="hr-component-email-dialog" :close-on-click-modal="false" v-el-drag-dialog
             :title="title" :before-close="handleClose">
    <el-form label-position="left" size="mini">
      <el-form-item label="分类">
        <el-select v-model="postCategory" multiple filterable allow-create style="width: 100%">
          <el-option v-for="c in categories" :label="c.label" :key="c.key" :value="c.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标签">
        <span style="font-size: 10px;">(以英文逗号分隔)</span>
        <el-input v-model="postTags"></el-input>
      </el-form-item>
      <el-form-item label="标题">
        <el-input id="title-post" v-model="postTitle"></el-input>
      </el-form-item>
    </el-form>
    <vue-simplemde v-model="postContent" ref="markdownEditor" :highlight="true" preview-class="markdown-body"></vue-simplemde>
    <el-button type="primary" size="mini" @click="handleAddPost">保存</el-button>
  </el-dialog>
</template>

<script>
  import { mixinsCommonDialogMethods } from '@/views/admin/components/dialogs/common'
  import elDragDialog from '@/directive/el-drag-dialog'
  import hljs from 'highlight.js'

  window.hljs = hljs
  export default {
    directives: {
      elDragDialog
    },
    mixins: [mixinsCommonDialogMethods],
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        categories: [
          { key: '分类一', label: '分类一', value: '分类一' }
        ],
        postCategory: [],
        postTags: '',
        postTitle: '',
        postContent: ''
      }
    },
    methods: {
      handleAddPost() {
        console.log('调用API新增文章')
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/admin.scss";
</style>
