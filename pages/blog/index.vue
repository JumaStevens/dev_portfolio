<template lang='pug'>
main(class='container-index')
  div(v-html='blogs')
</template>


<script>
import blogs from '~/content/blogs.js'


export default {
  async asyncData ({ params, store }) {

    async function asyncImport (blogName) {
      const wholeMD = await import(`~/content/blog/${blogName}.md`)
      console.log('att: ', wholeMD.attributes)
      return wholeMD
    }


    return Promise.all(blogs.map(blog => asyncImport(blog)))
      .then((res) => {
        return { blogs: res }
      })
  },
  components: {},
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
