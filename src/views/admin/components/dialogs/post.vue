<template>
  <el-dialog id="dialog-post" :visible.sync="visible" class="hr-component-email-dialog" :close-on-click-modal="false" v-el-drag-dialog
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
      <el-form-item size="mini" label="图片">
        <el-upload ref="articlePicUpload" :action="uploadAction" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove"
                   :auto-upload="true" :file-list="postPics" multiple :limit="3" accept="image/jpeg,image/png" :on-success="handleSuccess">
          <i class="el-icon-plus"></i>
          <div slot="tip" class="el-upload__tip">鼠标放在图片上，点击‘+’号以复制图片地址</div>
        </el-upload>
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
  import { blogAddArticle, removeFile } from '@/api/admin'
  import { serviceAddr, apiPrefix } from '@/settings'
  import clipboard from '@/utils/clipboard.js'

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
      },
      post: {
        type: Object,
        default: () => { return {} }
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
        postContent: '',
        postPics: [],
        postPicIds: []
      }
    },
    computed: {
      uploadAction: function() {
        return serviceAddr + '/api/v1/files/upload'
      }
    },
    methods: {
      handleAddPost() {
        blogAddArticle({
          author: 'GMY',
          title: this.postTitle,
          content: this.postContent,
          categories: this.postCategory.map(item => { return { name: item } }),
          tags: this.postTags.split(',').map(item => { return { name: item } })
        }).then(res => {
          if (res.data.code === 100000) {
            this.$message({
              message: '文章添加成功',
              type: 'success',
              showClose: true,
              duration: 2000
            })
            this.handleClose()
          }
        })
      },
      handlePictureCardPreview(file) {
        const imageUrl = serviceAddr + apiPrefix + `/static/${file.response.data}`
        const evt = new Event('copy', { 'bubbles': true, 'cancelable': false })
        this.$refs.articlePicUpload.$el.dispatchEvent(evt)
        clipboard(imageUrl, evt)
      },
      handleRemove(file, fileList) {
        // 删除图片文件，并从xdoc的images中去除对应id
        this.lifePicIDs = fileList.map(item => {
          return item.response.data
        })
        removeFile(file.response.data)
      },
      handleSuccess(response, file, fileList) {
        this.postPicIds = fileList.map(item => {
          return item.response.data
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/admin.scss";
</style>
