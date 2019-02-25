<template lang='pug'>
main(class='container-index')
  div(
    v-html='markdown'
    class='markdown'
  )
</template>


<script>


export default {
  async asyncData ({ params, store }) {
    const md = await import(`~/content/blog/${params.id}.md`)
    return { markdown: md.default }
  },
  components: {},
  data () {
    return {}
  },
  computed: {
  }
}
</script>

<style lang='sass'>
.container-index

.markdown

  & pre
    padding: $unit*2
    margin: $unit*2 0
    background: $grey

  & code
    padding: 0 $unit
    background: $grey

  & pre code
    padding: unset
</style>
