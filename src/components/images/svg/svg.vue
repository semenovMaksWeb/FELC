<template>
  <object class="svg"  type="image/svg+xml" :data="url">
    <img class="img"  :src="url" :alt="alt" />
  </object>
</template>

<script lang="ts">
import { ImagesProps } from "../imagesProps";

export default {
  name: "Svg",
  props: ImagesProps,
}
</script>

<style scoped>

</style>