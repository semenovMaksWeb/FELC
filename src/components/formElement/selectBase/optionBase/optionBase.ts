import { computed, Ref } from "vue";
import { OptionBaseType } from "./optionBaseType";

export function optionBase(
        elem: Ref<OptionBaseType>, 
        value: Ref<OptionBaseType>, 
        emit:any,
    ){    
    const clickOption = () => {     
        emit("value", elem.value);
    }

    const active = computed( () => {
        return elem.value.id == value.value?.id
    })

    return {
        clickOption,
        active
    }
}