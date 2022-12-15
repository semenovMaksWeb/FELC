<template>
  <input
    :id="id"
    class="input"
    v-bind="$attrs"
    v-if="visible"
    :disable="disable"
    type="text"
    :name="name"
    autocomplete="off"
    :autofocus="autofocus"
    :placeholder="placeholder"
    :tabindex="tabindex"
  />
</template>

<script lang="ts">
export default {
  name: "InputBase",
  props:{
    id: {
      type: String
    },
    disable:{
      type: Boolean,
      default: false,
    },
    visible: {
      type: Boolean,
      default: true,
    },
    name: {
      type: String
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    placeholder:{
      type: String
    },
    tabindex:{
      type: Number
    }
  }
}
</script>

<style scoped>

</style>