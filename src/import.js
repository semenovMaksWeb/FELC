import Vue from 'vue'

const components = {
  ImagesBase: import('./components/imagesBase/imagesBase.vue'),
  CheckboxBase: import('./components/formElement/checkboxBase/checkboxBase.vue'),
  InputBase: import('./components/formElement/inputBase/inputBase.vue'),
  LabelBase: import('./components/formElement/labelBase/labelBase.vue'),
  SelectBase: import('./components/formElement/selectBase/selectBase.vue'),
  TagBase: import('./components/formElement/tagBase/tagBase.vue')
}
Object.keys(components).forEach(name => {
  Vue.component(name, components[name])
})

export default components
