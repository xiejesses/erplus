<template lang="html">
    <div class="home">
      <Head></Head>
      <TopSlider></TopSlider>
      <Middle></Middle>
      <BottomSlider></BottomSlider>
      <Contact></Contact>
      <Footer></Footer>
    </div>
</template>

<script>
import Head from "../public/header.vue"
import TopSlider from "./topslider.vue"
import Middle from "./middle.vue"
import BottomSlider from "./bottomSlider.vue"
import Contact from "./contact.vue"
import Footer from "../public/footer.vue"
export default {
  components: {
    Head,
    TopSlider,
    Middle,
    BottomSlider,
    Contact,
    Footer
  }
}
</script>
<style lang="scss">
// .home {
//   max-height: 100%;
// }
</style>
