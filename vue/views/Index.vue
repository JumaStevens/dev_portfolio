<template lang='pug'>
main.container
  h2 Select Work
  Card
</template>


<script>
import Card from '~comp/Card.vue'

export default {
  components: {
    Card
  },
  data () {
    return {}
  }
}
</script>

<style lang='sass' scoped>
.container
  
  & h2
    color: black

</style>
