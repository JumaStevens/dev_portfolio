<template lang='pug'>
div(class='blog-comment-form')

  textarea(
    v-model='commentInput'
    @blur='clearReplyCommentId'
    ref='textarea'
    class='blog-comment-form__input'
    placeholder='Leave a comment...'
  )

  div(class='blog-comment-form__buttons')

    button(
      @click='submitComment'
      class='blog-comment-form__button'
    ) Comment
</template>


<script>
import { mapActions } from 'vuex'


export default {
  components: {},
  props: {
    replyCommentId: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      commentInput: ''
    }
  },
  computed: {},
  mounted () {
    if (this.replyCommentId) {
      this.$nextTick(() => {
        const el = this.$refs.textarea
        el.focus()
        console.log('input el: ', el)
      })
    }
  },
  methods: {
    async submitComment () {
      try {
        const data = {
          handle: this.$route.params.id,
          text: this.commentInput,
          parentCommentId: this.replyCommentId
        }

        await this.commentCreate(data)
        this.commentInput = ''
        this.clearReplyCommentId()
      }
      catch (e) {
        console.error(e)
      }
    },


    clearReplyCommentId () {
      if (this.commentInput) return

      this.$emit('clearReplyCommentId')
    },


    ...mapActions({
      commentCreate: 'blog/commentCreate'
    })
  }
}
</script>


<style lang='sass' scoped>
.blog-comment-form
  display: grid
  grid-gap: $unit*2
  margin: $unit*7 0 0 0

  &__input
    width: 100%
    min-height: 200px
    padding: $unit*2
    border-radius: $unit*.75
    background: $grey
    resize: vertical

    &::placeholder
      color: $dark


  &__buttons
    display: flex
    justify-content: flex-end

  &__button
    height: $unit*5
    padding: 0 $unit*2
    border-radius: $unit*.75
    background: $blue
    color: $white

</style>
