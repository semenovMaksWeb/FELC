<template>
  <input
    :id="id"
    class="checkbox"
    v-bind="$attrs"
    v-if="visible"
    :disable="disable"
    type="checkbox"
    :name="name"
    :autofocus="autofocus"
    :tabindex="tabindex"
  />

</template>

<script lang="ts">
export default {
  name: 'CheckboxBase',
  props: {
    id: {
      type: String
    },
    disable: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: true
    },
    name: {
      type: String
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String
    },
    tabindex: {
      type: Number
    }
  }
}
</script>

<style lang="scss">

</style>
