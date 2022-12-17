<template>
    <div :class="{ active: active }" @click="clickOption" class="option">{{ elem.value }}</div>
</template>
<script lang="ts">
import { PropType, toRefs } from 'vue';
import { optionBase } from './optionBase';
import { OptionBaseType } from './optionBaseType';

export default {
    name: "optionBase",
    emits:["value"],
    props:{
        elem:{
            type: Object as PropType<OptionBaseType>,
            required: true  
        },
        value:{
            type: Object as PropType<OptionBaseType>,
            required: true
        }
    },
    setup(props, { emit }){
        const { elem, value } = toRefs(props);
        return {
            ...optionBase(elem, value, emit)
        }
    }
}
</script>
<style lang="scss">
@import "optionBase.scss"
</style>