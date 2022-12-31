import { Ref } from 'vue'

export interface TagProps {
  values: Ref<string[]>,
}

export type TagEmitValue = (name: string, params:string[]) => void;
export type TagEmitPush = (name: string, params:string) => void;
export type TagEmitDelete = (name: string, params:number) => void;

export type TagEmit = TagEmitValue & TagEmitPush & TagEmitDelete;

export interface TagContext {
  emit: TagEmit
}
