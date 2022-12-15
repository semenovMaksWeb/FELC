<template>
  <img class="img" :src="url" :alt="alt">
</template>

<script lang="ts">
import { ImagesBaseProps } from "../imagesBaseProps";

export default {
  name: "ImgBase",
  props: ImagesBaseProps,
}
</script>

<style lang="scss">
@import "imgBase";
</style>