<template lang='pug'>
main(class='container-index')
  Hero
  Services
  Work
  Testimonial
  About
  Contact
</template>


<script>
import Hero from '~/components/Hero.vue'
import Services from '~/components/Services.vue'
import Work from '~/components/Work.vue'
import Testimonial from '~/components/Testimonial.vue'
import About from '~/components/About.vue'
import Contact from '~/components/Contact.vue'


export default {
  components: {
    Hero,
    Services,
    Work,
    Testimonial,
    About,
    Contact
  },
  data () {
    return {}
  }
}
</script>

<style lang='sass' scoped>
.container-index



</style>
