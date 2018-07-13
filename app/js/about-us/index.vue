<template lang="html">
    <div class="about-us">
      <Head></Head>
      <Content></Content>
      <Download></Download>
      <Footer></Footer>
    </div>
</template>

<script>
import Head from "../public/header.vue"
import Content from "./content.vue"
import Download from "../public/download.vue"
import Footer from "../public/footer.vue"
export default {
  components: {
    Head,
    Content,
    Download,
    Footer
  }
}
</script>
<style lang="scss">
// .about-us {
//   max-height: 100%;
// }
</style>
