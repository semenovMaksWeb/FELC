<script  lang="ts">
import imagesBase from "./imagesBase/imagesBase.vue";
import InputBase from "./formElement/inputBase/inputBase.vue";
import { ref }  from "vue";
import CheckboxBase from "./formElement/checkboxBase/checkboxBase.vue";
import LabelBase from "./formElement/labelBase/labelBase.vue";
export default {
  components: { CheckboxBase, InputBase, imagesBase, LabelBase },
  setup(){
    const checkbox = ref(false);
    const value = ref("12");
    const valueSet = (el:any) => {
      value.value = el.target.value;
    };
    const checkboxSet = (el:any) => {
      checkbox.value = el.target.checked;
    };
    const style = {
      '--images-w': '200px'
    }
    return {
      style,
      value,
      valueSet,
      checkboxSet,
      checkbox
    }
  }
}

</script>

<template>
  <div style="width: 200px;"  class="flex-row">
    <div>Images</div>
    <imagesBase :style="style" alt="13" url="https://www.svgrepo.com/show/429855/cactus-desert-hot.svg" type="svg" />
  </div>
  <div style="width: 250px;display: flex;flex-direction: column;">
    <div>Input</div>
    <div class="flex-form-elem">
      <LabelBase :id="'form-1-login'" :text="'логин'" />
      <InputBase :id="'form-1-login'" style="margin-left: 20px;" :tabindex="1" :placeholder="'тест'" :name="'login'" />
    </div>
    <div class="flex-form-elem">
      <LabelBase :required="true" :id="'form-1-password'" :text="'пароль'" />
      <InputBase :id="'form-1-password'" style="margin-left: 5px;" :tabindex="2" @input="valueSet" :value="value"  :name="'password'" :autofocus="true" />
    </div>
     {{ value }}
  </div>
  <div style="width: 200px;"  class="flex-row">
    <div>CheckboxBase</div>
    <CheckboxBase @input="checkboxSet" :checked="checkbox" :tabindex="3" :name="'гость'"/>
    {{checkbox}}
  </div>

</template>

<style>
.flex-form-elem{
  display: flex;
  margin-bottom: 7px;
}
.flex-row{
  display: flex;
  flex-direction: column;
  align-items: center;
}
datalist {
  position: absolute;
  max-height: 20em;
  border: 0 none;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>