<template>
  <div class="post">
    <bpost :post_data="current_post"></bpost>
  </div>
</template>

<script>
  import bpost from '@/views/vblog/components/bpost'

  export default {
    name: 'post',
    components: { bpost },
    data() {
      return {
        current_post: {
          title: '文章一',
          content: '这里是文章一的内容',
          stuff: {
            author: '郭明扬',
            date: new Date(),
            category: '类别一',
            comments: [],
            readTimes: 5,
            tags: [
              {
                id: 1,
                name: 'tag1'
              }
            ]
          }
        }
      }
    },
    created() {
      console.log('此时根据post id参数调用远程接口获取指定id的文章信息')
    }
  }
</script>

<style scoped>

</style>
