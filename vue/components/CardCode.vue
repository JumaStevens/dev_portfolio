<template lang='pug'>
div(class='container-code')

  figure(class='code')
    p(class='code__line')
      span(class='code__text white') &lt;
      span(class='code__text red') template
      span(class='code__text yellow') &nbsp; lang
      span(class='code__text white') =
      span(class='code__text green') "pug"
      span(class='code__text white') &gt;

    p(class='code__line')
      span(class='code__text red') Card
      span(class='code__text yellow') (class
      span(class='code__text white') =
      span(class='code__text green') "card"
      span(class='code__text yellow') )

    p(class='code__line')
      span(class='code__text white') &lt;/
      span(class='code__text red') template
      span(class='code__text white') &gt;

    p(class='code__line')
      | <br>
      span(class='code__text white') &lt;
      span(class='code__text red') script
      span(class='code__text white') &gt;

    p(class='code__line')
      span(class='code__text purple') import
      span(class='code__text red') &nbsp; Card
      span(class='code__text purple') &nbsp; from
      span(class='code__text green') &nbsp; "~comp/Card.vue"

    p(class='code__line')
      | <br>
      span(class='code__text purple') export
      span(class='code__text red') &nbsp; default
      span(class='code__text white') &nbsp; {

    p(class='code__line')
      | &nbsp; &nbsp;
      span(class='code__text white') components
      span(class='code__text blue') :
      span(class='code__text white') &nbsp; {
        | &nbsp;
        | Card
        | &nbsp;
        | }

    p(class='code__line')
      span(class='code__text white') }

    p(class='code__line')
      span(class='code__text white') &lt;/
      span(class='code__text red') script
      span(class='code__text white') &gt;
</template>


<script>

export default {
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-code

.code
  @extend %card-container
  height: 100%
  padding: $unit*3 $unit*8 $unit*3 $unit*2
  margin: 0
  // background: rgba(41, 44, 52, 1)
  +mq-s
    padding: $unit*3 $unit*4 $unit*3 $unit*2
  +mq-m
    padding: $unit*3 $unit*8 $unit*3 $unit*2

  &__line

  &__text
    font-size: 12px
    +mq-xs
      font-size: $fs
    +mq-s
      font-size: 12px
    +mq-m
      font-size: $fs

    &.purple
      color: rgba(187, 126, 215, 1)
    &.yellow
      color: rgba(201, 155, 110, 1)
    &.blue
      color: rgba(115, 171, 181, 1)
    &.green
      color: rgba(161, 193, 129, 1)
    &.red
      color: rgba(210, 115, 119, 1)
    &.white
      color: rgba(172, 178, 190, 1)
    &.grey
      color: rgba(93, 99, 108, 1)

</style>
