import { Ref, ref, watch } from "vue"
import { OptionBaseType } from "./optionBase/optionBaseType";

export function SelectBase(id: Ref<String>, list:Ref<OptionBaseType[]>, values:Ref<OptionBaseType>){
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
    const value: Ref<OptionBaseType> = ref(values.value ? values.value : {}); 

    /** отслеживание изменения пропса */
    watch( ()=>{
        return values.value
    }, () => {
        value.value = values.value;
    });

    const valueSave = (valueNews: OptionBaseType)=>{  
        value.value = valueNews;
        visibleFalse();
    }

    const inputValue = (event:any) => {       
        value.value = {
            id: undefined,
            value: event.target.value
        }        
    }

    const resetValue = () => {
        value.value = {
            id: undefined,
            value: undefined
        }
    }

    const validateValueClose = ()=>{
        if(!value.value.id && value.value.value){
            const filter = list.value.filter((e: OptionBaseType) => e.value === value.value.value)[0];
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
 
        value,
        valueSave,
        inputValue
    }
}