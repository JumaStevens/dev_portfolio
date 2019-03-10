<template lang='pug'>
div(class='hero-composite')
  svg(
    class='hero-composite__aspect-ratio-sizer'
    viewBox='0 0 375 812'
  )
  div(class='hero-composite__view')
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
import CardCode from '~/components/CardCode.vue'
import CardWireframe from '~/components/CardWireframe.vue'
import CardMockup from '~/components/CardMockup.vue'


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
  max-width: 375px
  max-height: 812px
  width: 100%
  display: grid
  justify-self: center
  border-radius: 24px
  border: 2px solid $white
  box-shadow: 40px 32px 40px rgba(34, 34, 34, 0.7)
  overflow: hidden
  transform: rotateX(-60deg) rotateZ(45deg) scale(1)
  +mq-s
    // width: 100%
  +mq-m
    transform: rotateX(-60deg) rotateZ(45deg) scale(1)

  &__aspect-ratio-sizer,
  &__view
    grid-row: 1 / 2
    grid-column: 1 / 2

  &__aspect-ratio-sizer

  &__view
    position: relative

  &__code,
  &__wireframe,
  &__mockup
    position: absolute
    width: 100%
    height: 100%

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



  &__aspect-ratio-sizer

</style>
