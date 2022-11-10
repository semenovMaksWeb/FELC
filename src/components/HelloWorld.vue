<script setup lang="ts">
import { ref } from 'vue'
import Images from "./images/images.vue"
defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <Images :style="{'--images-w': '200px'}" alt="13" url="https://www.svgrepo.com/show/429855/cactus-desert-hot.svg" type="svg" />
</template>