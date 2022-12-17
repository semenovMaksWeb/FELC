import { Ref, ref } from "vue"
import { OptionBaseType } from "./optionBase/optionBaseType";

export function SelectBase(id: Ref<String>, list:Ref<OptionBaseType[]>, values:Ref<OptionBaseType>, emit:any) {
    /** ВИДИМОСТЬ */
    const visible = ref(false);
    
    const visibleTrue = () => {
        visible.value = true;
        windowCreateEvent();
    }

    const visibleFalse = () => {
        visible.value = false;
        windowRemoveEvent();
        validateValueClose();
    }
    
    /** Значения */

    const valueSave = (valueNews: OptionBaseType) => { 
        emit("value", valueNews);
        visibleFalse();
    }

    const inputValue = (event:any) => {    
        emit("value", {
            id: undefined,
            value: event.target.value
        });      
    }

    const resetValue = () => {
        emit("value", {
            id: undefined,
            value: undefined
        });
    }

    const validateValueClose = ()=>{
        if(!values.value.id && values.value.value) {
            const filter = list.value.filter((e: OptionBaseType) => e.value === values.value.value)[0];
            if(!filter) {
                resetValue();
            } else {
                valueSave(filter);
            }
        }
    }

    /** логика состояние глобального клика для закрытия списка */
    const windowCreateEvent = () => {
        window.addEventListener("click", selectCloseEvent);
    }
    
    const windowRemoveEvent = () => {
        window.removeEventListener("click", selectCloseEvent);
    }
 
    const selectCloseEvent = (event:any) => {
        if(!event.target.closest(`#${id.value}`)) {
            visibleFalse();
        }            
    }

    return {
        visible,
        visibleTrue,
 
        valueSave,
        inputValue
    }
}