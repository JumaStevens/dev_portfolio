<template lang='pug'>
div(class='blog-comments')


  ul(class='blog-comments__list')
    li(
      v-for='(comment, index) in comments'
      :key='comment + index'
      class='blog-comments__item'
    )

      div(class='blog-comments__card')

        div(class='blog-comments__auther auther')
          img(
            v-lazy='headshot'
            class='auther__image'
          )
          nuxt-link(
            to='/#bio'
            class='auther__title') {{ comment.username }}
          p(class='auther__copy') 28 days ago

        p(class='blog-comments__comment') {{ comment.text }}


        ul(class='blog-comments__list blog-comments__list-sub')
          li(
            v-for='(subComment, index) in subComments.filter(subComment => subComment.commentId === comment.commentId)'
            :key='subComment + index'
            class='blog-comments__item'
          )

            div(class='blog-comments__card')

              div(class='blog-comments__auther auther')
                img(
                  v-lazy='headshot'
                  class='auther__image'
                )
                nuxt-link(
                  to='/#bio'
                  class='auther__title') {{ subComment.username || 'RandomDude' }}
                p(class='auther__copy') 28 days ago

              p(class='blog-comments__comment') {{ subComment.text }}

        div(class='blog-comments__form')
          img(
            v-lazy='headshot'
            class='auther__image'
          )
          button() Reply...


  div(class='blog-comments__form last')
    img(
      v-lazy='headshot'
      class='auther__image'
    )
    textarea(
      v-model='comment'
      placeholder='Leave a comment...'
    )
    div
      p Markdown is supported
      button() Preview
      button(@click='submitComment') Comment

</template>


<script>
import headshot from '~/assets/images/headshot.png'
import { firestore } from '~/plugins/firebase'


export default {
  components: {},
  props: {},
  data () {
    return {
      headshot,
      comment: '',
      comments: [],
      subComments: []
    }
  },
  computed: {},
  beforeMount () {
    this.fetchComments()
  },
  methods: {
    async fetchComments () {
      try {
        const querySnapshot = await firestore
          .collection('blog')
          .doc('HhlNzf2BXqEwG8f0hCNu')
          .collection('comments').get()

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

        console.log('DONE')
      }
      catch (e) {
        console.error(e)
      }
    },


    async fetchSubComments ({ commentId }) {
      try {
        console.log('commentId: ', commentId)
        const querySnapshot = await firestore
          .collection('blog')
          .doc('HhlNzf2BXqEwG8f0hCNu')
          .collection('comments')
          .doc(commentId)
          .collection('subComments')
          .get()

        querySnapshot.forEach(doc => {
          console.log('subComment: ', doc.data())
          this.subComments.push({
            commentId,
            ...doc.data()
          })
        })

        console.log('Almost done...')
      }
      catch (e) {
        console.error(e)
      }
    },


    async submitComment () {
      // need to know the blog id


      console.log('submit commit: ', this.comment)
      const url = 'http://localhost:5000/juma-stevens/us-central1/https-blogComments'
      const config = {
        headers : {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
        },
        data: {
          text: this.comment,
          handle: 'firenuxt',
          uid: '007',
          username: 'Milkman',
          id: 'HhlNzf2BXqEwG8f0hCNu'
        }
      }

      const success = (res) => {
        console.log('it worked: ', res)
      }

      const error = (e) => {
        console.error(e)
      }

      try {
        const res = await this.$axios.post(url, config)
        success(res)
      }
      catch (e) {
        error(e)
      }
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

  &__item
    display: grid
    grid-gap: 0 $unit*2
    grid-auto-flow: column
    grid-auto-columns: auto 1fr
    position: relative
    z-index: 4
    margin-top: $unit*10

    &:first-child
      margin-top: unset

  &__card

  &__auther

  &__comment
    margin-top: $unit
    margin-left: $unit*8

  &__buttons
    margin-top: $unit
    margin-left: $unit*8
    // display: none

    & a
      color: $dark
      font-weight: $fw-light

  &__list-sub
    margin-left: $unit*8
    position: relative

    & .blog-comments__item
      margin-top: $unit*5
      position: relative
      z-index: 4

    & .auther__image
      width: $unit*5
      height: $unit*5

    & .blog-comments__comment
      margin-left: $unit*7

    &::before
      content: ''
      position: absolute
      left: $unit*2.5
      height: 100%
      width: 2px
      background: $grey


  &__form
    display: flex
    margin: $unit*5 0 0 $unit*8
    align-items: center

    & img
      width: $unit*5
      height: $unit*5

    & button
      width: 100%
      height: $unit*5
      padding: 0 $unit*2
      border-radius: $unit*.75
      background: $grey
      color: $dark
      text-align: left
      margin-left: $unit*2

    &.last
      margin: $unit*10 0 0 0
      display: grid
      grid-template-rows: auto min-content
      grid-template-columns: auto 1fr
      grid-gap: $unit*2
      align-items: unset

      & img
        width: $unit*6
        height: $unit*6
        grid-row: 1 / 2
        grid-column: 1 / 2

      & textarea
        grid-row: 1 / 2
        grid-column: 2 / 3
        background: $grey
        padding: $unit*2
        width: 100%
        max-height: 500px
        min-height: 200px
        resize: vertical
        border-radius: $unit*.75

        &::placeholder
          color: $dark

      & div
        display: flex
        align-items: center
        grid-row: 2 / 3
        grid-column: 2 / 3

        & p
          margin-right: auto
          color: $dark
          font-size: 12px

      & button
        width: unset
        height: $unit*5
        padding: 0 $unit*2
        border-radius: $unit*.75
        margin-left: $unit*2
        background: $blue
        color: $white

        &:first-of-type
          background: transparent
          color: $black
          border: 1px solid $dark

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
</style>
