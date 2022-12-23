import { Ref } from 'vue'
import { OptionBaseType } from '@/components/formElement/selectBase/optionBase/optionBaseType'

export interface selectProps {
  list: Ref<OptionBaseType[]>,
  id: string,
  values: Ref<OptionBaseType>,
}

export type SelectEmit = (name: string, params:OptionBaseType) => void;

export interface SelectContext{
  emit: SelectEmit
}
