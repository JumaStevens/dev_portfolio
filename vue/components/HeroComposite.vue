<template lang='pug'>
div(class='hero-composite')
  svg(
    class='hero-composite__aspect-ratio-sizer'
    viewBox='0 0 375 812'
  )
  CardWireframe(
    :log='log'
    class='hero-composite__wireframe'
  )
  CardCode(class='hero-composite__code')
  CardMockup(
    :log='log'
    class='hero-composite__mockup'
  )
</template>


<script>
import CardCode from '~comp/CardCode.vue'
import CardWireframe from '~comp/CardWireframe.vue'
import CardMockup from '~comp/CardMockup.vue'


export default {
  components: {
    CardCode,
    CardWireframe,
    CardMockup
  },
  props: {},
  data () {
    return {
      log: []
    }
  },
  computed: {

  },
  methods: {
    pushMessages () {
      let messages = [
        { fromSelf: false, text: 'Web apps 📱 code audits 💻 talent 🙋‍♂️' },
        { fromSelf: true, text: 'Exciting!' },
        { fromSelf: false, text: 'Perfect, let\'s get started!' },
        { fromSelf: true, text: 'Ok, sounds great.' },
        { fromSelf: true, text: 'One more question.' },
        { fromSelf: false, text: 'Yeah?' },
        { fromSelf: false, text: '🤖' },
      ]

      let log = [
        { fromSelf: true, text: 'Hello 👋' },
        { fromSelf: false, text: 'Hey 😄' },
        { fromSelf: true, text: 'I need your help...' },
        { fromSelf: true, text: 'My tech got bugs 🐛🐜' },
        { fromSelf: false, text: 'Ok. Bugs ehh? 🔎🔥' },
        { fromSelf: false, text: 'We\'ll get you back to speed in no time!' },
        { fromSelf: true, text: '😁 What other services do you provide?' },
      ]


      const intervalDelay = 650

      // every n delay, push new message to messages
      setInterval(() => {
        if (messages.length > 0) log.push( messages.shift() )
        if (log.length > 10) messages.push( log.shift() )
        this.log = log
      }, intervalDelay)
    }
  },
  mounted () {
    this.pushMessages()
  }
}
</script>


<style lang='sass' scoped>
.hero-composite
  width: min-content
  display: grid
  grid-template-rows: min-content
  grid-template-columns: 1fr
  border-radius: 6px
  transform: rotateX(-60deg) rotateZ(45deg) scale(1)
  box-shadow: 40px 32px 40px rgba(34, 34, 34, 0.7)
  justify-self: center
  border-radius: 24px
  overflow: hidden
  border: 2px solid $white


  &__aspect-ratio-sizer,
  &__code,
  &__wireframe,
  &__mockup
    grid-row: 1 / 2
    grid-column: 1 / 2
    max-width: 375px

  &__code
    // box-shadow: 40px 32px 24px rgba(34, 34, 34, 0.5)
    // transform: translate(-24px, -24px)
    // visibility: hidden
    background: rgba(0, 0, 0, .6)
    padding-top: $unit*10

  &__mockup
    // box-shadow: 40px 32px 24px rgba(34, 34, 34, 0.5)
    // transform: translate(-48px, -48px)
    // background: transparent
    background: rgba(255, 255, 255, .2)
    // visibility: hidden

  &__wireframe
    // box-shadow: 40px 32px 24px rgba(34, 34, 34, 0.5)
</style>
