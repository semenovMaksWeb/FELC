<template>
  <button v-if="visible" :disabled="disable" class="button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'ButtonBase',
  props: {
    disable: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
@import "buttonBase.scss";
</style>
