<template lang='pug'>
div(class='blog-comments')

  ul(class='blog-comments__list')

    p(class='blog-comments__date') {{ oldestCommentData }}

    li(
      v-for='(comment, index) in comments'
      :key='comment + index'
      class='blog-comments__item'
    )

      div(class='blog-comments__card')

        div(class='blog-comments__auther auther')

          nuxt-link(
            to='/#bio'
            class='auther__title'
          ) {{ comment.username }}

        p(class='blog-comments__comment') {{ comment.text }}

        div(class='blog-comments__buttons')

          a(
            @click='replyCommentId = comment.commentId'
          ) Reply

        ul(class='blog-comments__list blog-comments__list-sub')

          li(
            v-for='(subComment, index) in subComments.filter(subComment => subComment.commentId === comment.commentId).sort((a, b) => a.createdAt.seconds - b.createdAt.seconds)'
            :key='subComment + index'
            class='blog-comments__item'
          )

            div(class='blog-comments__card')

              div(class='blog-comments__auther auther')

                nuxt-link(
                  to='/#bio'
                  class='auther__title') {{ subComment.username || 'RandomDude' }}

              p(class='blog-comments__comment') {{ subComment.text }}

        BlogCommentForm(
          v-if='comment.commentId === replyCommentId'
          :replyCommentId='replyCommentId'
          @clearReplyCommentId='clearReplyCommentId'
          class='blog-comments__form'
        )

  BlogCommentForm(
    v-if='!replyCommentId'
    class='blog-comments__form'
  )
</template>


<script>
import { firestore } from '~/plugins/firebase'
import BlogCommentForm from '~/components/BlogCommentForm.vue'
import { mapState } from 'vuex'
import moment from 'moment'


export default {
  components: {
    BlogCommentForm
  },
  props: {},
  data () {
    return {
      replyCommentId: '',
      comments: [],
      subComments: []
    }
  },
  computed: {
    oldestCommentData () {
      const comments = this.comments.sort((a, b) => a.createdAt.seconds - b.createdAt.seconds)

      return comments.length > 0 ? moment(comments[0].createdAt.miliseconds).format('LL') : ''
    },


    ...mapState({
      blogMeta: state => state.blog.blogMeta
    })
  },
  beforeMount () {
    this.fetchComments()
  },
  methods: {
    async fetchComments () {
      try {
        const blogHandle = this.$route.params.id
        const blogMeta = this.blogMeta.find(meta => meta.handle === blogHandle)
        const blogId = blogMeta.id

        const querySnapshot = await firestore
          .collection('blogComments')
          .where('blogId', '==', blogId)
          .where('parentCommentId', '==', '')
          .get()

        querySnapshot.forEach(doc => {
          this.comments.push({
            commentId: doc.id,
            ...doc.data()
          })
        })

        for (const comment of this.comments) {
          const { commentId } = comment
          if (commentId) await this.fetchSubComments({ commentId })
        }
      }
      catch (e) {
        console.error(e)
      }
    },


    async fetchSubComments ({ commentId }) {
      try {
        const querySnapshot = await firestore
          .collection('blogComments')
          .where('parentCommentId', '==', commentId)
          .get()

        querySnapshot.forEach(doc => {
          this.subComments.push({
            commentId,
            ...doc.data()
          })
        })
      }
      catch (e) {
        console.error(e)
      }
    },


    clearReplyCommentId () {
      this.replyCommentId = ''
    }
  }
}
</script>


<style lang='sass' scoped>
.blog-comments
  padding: $unit*5 $unit*2

  &__list
    position: relative

    &::before
      content: ''
      position: absolute
      left: $unit*3
      height: 100%
      width: 2px
      background: $grey
      display: none

  &__item
    display: grid
    grid-gap: 0 $unit*2
    grid-auto-flow: column
    grid-auto-columns: auto 1fr
    position: relative
    z-index: 4
    margin-top: $unit*5

    &:first-child
      margin-top: unset

  &__card
    // display: flex

  &__auther

  &__comment
    margin-top: $unit
    // margin-left: $unit

  &__buttons
    // margin-top: $unit
    // margin-left: $unit
    // display: none

    & a
      color: $blue
      font-size: 12px
      font-weight: $fw-light

  &__date
    // text-align: center
    color: $dark
    font-size: 12px

  &__list-sub
    margin-left: $unit*3
    position: relative
    // display: none

    & .blog-comments__item
      margin-top: $unit*3
      position: relative
      z-index: 4

      &::before
        content: ''
        // display: none
        position: absolute
        left: -$unit*3
        height: 100%
        width: 1px
        background: $grey

    & .auther__image
      width: $unit*5
      height: $unit*5
      display: none

    & .blog-comments__comment
      // margin-left: $unit*2

.auther
  display: grid
  grid-template-rows: repeat(2, auto)
  grid-template-columns: min-content min-content
  grid-gap: 0 $unit*2
  display: flex
  align-items: center

  &__image
    grid-row: 1 / 3
    grid-column: 1 / 2
    width: $unit*6
    height: $unit*6
    border-radius: 50%
    object-fit: contain
    background: $grey
    display: none

  &__title
    grid-row: 1 / 2
    grid-column: 2 / 3
    white-space: nowrap
    align-self: end
    // font-weight: $fw-bold
    background: yellow
    padding: 4px 8px
    margin-left: -8px
    border-radius: $unit*.75

  &__copy
    grid-row: 2 / 3
    grid-column: 2 / 3
    white-space: nowrap
    font-weight: $fw-light
    color: $dark
    font-size: 12px
    margin-left: $unit
</style>
