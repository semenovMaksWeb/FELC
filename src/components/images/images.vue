<template>
  <Img class="images" v-bind="$attrs" :url="url" v-if="type === 'img'" />
  <Svg class="images" v-bind="$attrs" :alt="alt" :url="url" v-if="type === 'svg'" />
</template>

<script lang="ts">
import { ImagesProps } from "./imagesProps";
import Img from "./img/img.vue";
import Svg from "./svg/svg.vue";

export default {
  name: "images",
  components: { Svg, Img },
  props: {
    ...ImagesProps,
    type: {
      type: String,
      default: "img"
    }
  },
}
</script>

<style lang="scss">
@import "images";
</style>