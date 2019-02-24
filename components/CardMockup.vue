<template lang='pug'>
div(class='wireframe')

  div(class='wireframe__header hifi')
    div(class='wireframe__header-button')
      IconChevron(class='wireframe__svg')
    div(class='wireframe__header-button')
      IconVideoCall(class='wireframe__svg')
    div(class='wireframe__header-button')
      IconVoiceCall(class='wireframe__svg')


  div(class='wireframe__log hifi')
    div(
      ref='logList'
      class='wireframe__log-list'
    )
      div(
        v-for='(item, index) in log'
        :key='item + index'
        :class='{ self: item.fromSelf }'
        class='wireframe__log-item'
      )
        span(class='wireframe__text') {{ item.text }}


  div(class='wireframe__form hifi')
    div(class='wireframe__form-input')
      span(class='wireframe__text') Type something...
    div(class='wireframe__form-button')
      IconPaperPlane(class='wireframe__svg')
</template>


<script>
import IconChevron from '~/assets/svg/icon-chevron.svg'
import IconPaperPlane from '~/assets/svg/icon-paper-plane.svg'
import IconVideoCall from '~/assets/svg/icon-video-call.svg'
import IconVoiceCall from '~/assets/svg/icon-voice-call.svg'


export default {
  components: {
    IconChevron,
    IconPaperPlane,
    IconVideoCall,
    IconVoiceCall
  },
  props: {
    log: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {
    log (log) {
      this.scrollToBottom()
    }
  },
  methods: {
    scrollToBottom () {
      const log = this.$refs.logList
      this.$nextTick(() => log.scrollTop = log.scrollHeight)
    }
  }
}
</script>


<style lang='sass' scoped>
.wireframe
  display: grid
  grid-template-rows: $unit*8 1fr $unit*8
  color: $blue

  &__text
    @extend %flex--row-center
    height: 100%
    color: currentColor

  &__header
    grid-row: 1 / 2
    grid-column: 1 / 2
    display: grid
    grid-template-columns: min-content 1fr min-content
    grid-gap: 0 $unit*2
    justify-items: end
    align-items: center
    padding: 0 $unit
    border: 1px solid currentColor

    &-button
      height: $unit*5
      padding: 0 $unit*2
      border: 1px dashed currentColor

  &__log
    grid-row: 2 / 3
    grid-column: 1 / 2
    border: 1px solid currentColor

    &-list
      display: grid
      grid-auto-rows: min-content
      grid-gap: $unit*3 0
      padding: $unit*1.5 $unit
      overflow: hidden

    &-item
      padding: $unit*2
      border: 1px dashed currentColor

  &__form
    grid-row: 3 / 4
    grid-column: 1 / 2
    display: grid
    grid-template-columns: 1fr min-content
    grid-gap: 0 $unit*2
    align-items: center
    padding: 0 $unit
    border: 1px solid currentColor
    &-input
      height: $unit*5
      border: 1px dashed currentColor

    &-button
      height: $unit*5
      padding: 0 $unit*2
      border: 1px dashed currentColor

.hifi
  display: grid
  border: unset

.hifi .wireframe

  &__text
    color: $white

  &__svg
    width: $unit*2
    fill: $white

  &__header
    border: unset

    &-button
      @extend %flex--row-center
      width: $unit*5
      padding: unset
      border: unset
      border-radius: 50%
      background: $grey

      & .wireframe__svg
        fill: currentColor

      &:first-child .wireframe__svg
        transform: rotate(-90deg)

  &__log
    border: unset

    &-item
      width: fit-content
      padding: $unit $unit*2
      border: unset
      border-radius: $unit*3
      background: $grey
      border-bottom-left-radius: unset

      & .wireframe__text
        justify-content: flex-start
        color: $black

      &.self
        margin-left: auto
        background: $blue
        border-bottom-right-radius: unset
        border-bottom-left-radius: $unit*3

        & .wireframe__text
          color: $white


  &__form
    border: unset

    &-input
      padding: 0 $unit*3
      border: unset
      border-radius: $unit*3
      background: $grey

      & .wireframe__text
        display: flex
        justify-content: flex-start
        text-transform: unset
        color: $dark

    &-button
      @extend %flex--row-center
      width: $unit*5
      padding: unset
      border: unset
      border-radius: 50%
      background: currentColor
</style>
