<template lang="html">
    <div class="home">
      <Heador></Heador>
      <!-- <Slider></Slider> -->
      <TopSlider></TopSlider>
      <Slogan></Slogan>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import TopSlider from "./topslider.vue"
import Slogan from "./slogan.vue"
export default {
  components: {
    Heador,
    TopSlider,
    Slogan,
  }
}
</script>
<style lang="scss">

</style>
