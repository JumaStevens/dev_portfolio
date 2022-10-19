<template lang='pug'>
article(class='blog-article-card')
  ImageElement(
    :src='image'
    :aspectRatio='0.56'
    class='blog-article-card__image'
  )
  header(class='blog-article-card__header')
    p(class='blog-article-card__category') {{ category }}
    h2(class='blog-article-card__title') {{ title }}
    p(class='blog-article-card__description') {{ description }}
    p(class='blog-article-card__meta') Oct 18, 2022
  NuxtLink(
    :to='to'
    class='blog-article-card__link'
  )
</template>


<script>
import ImageElement from '~/components/elements/Image.vue'

export default {
  components: {
    ImageElement
  },
  props: {
    image: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      default: ''
    },
    to: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      imageSrc: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80'
    }
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.blog-article-card
  position: relative
  display: grid
  gap: $unit*2

  &__image
    width: 100%
    border-radius: $unit
    overflow: hidden

  &__header
    display: grid
    gap: $unit

  &__category
    color: $secondary-label

  &__title
    font-size: $fs2
    font-weight: $fw-bold

  &__meta
    margin-top: $unit*3
    color: $secondary-label

  &__link
    position: absolute
    z-index: 2
    top: 0
    left: 0
    width: 100%
    height: 100%
</style>
