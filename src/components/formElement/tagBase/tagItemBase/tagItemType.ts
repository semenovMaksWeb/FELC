import { Ref } from 'vue'

export interface TagItemProps {
  text: Ref<string>,
  index: Ref<number>,
}

export type TagItemEmit = (name: string, index:number) => void;

export interface TagItemContext {
  emit: TagItemEmit
}
