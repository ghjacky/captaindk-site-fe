<template>
  <el-card class="post_item">
    <div class="post" @click="handlePostItemClick">
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
  @import "~@/styles/variables.scss";

  .el-card__body {
    padding: 0;
  }

  .post_item:hover {
    border-top: solid 2px $blogPostItemHoverTitleFontColor;

    .post_title {
      color: $blogPostItemHoverTitleFontColor;
    }

    .post_summary {
      color: $blogPostItemHoverSummaryFontColor;
    }
  }

  .post:hover {
    cursor: pointer;
  }

  .post_item {
    width: 100%;
    text-align: left;
    margin-bottom: 20px;
    border-top: solid 2px white;

    .post_title {
      font-size: $blogPostItemTitleFontSize;
      color: $blogPostItemTitleFontColor;
    }

    .post_summary {
      margin: 0 auto;
      padding: 20px 0 0;
      width: 100%;
      border-bottom: solid 1px lightgray;
      font-size: $blogPostItemSummaryFontSize;
      color: $blogPostItemSummaryFontColor;
    }

    .post_stuff {
      margin: 10px auto 0;
      font-style: $blogPostItemStuffFontStyle;
      font-size: $blogPostItemStuffFontSize;

      .post_tag {
        margin-right: 10px;
      }
    }
  }
</style>
