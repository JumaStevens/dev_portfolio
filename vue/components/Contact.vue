<template lang='pug'>
div(class='container-contact')

  section(class='contact')
    h2(class='contact__headline') {{ headline }}

    form(
      @submit.prevent='submit'
      class='contact__form'
    )
      ul(class='contact__list')
        li(
          v-for='(item, index) in log'
          :key='item + index'
          :class='{ fromBot: item.fromBot }'
          class='contact__item'
        ) {{ item.message }}
      input(
        class='contact__input'
        v-model.trim='userText'
        placeholder='Type something'
      )
      input(
        class='contact__submit'
        type='submit'
        value='Send'
      )

</template>


<script>
import isEmail from 'validator/lib/isEmail'


export default {
  components: {},
  props: {},
  data () {
    return {
      headline: 'Contact',
      userText: '',
      log: [
        {
          fromBot: true,
          message: 'Hey, I\'m Bot. Let\'s chat!'
        },
        {
          fromBot: true,
          message: 'What\'s your email?'
        }
      ],
      botTask: [
        {
          task: 'email',
          message: 'What\'s your email?',
          successMessage: 'Great, thank you!',
          errorMessage: 'Oops, email is incorrectly formatted. Try again.'
        },
        {
          task: 'name',
          message: 'Ok, and your name?',
          successMessage: 'Cool name.',
          errorMessage: 'Oops, keep it simple, what\'s your name?'
        },
        {
          task: 'project',
          message: 'So what can I do for you?',
          successMessage: 'Ok. Thank you for reaching out, we\'ll be in touch!',
          errorMessage: 'Sorry, I didn\'t catch that. What now?'
        }
      ]
    }
  },
  computed: {

  },
  methods: {
    validateEmail (text) {
      return isEmail(text)
    },


    validateName (text) {
      return text.match(/^[A-Za-z]|[A-Za-z][A-Za-z\s]*[A-Za-z]$/)
    },


    nextBotTask () {
      const task = this.botTask[0]
      if (!task) return

      const logData = {
        fromBot: true,
        message: task.message
      }

      this.log.push(logData)
    },


    submit () {
      if (!this.userText) return

      // add user message to log
      this.log.push({ fromBot: false, message: this.userText })

      // current bot task
      const botTask = this.botTask[0]

      // task success
      const taskSuccess = () => {
        this.log.push({ fromBot: true, message: botTask.successMessage })
        this.botTask.shift()
        this.nextBotTask()
      }

      // task error
      const taskError = () => this.log.push({ fromBot: true, message: botTask.errorMessage })

      // email task
      if (botTask && botTask.task === 'email') this.validateEmail(this.userText) ? taskSuccess() : taskError()

      // name task
      else if (botTask && botTask.task === 'name') this.validateName(this.userText) ? taskSuccess() : taskError()

      // project task
      else if (botTask && botTask.task === 'project') taskSuccess()

      // all task complete
      else this.log.push({ fromBot: true, message: 'Got it, and noted.' })

      // clear user input
      this.userText = ''
    }
  }
}
</script>


<style lang='sass' scoped>
.container-contact
  @extend %container-main

.contact
  @extend %container-content

  &__headline
    @extend %text-headline

  &__form
    display: grid
    grid-template-rows: 1fr auto
    grid-template-columns: 1fr auto
    grid-gap: $unit*10 $unit*2
    margin: 0 auto

  &__list
    @extend %flex--column
    grid-row: 1 / 2
    grid-column: 1 / 2

  &__item
    @extend %card-container
    align-self: flex-start
    padding: $unit
    margin: 0 $unit*3 $unit*3 0

    &.fromBot
      position: relative
      align-self: flex-end
      margin: 0 0 $unit*3 $unit*3
      overflow: visible
      background: $black
      color: $white

      &::after
        content: '🤖'
        position: absolute
        top: 0
        right: -$unit*5
        font-size: $fs1

    &:last-child
      margin-bottom: unset

  &__input
    grid-row: 2 / 3
    grid-column: 1 / 2
    border-bottom: 1px solid $dark

  &__submit
    @extend %card-container
    grid-row: 2 / 3
    grid-column: 2 / 3
    padding: $unit $unit*3
    background: $blue
    color: $white

</style>
