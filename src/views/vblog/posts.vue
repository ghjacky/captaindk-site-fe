<template>
  <div class="posts">
    <bpostitem v-for="postItem in postItems" :key="postItem.id" :title="postItem.title" :summary="postItem.summary" :id="postItem.id"
               :tags="postItem.tags"></bpostitem>
  </div>
</template>

<script>
  import bpostitem from '@/views/vblog/components/bpostitem'
  import { MixinsDataPosts } from '@/views/vblog/mixins/data-posts'

  export default {
    name: 'posts',
    components: { bpostitem },
    mixins: [MixinsDataPosts]
  }
</script>

<style scoped>

</style>
