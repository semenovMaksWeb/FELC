<template>
    <label class="label" :for="id">
        <span class="label-text">{{ text }}</span>
        <span class="label-required" v-if="required">*</span>
    </label>
</template>
<script lang="ts">
export default {
  name: 'LabelBase',
  props: {
    id: {
      type: String
    },
    text: {
      type: String
    },
    required: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss">
@import "labelBase.scss";
</style>
