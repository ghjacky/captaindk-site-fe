<template>
  <el-card class="post_item_wrapper">
    <div class="post_item" @click="handlePostItemClick">
      <div class="post_title">
        <span>{{ title }}</span>
      </div>
      <div class="post_summary">
        <span>{{ summary }}</span>
      </div>
    </div>

    <div class="post_stuff">
      <el-tag class="post_tag" v-for="tag in tags" :key="tag.id" size="mini">
        <span>{{ tag.name }}</span>
      </el-tag>
      <el-tag class="post_tag" size="mini" type="info">
        <span>{{ date }}</span>
      </el-tag>
      <el-tag class="post_tag" size="mini" type="info">
        <span>作者: {{ author }}</span>
      </el-tag>
      <el-tag class="post_tag" size="mini" type="info">
        <span>阅读次数: {{ readCount }}</span>
      </el-tag>
    </div>
  </el-card>
</template>

<script>
  import moment from 'moment'

  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      summary: {
        type: String,
        default: ''
      },
      id: {
        type: String,
        default: ''
      },
      tags: {
        type: Array,
        default: () => { return [] }
      },
      date: {
        type: String,
        default: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      author: {
        type: String,
        default: 'GMY'
      },
      readCount: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {}
    },
    methods: {
      handlePostItemClick() {
        this.$router.push('/blog/posts/' + this.id)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/vblog.scss";
</style>
