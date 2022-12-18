const ImagesBase = defineAsyncComponent(() =>
  import('./components/imagesBase/imagesBase.vue')
)

const CheckboxBase = defineAsyncComponent(() =>
  import('./components/formElement/checkboxBase/checkboxBase.vue')
)

const InputBase = defineAsyncComponent(() =>
  import('./components/formElement/inputBase/inputBase.vue')
)

const LabelBase = defineAsyncComponent(() =>
  import('./components/formElement/labelBase/labelBase.vue')
)

const SelectBase = defineAsyncComponent(() =>
  import('./components/formElement/selectBase/selectBase.vue')
)

const TagBase = defineAsyncComponent(() =>
  import('./components/formElement/tagBase/tagBase.vue')
)

export {
    ImagesBase,
    CheckboxBase,
    InputBase,
    LabelBase,
    SelectBase,
    TagBase
}