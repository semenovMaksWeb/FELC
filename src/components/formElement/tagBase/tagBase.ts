import { ref, Ref } from 'vue'
import { TagEmit } from '@/components/formElement/tagBase/tagType'

export function tagBase (values: Ref<string[]>, emit: TagEmit) {
  const valueInput = ref('')

  const pushEmit = () => {
    emit('push', valueInput.value);
    valueInput.value = ''
  }

  const deleteEmit = (index:number) => {
    emit('delete', index);
  }

  return {
    pushEmit,
    deleteEmit,
    valueInput
  }
}
