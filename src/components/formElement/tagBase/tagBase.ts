import { ref, Ref } from 'vue'
import { TagEmit } from '@/components/formElement/tagBase/tagType'

export function tagBase (values: Ref<string[]>, emit: TagEmit) {
  const valueInput = ref('')

  const pushEmit = () => {
    emit('value', [...values.value, valueInput.value])
    valueInput.value = ''
  }

  const deleteEmit = (index:number) => {
    const value = values.value.slice(0, index)
    const value1 = values.value.slice(index + 1, values.value.length)
    emit('value', value.concat(value1))
  }

  return {
    pushEmit,
    deleteEmit,
    valueInput
  }
}
