import { computed, Ref } from 'vue'
import { OptionBaseType } from './optionBaseType'
import { OptionEmit } from '@/components/formElement/selectBase/optionBase/optionType'

export function optionBase (
  elem: Ref<OptionBaseType>,
  value: Ref<OptionBaseType>,
  emit:OptionEmit
) {
  const clickOption = () => {
    emit('value', elem.value)
  }

  const active = computed(() => {
    return elem.value.id === value.value?.id
  })

  return {
    clickOption,
    active
  }
}
