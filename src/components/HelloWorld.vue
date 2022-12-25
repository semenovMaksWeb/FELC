<script  lang="ts">
import ImagesBase from "./imagesBase/imagesBase.vue";
import InputBase from "./formElement/inputBase/inputBase.vue";
import { Ref, ref } from 'vue'
import CheckboxBase from "./formElement/checkboxBase/checkboxBase.vue";
import LabelBase from "./formElement/labelBase/labelBase.vue";
import ButtonBase from '@/components/buttonBase/buttonBase.vue'
export default {
  components: { ButtonBase, CheckboxBase, InputBase, ImagesBase, LabelBase },
  setup(){
    const arrays :Ref<string[]> = ref([]);
    const arrayAdd = () => {
      arrays.value.push("1");
    }
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
    const styleImagePlus = {
      '--images-w': '15px'
    }
    const styleButton = {
      "--button-padding": "5px 10px",
      "--button-bg": "#424bac",
      "--button-color": "#fff",
      "--button-border-color": "#424bac"
    }
    return {
      style,
      value,
      valueSet,
      checkboxSet,
      checkbox,
      arrays,
      arrayAdd,
      styleButton,
      styleImagePlus
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
  <ButtonBase :disable="true" @click="arrayAdd" :title="'добавить строчку'" >
    <span style="margin-right: 5px;">Добавить</span>
    <ImagesBase :style="styleImagePlus" url="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"/>
  </ButtonBase>
  {{ arrays }}
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
