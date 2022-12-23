<template>
  <object class="svg"  type="image/svg+xml" :data="url">
    <img class="img"  :src="url" :alt="alt" />
  </object>
</template>

<script lang="ts">
import { ImagesBaseProps } from '../imagesBaseProps'

export default {
  name: 'SvgBase',
  props: ImagesBaseProps
}
</script>

<style lang="scss">
</style>
