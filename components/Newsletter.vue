<template lang='pug'>
div(class='container-newsletter')
  section(class='newsletter')

    h2(class='newsletter__headline') Subscribe

    div(class='newsletter__wrapper')

      h3(class='newsletter__title') Stay informed

      p(class='newsletter__copy') Enter your email to receive my newsletter covering topics of tech, cryptocurrency, and business.

      form(
        @submit.prevent='newsletterSubscribe'
        class='newsletter__form'
      )

        input(
          v-model.trim='email'
          v-validate='"required|email"'
          class='newsletter__form-input'
          name='email'
          type='email'
          placeholder='example@email.com'
        )

        input(
          :class='{ active: email }'
          class='newsletter__form-submit'
          type='submit'
          value='Send'
        )

    div(class='newsletter__wrapper')

      h3(class='newsletter__title') Keep in touch

      p(class='newsletter__copy') I post regularly on topics of tech, happenings in web development, and business.

      div(class='newsletter__social-media')
        a(
          class='newsletter__social-media-link'
          href='https://github.com/JumaStevens'
          target='_blank'
        )
          IconGithub(class='newsletter__social-media-icon')
        a(
          class='newsletter__social-media-link'
          href='https://linkedin.com/in/juma-stevens-05730b138/'
          target='_blank'
        )
          IconLinkedin(class='newsletter__social-media-icon')
        a(
          class='newsletter__social-media-link'
          href='https://www.instagram.com/jumastevens/'
          target='_blank'
        )
          IconInstagram(class='newsletter__social-media-icon')
        //- a(
        //-   class='newsletter__social-media-link'
        //-   href='https://twitter.com/JumaStevens'
        //-   target='_blank'
        //- )
        //-   IconTwitter(class='newsletter__social-media-icon')
</template>


<script>
import IconGithub from '~/assets/svg/iconGithub.svg'
import IconLinkedin from '~/assets/svg/iconLinkedin.svg'
import IconInstagram from '~/assets/svg/iconInstagram.svg'
// import IconTwitter from '~/assets/svg/iconTwitter.svg'
import { firestore, auth } from '~/plugins/firebase'


export default {
  components: {
    IconGithub,
    IconLinkedin,
    IconInstagram,
    // IconTwitter
  },
  props: {},
  data () {
    return {
      email: ''
    }
  },
  computed: {},
  methods: {
    async newsletterSubscribe () {
      try {
        const { uid } = auth().currentUser

        const isValid = await this.$validator.validateAll()
        if (!isValid || !uid) return

        const dbRef = firestore.collection('queueNewsletterSubscribe')
        const data = { email: this.email }
        await dbRef.add(data)
        await this.handleSuccess()
        return
      }
      catch (e) {
        console.error(e)
      }
    },


    handleSuccess () {
      this.email = 'Thanks, got it! 🙌'
      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
          this.email = ''
        }, 3000)
      })
    }
  }
}
</script>


<style lang='sass' scoped>
.container-newsletter
  @extend %container-main
  // margin-bottom: $unit*10

.newsletter
  @extend %container-content
  display: grid
  grid-template-rows: min-content auto auto
  grid-template-columns: 1fr
  grid-auto-flow: column
  grid-gap: $unit*5
  +mq-s
    grid-template-rows: min-content auto
    grid-template-columns: 1fr 1fr

  &__headline
    @extend %text-headline
    grid-row: 1 / 2
    grid-column: 1 / -1
    margin-bottom: $unit*5

  &__wrapper
    display: grid
    grid-template-rows: min-content auto auto
    grid-template-columns: 1fr
    grid-gap: $unit $unit*5

    &:last-child
      margin-top: $unit*2
      +mq-s
        margin-top: 0

  &__title
    grid-row: 1 / 2
    grid-column: 1 / 2
    font-weight: $fw-bold
    padding: 0 $unit*2

  &__copy
    grid-row: 2 / 3
    grid-column: 1 / 2
    font-weight: $fw-light
    max-width: 400px
    padding: 0 $unit*2

  &__form
    align-self: center
    grid-row: 3 / 4
    grid-column: 1 / 2
    display: grid
    grid-auto-flow: column
    grid-gap: $unit*2
    border-radius: $unit*.75
    margin-top: $unit*3
    padding: 0 $unit*2

    &-input
      width: 100%
      padding: 0 $unit
      background: transparent
      border-bottom: 1px solid $dark
      border-radius: unset

    &-submit
      width: min-content
      padding: $unit $unit*2
      background: $dark
      color: $white
      border-radius: $unit*.75
      transition: box-shadow 250ms ease

      &.active
        background: $blue
        box-shadow: 0px $unit $unit*3 rgba(34, 34, 34, 0.25)
        cursor: pointer

  &__social-media
    display: grid
    grid-auto-flow: column
    grid-auto-columns: min-content
    grid-gap: $unit*2
    margin-top: $unit*3
    padding: 0 $unit*2
    align-self: end

    &-link
      @extend %flex--row-center
      width: $unit*5
      height: $unit*5

    &-icon
      width: $unit*3
      height: $unit*3
</style>
