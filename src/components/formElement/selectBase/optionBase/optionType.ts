import { Ref } from 'vue'
import { OptionBaseType } from '@/components/formElement/selectBase/optionBase/optionBaseType'

export interface OptionProps{
  elem: Ref<OptionBaseType>,
  value: Ref<OptionBaseType>,
}

export type OptionEmit = (name: string, params:OptionBaseType) => void;

export interface OptionContext {
  emit: OptionEmit
}
