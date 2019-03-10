<template lang='pug'>
main(class='container-markdown')

  section(class='markdown')

    header(class='markdown__header')
      //- span(class='markdown__header-catagory') {{ meta.catagory }}
      //- h1(class='markdown__header-title') {{ meta.title }}

      div(class='markdown__header-auther auther')
        img(
          v-lazy='headshot'
          class='auther__image'
        )
        nuxt-link(
          to='/#bio'
          class='auther__title') Juma Stevens
        p(class='auther__copy') Feb 26 - 12 min read

    div(
      v-lazy:background-image='meta.image'
      class='markdown__image'
    )

    div(class='markdown__post-header')
      a(
        @click='activePanel = "post"'
        :class='{ active: activePanel === "post" }'
        class='markdown__post-header-button'
      )
        IconFile
        span Post
      a(
        @click='activePanel = "comments"'
        :class='{ active: activePanel === "comments" }'
        class='markdown__post-header-button'
      )
        IconComments
        span Comments
      a(
        :href='"https://github.com/JumaStevens/dev_portfolio/blob/master/content/blog/" + meta.handle + ".md"'
        target='_blank'
        class='markdown__post-header-button'
      )
        IconPencil
        span Edit

    div(
      v-show='activePanel === "post"'
      v-html='markdown'
      class='markdown__post'
    )

    BlogComments(
      v-if='activePanel === "comments"'
      class='markdown__comments'
    )
  Newsletter
</template>


<script>
import { mapActions } from 'vuex'
import BlogComments from '~/components/BlogComments.vue'
import Newsletter from '~/components/Newsletter.vue'
import headshot from '~/assets/images/headshot.png'
import IconFile from '~/assets/svg/iconFile.svg'
import IconComments from '~/assets/svg/iconComments.svg'
import IconPencil from '~/assets/svg/icon-pencil.svg'


export default {
  async asyncData ({ params, store }) {
    const blogsMeta = store.state.blog.blogMeta

    if (!blogsMeta.find(b => b.handle === params.id)) {
      await store.dispatch('blog/blogMetaFetch', { handle: params.id })
    }

    const md = await import(`~/content/blog/${params.id}.md`)

    return { markdown: md.default, meta: blogsMeta.find(b => b.handle === params.id) }
  },
  components: {
    BlogComments,
    Newsletter,
    IconPencil,
    IconComments,
    IconFile
  },
  data () {
    return {
      headshot: headshot,
      activePanel: 'post'
    }
  },
  computed: {
  },
  mounted () {
    this.commentsFetch()
  },
  methods: {
    ...mapActions({
      commentsFetch: 'blog/commentsFetch'
    })
  }
}
</script>

<style lang='sass'>
.container-markdown
  @extend %container-main
  padding: $unit*2.5 0 $unit*10 0
  +mq-s
    padding: $unit*5 0 $unit*10 0

.markdown
  @extend %container-content

  &__image
    width: 100%
    min-height: 280px
    background-position: center
    background-repeat: no-repeat
    background-size: cover
    border-radius: $unit*.75
    box-shadow: 0px $unit $unit*3 rgba(34, 34, 34, 0.5)
    margin: $unit*5 0 $unit*10 0

  &__post
    // max-width: 420px
    // margin: $unit*5 auto 0 auto
    // border: 1px solid #d1d5da
    border-top: unset
    padding: $unit*5 $unit*2

    & h1
      font-size: $fs2
      font-weight: $fw-bold

    & h2
      font-size: $fs1
      font-weight: $fw-bold

    & pre
      padding: $unit*2
      margin: $unit*2 0
      background: $grey

    & code
      padding: 0 $unit
      background: $grey

    & pre code
      padding: unset

    & a
      color: $blue

    &-header
      display: grid
      grid-template-columns: auto auto 1fr
      grid-gap: 0 $unit
      justify-items: end
      margin-top: $unit*8
      border-bottom: 1px solid #d1d5da

      & a
        height: $unit*5
        padding: 0 $unit*2
        display: flex
        justify-content: center
        align-items: center
        transform: translateY(1px)
        border-top-left-radius: $unit*.75
        border-top-right-radius: $unit*.75
        border: 1px solid transparent
        color: $dark

        &.active
          border: 1px solid #d1d5da
          border-bottom: 1px solid $white
          color: $black

      & span
        margin-left: $unit
        color: currentcolor

      & svg
        fill: currentcolor

  &__header

    &-catagory
      font-weight: $fw-light
      font-size: 12px
      text-transform: uppercase
      border-radius: $unit*3
      background: yellow
      padding: $unit $unit*2
      display: none

    &-title
      // padding-bottom: $unit*5
      font-size: $fs3
      font-weight: $fw-bold
      margin-bottom: $unit

.auther
  display: grid
  grid-template-rows: repeat(2, auto)
  grid-template-columns: min-content min-content
  grid-gap: 0 $unit*2

  &__image
    grid-row: 1 / 3
    grid-column: 1 / 2
    width: $unit*6
    height: $unit*6
    border-radius: 50%
    object-fit: contain
    background: $grey

  &__title
    grid-row: 1 / 2
    grid-column: 2 / 3
    white-space: nowrap
    align-self: end

  &__copy
    grid-row: 2 / 3
    grid-column: 2 / 3
    white-space: nowrap
    font-weight: $fw-light
    color: $dark
    font-size: 12px


.aspect-ratio
  grid-row: 1 / 2
  grid-column: 1 / 2
  display: grid

  &-sizer
    grid-row: 1 / 2
    grid-column: 1 / 2
</style>
