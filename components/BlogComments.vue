<template lang='pug'>
div(class='blog-comments')

  ul(class='blog-comments__list')

    p(class='blog-comments__date') {{ oldestCommentData }}

    li(
      v-for='(comment, index) in processedComments.comments'
      :key='comment + index'
      class='blog-comments__item'
    )

      div(class='blog-comments__card')

        div(class='blog-comments__auther auther')

          h4(
            class='auther__title'
          ) {{ comment.username || 'RandomDude' }}

        p(class='blog-comments__comment') {{ comment.text }}

        div(class='blog-comments__buttons')

          a(
            @click='replyCommentId = comment.commentId'
            class='blog-comments__button'
          ) Reply

          a(
            v-if='authUser.uid === comment.uid'
            @click='commentDelete({ commentId: comment.commentId })'
            class='blog-comments__button blog-comments__button--delete'
          ) Delete

        ul(class='blog-comments__list blog-comments__list-sub')

          li(
            v-for='(subComment, index) in processedComments.subComments.filter(sc => sc.parentCommentId === comment.commentId )'
            :key='subComment + index'
            class='blog-comments__item'
          )

            div(class='blog-comments__card')

              div(class='blog-comments__auther auther')

                h4(
                  class='auther__title'
                ) {{ subComment.username || 'RandomDude' }}

              p(class='blog-comments__comment') {{ subComment.text }}

              div(class='blog-comments__buttons')

                a(
                  v-if='authUser.uid === subComment.uid'
                  @click='commentDelete({ commentId: subComment.commentId })'
                  class='blog-comments__button blog-comments__button--delete'
                ) Delete

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
import { mapState, mapGetters, mapActions } from 'vuex'
import moment from 'moment'


export default {
  components: {
    BlogCommentForm
  },
  props: {},
  data () {
    return {
      replyCommentId: ''
    }
  },
  computed: {
    oldestCommentData () {
      const comments = this.processedComments.comments
      return comments.length > 0 ? moment.unix(comments[0].createdAt.seconds).format('LL') : ''
    },


    processedComments () {
      const sortedComments = [...this.blogComments].sort((a, b) => a.createdAt.seconds - b.createdAt.seconds)
      const comments = []
      const subComments = []
      sortedComments.forEach(c => !c.parentCommentId ? comments.push(c) : subComments.push(c))
      return { comments, subComments }
    },


    ...mapState({
      blogComments: state => state.blog.comments
    }),


    ...mapGetters({
      authUser: 'auth/authUser'
    })
  },
  methods: {
    clearReplyCommentId () {
      this.replyCommentId = ''
    },


    ...mapActions({
      commentDelete: 'blog/commentDelete'
    })
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
    width: min-content
    display: grid
    grid-auto-flow: column
    grid-gap: $unit*2
    margin-top: $unit

  &__button
    color: $dark
    font-size: 12px
    font-weight: $fw-light

    &:hover
      color: $blue

    &--delete
      color: $dark

      &:hover
        color: $error

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
