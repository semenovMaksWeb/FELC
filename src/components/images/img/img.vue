<template>
  <img class="img" :src="url" :alt="alt">
</template>

<script lang="ts">
import { ImagesProps } from "../imagesProps";

export default {
  name: "Img",
  props: ImagesProps,
}
</script>

<style scoped>

</style>