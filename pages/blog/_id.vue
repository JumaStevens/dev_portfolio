<template lang='pug'>
div(class='page-blog-id')
  header(class='page-blog-id__header')
    p(class='page-blog-id__category') Design
    h1(class='page-blog-id__title') {{ meta.title }}
    h2(class='page-blog-id__description') {{ meta.description }}
  p(class='page-blog-id__meta') Oct 18, 2022 | 5 min read
  ImageElement(
    :src='meta.image'
    :aspectRatio='0.56'
    class='page-blog-id__image'
  )
  div(
    v-html='contentData'
    class='page-blog-id__content rich-text'
  )
</template>


<script>
import { hotfix, parseMarkdown, parseJSON } from '~/services/hotfix-client/beta'
import ImageElement from '~/components/elements/Image.vue'

export default {
  async asyncData({ route }) {
    try {
      const id = route.params.id
      const path = `portfolio/blog/${id}.md`
      const pathMeta = `portfolio/blog/meta/${id}.json`
      const content = await hotfix.fetchData(path)
      const meta = await hotfix.fetchData(pathMeta)
      console.log('meta: ', meta)
      return {
        content,
        contentData: parseMarkdown(content.data),
        meta: parseJSON(meta.data)
      }
    } catch (e) {
      console.error(e)
    }
  },
  components: {
    ImageElement
  },
  data () {
    return {}
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang='sass'>
.page-blog-id
  @extend %content
  max-width: $unit*80
  padding: $unit*5 0 $unit*10 0

  &__header

  &__category
    margin-bottom: $unit*2
    color: $secondary-label

  &__title
    font-size: $fs4
    font-weight: $fw-bold

  &__description
    margin-top: $unit

  &__meta
    margin-top: $unit*4
    color: $secondary-label

  &__image
    margin: $unit*6 0
    border-radius: $unit
    overflow: hidden

  &__content
</style>
