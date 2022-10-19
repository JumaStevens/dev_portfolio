<template lang='pug'>
main(class='page-blog')
  section(class='page-blog__section')
    h2(class='page-blog__section-title') Latest Articles
    ul(class='page-blog__list')
      li(
        v-for='(article, i) in meta'
        :key='article + i'
        class='page-blog__item'
      )
        BlogArticleCard(
          :title='article.title'
          :description='article.description'
          :category='article.category'
          :image='article.image'
          :to='{ name: "blog-id", params: { id: article.handle }}'
          class='page-blog__card'
        )
</template>


<script>
import { hotfix, parseJSON } from '~/services/hotfix-client/beta'
import BlogArticleCard from '~/components/modules/BlogArticleCard.vue'

export default {
  async asyncData({ route }) {
    try {
      const pathMeta = `portfolio/blog/meta`
      const meta = await hotfix.fetchData(pathMeta)
      console.log('meta: ', meta)
      return {
        meta: [meta].map((data) => parseJSON(data.data))
      }
    } catch (e) {
      console.error(e)
    }
  },
  components: {
    BlogArticleCard
  },
  data () {
    return {}
  },
  computed: {}
}
</script>

<style lang='sass' scoped>
.page-blog
  display: grid
  gap: $unit*4
  align-content: start

  &__section
    @extend %content
    display: grid
    gap: $unit*3
    padding: $unit*10 0

    &:first-of-type
      padding-top: $unit*5

    &-title
      font-size: $fs3
      font-weight: $fw-bold

  &__list
    display: grid
    gap: $unit*10 $unit*8

    +mq-m
      grid-template-columns: repeat(2, 1fr)
</style>
