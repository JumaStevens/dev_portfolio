<template lang='pug'>
main(class='container-index')
  Hero
  BlogCollection(
    :blogsMeta='blogsMeta'
  )
  BlogList(
    :blogsMeta='blogsMeta'
  )
  Newsletter
  //- Contact
</template>


<script>
import Hero from '~/components/BlogHero.vue'
import BlogCollection from '~/components/BlogCollection.vue'
import BlogList from '~/components/BlogList.vue'
import Newsletter from '~/components/Newsletter.vue'
import Contact from '~/components/Contact.vue'


export default {
  async asyncData ({ params, store }) {
    await store.dispatch('blog/blogMetaFetchAll')
    const blogsMeta = store.state.blog.blogMeta
    return { blogsMeta }
  },
  components: {
    Hero,
    BlogCollection,
    BlogList,
    Newsletter,
    Contact
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
