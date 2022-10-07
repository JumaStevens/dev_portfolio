<template lang='pug'>
main(class='container-index')
  Hero
  Services
  Work
  About
  Testimonial
  Pricing
  ContactUsFooter
</template>


<script>
import Hero from '~/components/Hero.vue'
import Services from '~/components/Services.vue'
import Work from '~/components/Work.vue'
import Testimonial from '~/components/Testimonial.vue'
import About from '~/components/About.vue'
import Contact from '~/components/Contact.vue'
import ContactUsFooter from '~/components/compositions/ContactUsFooter.vue'
import Pricing from '~/components/compositions/Pricing.vue'

export default {
  components: {
    Hero,
    Services,
    Work,
    Testimonial,
    About,
    Contact,
    ContactUsFooter,
    Pricing
  },
  data () {
    return {}
  }
}
</script>

<style lang='sass' scoped>
.container-index



</style>
