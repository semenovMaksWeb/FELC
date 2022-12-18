import { ref, Ref } from "vue";

export function tagBase(values: Ref<String[]>, emit: any) {
    const valueInput = ref("");

    const pushEmit = () => {     
        emit("value", [...values.value, valueInput.value]);
        valueInput.value = "";
    }

    const deteleEmit = (index:number) => { 
        const value = values.value.slice(0, index);
        const value1 = values.value.slice(index + 1, values.value.length);          
        emit("value", value.concat(value1)); 
    }

    return {
        pushEmit,
        deteleEmit,
        valueInput  
    }
}