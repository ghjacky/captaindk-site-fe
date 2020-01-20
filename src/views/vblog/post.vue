<template>
  <div class="post">
    <bpost :post_data="current_post"></bpost>
  </div>
</template>

<script>
  import bpost from '@/views/vblog/components/bpost'
  import moment from 'moment'
  import { setNavBarActiveIndex } from '@/utils/cookie'
  import { navIndexMap } from '@/router/nav'

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
            date: moment().format('YYYY-MM-DD HH:mm:ss'),
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
      setNavBarActiveIndex(navIndexMap[this.$options.name])
      console.log('此时根据post id参数调用远程接口获取指定id的文章信息')
    }
  }
</script>

<style scoped>

</style>
