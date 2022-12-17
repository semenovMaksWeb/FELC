<template>
    <div class="select" :id="id">
        <input @input="inputValue" :value="value?.value" type="text" @focus="visibleTrue">
        <div class="wrapper-option" v-if="visible">
            <OptionBase 
                :value="value"
                @value="valueSave"
                v-for="elem of list" 
                :key="elem.id" 
                :elem="elem"
            />
        </div>
    </div>
</template>
<script lang="ts">
import { PropType, toRefs } from 'vue';
import OptionBase from './optionBase/optionBase.vue';
import { OptionBaseType } from "./optionBase/optionBaseType";
import { SelectBase } from './selectBase';
export default {
    name: "selectBase",
    components: { OptionBase },
    props:{
        list: {
            type: Object as PropType<OptionBaseType[]>,
            required: true
        },
        id: {
            type: String,
            required: true
        },
    },
    setup(props){
        const { id, list } = toRefs(props);
        return {
            ...SelectBase(id, list)
        }
    }
}
</script>
<style lang="scss">
@import "selectBase.scss"
</style>