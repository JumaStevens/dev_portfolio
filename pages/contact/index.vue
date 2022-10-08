<template lang="pug">
div(class='page-support')
  div(class='page-support__main')
    header
      h1 Contact Me
      p Fill out the form below to contact me.
    form(
      @submit.stop.prevent='onFormSubmit'
      class='page-support__form'
    )
      InputElement(
        v-model='email'
        label='Email'
        placeholder='Enter your email'
      )
      TextareaElement(
        v-model='message'
        label='Message'
        placeholder='Enter your message here'
      )
      ButtonElement(
        :text='formSubmitLabel'
        :disabled='isFormSubmitting'
        class='page-support__form-button'
        type='submit'
      )
  div(class='page-support__meta')
    div(class='page-support__meta-item')
      h3 Email
      CopyInput(
        :text='copyText'
        class='page-support__'
      )
    div(class='page-support__meta-item')
      h3 Links
      ul(class='page-support__social-list')
        li(
          v-for='(social, i) in socialMedia'
          :key='social.key'
          class='page-support__social-item'
        )
          a(
            :href='social.url'
            class='page-support__social-link'
            target='_blank'
          )
            component(
              :is='social.icon'
              class='page-support__social-icon'
            )
</template>

<script>
import { isEmpty } from 'lodash'
// import API from '~/services/api'
import { onContact } from '~/services/logsnag'
import { DISCORD_INVITE_URL } from '~/utils/constants'
import ButtonElement from '~/components/elements/Button.vue'
import InputElement from '~/components/elements/Input.vue'
import TextareaElement from '~/components/elements/Textarea.vue'
import CopyInput from '~/components/elements/CopyInput.vue'
// import IconDiscord from '~/assets/svg/discord.svg'
import IconTwitter from '~/assets/svg/twitter.svg'
import IconGithub from '~/assets/svg/iconGithub.svg'

export default {
  components: {
    ButtonElement,
    CopyInput,
    InputElement,
    TextareaElement
  },
  props: {},
  data() {
    return {
      email: '',
      message: '',
      formSubmitLabel: 'Send',
      isFormSubmitting: false,
      copyText: 'juma@jumastevens.com',
      socialMedia: [
        {
          key: 'twitter',
          icon: IconTwitter,
          url: 'https://www.twitter.com/jumastevens'
        },
        {
          key: 'github',
          icon: IconGithub,
          url: 'https://www.github.com/JumaStevens'
        }
        // {
        //   key: 'discord',
        //   icon: IconDiscord,
        //   url: DISCORD_INVITE_URL
        // },
        // {
        //   key: 'twitter',
        //   icon: IconTwitter
        // },
        // {
        //   key: 'pinterest',
        //   icon: IconPinterest
        // },
        // {
        //   key: 'youtube',
        //   icon: IconYoutube
        // }
      ]
    }
  },
  computed: {},
  methods: {
    async onFormSubmit() {
      try {
        console.log('onFormSubmit')
        if (isEmpty(this.email) || isEmpty(this.message) || this.isFormSubmitting) return
        this.isFormSubmitting = true
        const res = await onContact(JSON.stringify({
          email: this.email,
          message: this.message
        }))
        console.log('res: ', res)
        this.email = ''
        this.message = ''
        this.formSubmitLabel = 'Thank You!'
        setTimeout(() => (this.formSubmitLabel = 'Send'), 5000)
      } catch (e) {
        console.error(e)
      } finally {
        this.isFormSubmitting = false
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.page-support
  display: grid
  +mq-m
    grid-template-rows: 1fr
    grid-template-columns: 420px 1fr

  &__main
    display: grid
    align-content: start
    justify-items: center
    grid-gap: $unit*3
    margin: $unit*10 $unit*3 $unit*20 $unit*3

    +mq-m
      grid-row: 1 / -1
      grid-column: 2 / 3

    & header
      text-align: center

    & h1
      font-size: $fs2

  &__form
    max-width: 580px
    width: 100%
    display: grid
    grid-gap: $unit*2
    align-content: start

    &-button
      background: $system-blue

  &__meta
    display: grid
    grid-gap: $unit*5
    align-content: start
    padding: $unit*10 $unit*3
    border-top: 1px solid $separator

    +mq-m
      grid-row: 1 / -1
      grid-column: 1 / 2
      padding: $unit*3 $unit*4
      border-top: unset
      border-right: 1px solid $separator

    &-item
      display: grid
      grid-gap: $unit*2

  &__social-list
    display: grid
    grid-template-rows: auto
    grid-auto-flow: column
    grid-gap: $unit*2
    justify-content: start

  &__social-link
    @extend %flex--row-center
    padding: $unit
    border-radius: $unit

    &:hover
      background: $quaternary-system-fill

  &__social-icon
    width: $unit*3
    fill: $system-blue
</style>
