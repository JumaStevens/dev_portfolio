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
import blogs from '~/content/blogs.js'
import Hero from '~/components/BlogHero.vue'
import BlogCollection from '~/components/BlogCollection.vue'
import BlogList from '~/components/BlogList.vue'
import Newsletter from '~/components/Newsletter.vue'
import Contact from '~/components/Contact.vue'


export default {
  async asyncData ({ params, store }) {

    async function asyncImport (blogName) {
      const wholeMD = await import(`~/content/blog/${blogName}.md`)
      const wholeMDMeta = await import(`~/content/blog/meta/${blogName}.json`)
      wholeMD.meta = wholeMDMeta.default
      // console.log('wholeMD: ', wholeMD.meta)
      return wholeMD
    }


    return Promise.all(blogs.map(blog => asyncImport(blog)))
      .then((res) => {
        return { blogsMeta: res.map(blog => blog.meta) }
      })
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
  computed: {
  }
}
</script>

<style lang='sass' scoped>
.container-index
</style>
