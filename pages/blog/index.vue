<template lang='pug'>
main(class='container-index')
  Hero
  BlogCollection(
    :blogsMeta='blogsMeta'
  )
  BlogList(
    :blogsMeta='blogsMeta'
  )
  BlogList(
    :blogsMeta='blogsMeta'
  )
  Newsletter
</template>


<script>
import Hero from '~/components/BlogHero.vue'
import BlogCollection from '~/components/BlogCollection.vue'
import BlogList from '~/components/BlogList.vue'
import Newsletter from '~/components/Newsletter.vue'


export default {
  async asyncData ({ params, store }) {
    await store.dispatch('blog/blogMetaFetchAll')
    const blogsMeta = store.state.blog.blogMeta
    return { blogsMeta: [...blogsMeta, ...blogsMeta] }
  },
  components: {
    Hero,
    BlogCollection,
    BlogList,
    Newsletter
  },
  data () {
    return {}
  },
  computed: {}
}
</script>

<style lang='sass' scoped>
.container-index
</style>
