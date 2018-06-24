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
import Hero from '~comp/Hero.vue'
import Services from '~comp/Services.vue'
import Work from '~comp/Work.vue'
import Testimonial from '~comp/Testimonial.vue'
import About from '~comp/About.vue'
import Contact from '~comp/Contact.vue'


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
