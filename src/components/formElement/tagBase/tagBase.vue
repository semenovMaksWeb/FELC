<template>
    <div class="tag">
        <div class="tag-container">
            <TagItemBase @delete="deleteEmit" v-for="(elem, index) of values" :text="elem" :key="elem" :index="index" />
        </div>
        <input v-model="valueInput" @keyup.enter="pushEmit" class="tag-input" />
    </div>
</template>

<script lang="ts">
import { PropType, toRefs } from 'vue'
import { tagBase } from './tagBase'
import TagItemBase from './tagItemBase/tagItemBase.vue'
import { TagContext, TagProps } from '@/components/formElement/tagBase/tagType'

export default {
  name: 'TagBase',
  emits: ['value'],
  props: {
    values: {
      type: Object as PropType<string[]>,
      required: true
    }
  },
  components: { TagItemBase },
  setup (props:TagProps, { emit }:TagContext) {
    const { values } = toRefs(props)
    return {
      ...tagBase(values, emit)
    }
  }
}
</script>

<style lang="scss">
@import "tagBase.scss";
</style>
