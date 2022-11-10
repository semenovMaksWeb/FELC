<template>
  <input
      v-if="visible"
      :disable="disable"
      type="text" :name="name"
  />
</template>

<script>
export default {
  name: "Input",
  props:{
    disable:{
      type: Boolean
    },
    visible: {
      type: Boolean
    },
    name: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>