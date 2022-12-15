<template>
  <imgBase class="images" v-bind="$attrs" :url="url" v-if="type === 'img'"/>
  <SvgBase class="images" v-bind="$attrs" :alt="alt" :url="url" v-if="type === 'svg'" />
</template>

<script lang="ts">
import { ImagesBaseProps } from "./imagesBaseProps";
import imgBase from "./imgBase/imgBase.vue";
import SvgBase from "./svgBase/svgBase.vue";

export default {
  name: "imagesBase",
  components: { SvgBase, imgBase },
  props: {
    ...ImagesBaseProps,
    type: {
      type: String,
      default: "img"
    }
  },
}
</script>

<style lang="scss">
@import "imagesBase";
</style>