import { Ref } from 'vue'

export interface TagProps {
  values: Ref<string[]>,
}

export type TagEmit = (name: string, params:string[]) => void;

export interface TagContext {
  emit: TagEmit
}
