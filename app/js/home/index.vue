<template lang="html">
    <div>
      <Heador></Heador>
      <!-- <Slider></Slider> -->
      <TopSlider></TopSlider>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
// import Slider from "./hslider.vue"
import TopSlider from "./topslider.vue"
export default {
  components: {
    Heador,
    // Slider
    TopSlider
  }
}
</script>

