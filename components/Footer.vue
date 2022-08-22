<template lang='pug'>
div(class='container-footer')
  footer(class='footer')
    p(class='footer__copywrite') {{ copywrite }}
</template>


<script>

export default {
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {
    copywrite() {
      const year = new Date().getFullYear()
      return `©${year} Juma Stevens`
    }
  },
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-footer
  border-top: 1px solid $separator


.footer
  @extend %container-content
  @extend %flex--row-center
  min-height: $unit*6

  &__copywrite
    font-size: $fs-1

</style>
