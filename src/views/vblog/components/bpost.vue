<template>
  <div class="bpost">
    <el-card>
      <div class="post_title">{{ post_data.title }}</div>
      <el-row class="post_stuff">
        <el-col :span=2 class="post_author">作者：{{ post_data.stuff.author }}</el-col>
        <el-col :span=9 class="post_date">时间：{{ post_data.stuff.date }}</el-col>
        <el-col :span=2 class="post_category">分类：{{ post_data.stuff.category }}</el-col>
        <el-col :span=2 class="post_commentsNum">评论数：{{ post_data.stuff.comments.length }}</el-col>
        <el-col :span=2 class="post_readTimes">阅读次数：{{ post_data.stuff.readTimes }}</el-col>
      </el-row>
      <div class="post_content">{{ post_data.content }}</div>
    </el-card>
    <div class="post_comment">
      <comment></comment>
    </div>
  </div>
</template>

<script>
  import Comment from '@/components/Comment/Comment'
  export default {
    name: 'bpost',
    components: { Comment },
    props: {
      post_data: {
        type: Object,
        default: () => { return {} }
      }
    }
  }
</script>

<style scoped lang="scss">
  .bpost {
    .post_title {
      font-size: 26px;
    }

    .post_stuff {
      font-size: 10px;
      color: darkgray;
      margin-top: 5px;

      .el-main {
      }
    }

    .post_content {
      margin-top: 20px;
      text-align: left;
    }

    .post_comment {
      margin: 20px auto;
    }
  }
</style>
