import { Ref } from 'vue'
import { TagItemEmit } from '@/components/formElement/tagBase/tagItemBase/tagItemType'

export function tagItemBase (index: Ref<number>, emit:TagItemEmit) {
  const deleteTag = () => {
    emit('delete', index.value)
  }
  return {
    deleteTag
  }
}
