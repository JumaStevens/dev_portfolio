<template lang='pug'>
div(
  id='contact'
  class='container-contact'
)

  section(class='contact')
    h2(class='contact__headline') {{ headline }}

    form(
      @submit.prevent='submit'
      class='contact__form'
    )
      ul(
        ref='logList'
        class='contact__list'
      )
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
import axios from 'axios'


export default {
  components: {},
  props: {},
  data () {
    return {
      headline: 'Contact',
      email: {
        from: '',
        name: '',
        message: ''
      },
      userText: '',
      log: [
        {
          fromBot: true,
          message: 'Hello, I\'m Bot. Let\'s chat!'
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
          successMessage: 'Thank you.',
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
          successMessage: 'Ok. Sending out message, one moment...',
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
      if (task) this.log.push({ fromBot: true, message: task.message })
    },


    scrollToBottom () {
      const log = this.$refs.logList
      this.$nextTick(() => log.scrollTop = log.scrollHeight)
    },


    async sendEmail () {
      const email = this.email
      const url = 'https://us-central1-microservices-6ff30.cloudfunctions.net/sendGrid/mail/6ZXMcE86d3U3G6YjiLBjNcS2ws72'
      const config = {
        headers : {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
        },
        data: {
          from: email.from,
          subject: `💸 New Client: ${email.name}`,
          text: email.message
        }
      }

      const success = (res) => {
        this.log.push({ fromBot: true, message: 'Sent! Thank you, expect a human to respond within 24 hours.' })
        // reset log to bottom position
        this.scrollToBottom()
      }

      const error = (e) => {
        this.log.push({ fromBot: true, message: '#&%@! Something went wrong, try again.' })
        // reset log to bottom position
        this.scrollToBottom()
      }

      try {
        const res = await axios.post(url, config)
        success(res)
      } catch(e) {
        error(e)
      }
    },


    submit () {
      if (!this.userText) return

      // add user message to log
      this.log.push({ fromBot: false, message: this.userText })

      // current bot task
      const botTask = this.botTask[0]

      // email data
      const email = this.email

      // task success
      const taskSuccess = () => {
        this.log.push({ fromBot: true, message: botTask.successMessage })
        this.botTask.shift()
        this.nextBotTask()
      }

      // task error
      const taskError = () => this.log.push({ fromBot: true, message: botTask.errorMessage })

      // email task
      if (botTask && botTask.task === 'email') {
        if (this.validateEmail(this.userText)) {
          taskSuccess()
          email.from = this.userText
        } else {
          taskError()
        }
      }

      // name task
      else if (botTask && botTask.task === 'name') {
        if (this.validateName(this.userText)) {
          taskSuccess()
          email.name = this.userText
        } else {
          taskError()
        }
      }

      // project task
      else if (botTask && botTask.task === 'project') {
        taskSuccess()
        email.message = `FROM: ${email.name}, MESSAGE: ${this.userText}`
        this.sendEmail()
      }

      // all task complete
      else this.log.push({ fromBot: true, message: 'Ok, noted.' })

      // reset log to bottom position
      this.scrollToBottom()

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
    grid-template-rows: $unit*50 auto
    grid-template-columns: 1fr $unit*11
    grid-gap: $unit*10 $unit*2
    margin: 0 auto

  &__list
    display: grid
    grid-template-columns: $unit*3 1fr $unit*3 $unit*12
    grid-auto-rows: min-content
    grid-gap: $unit*3 0
    grid-row: 1 / 2
    grid-column: 1 / -1
    padding: 0 $unit
    overflow-y: auto

  &__item
    @extend %card-container
    grid-column: 1 / 3
    justify-self: start
    padding: $unit

    &.fromBot
      position: relative
      grid-column: 2 / 4
      justify-self: end
      overflow: visible
      background: $black
      color: $white

      &::after
        content: '🤖'
        position: absolute
        top: 0
        right: -$unit*5
        font-size: $fs1

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
