<template>
    <div class="select" :id="id">
        <input @input="inputValue" :value="values?.value" type="text" @focus="visibleTrue">
        <div class="wrapper-option" v-if="visible">
            <OptionBase
                :value="values"
                @value="valueSave"
                v-for="elem of list"
                :key="elem.id"
                :elem="elem"
            />
        </div>
    </div>
</template>
<script lang="ts">
import { PropType, toRefs } from 'vue'
import OptionBase from './optionBase/optionBase.vue'
import { OptionBaseType } from './optionBase/optionBaseType'
import { SelectBase } from './selectBase'
import { SelectContext, selectProps } from '@/components/formElement/selectBase/selectType'

export default {
  name: 'SelectBase',
  emits: ['value'],
  components: { OptionBase },
  props: {
    list: {
      type: Object as PropType<OptionBaseType[]>,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    values: {
      type: Object as PropType<OptionBaseType>,
      required: true
    }
  },
  setup (props: selectProps, { emit }: SelectContext) {
    const { id, list, values } = toRefs(props)
    return {
      ...SelectBase(id, list, values, emit)
    }
  }
}
</script>
<style lang="scss">
@import "selectBase.scss";
</style>
