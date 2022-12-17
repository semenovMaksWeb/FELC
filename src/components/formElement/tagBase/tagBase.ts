import { ref, Ref } from "vue";

export function tagBase(values: Ref<String[]>, emit: any) {
    const valueInput = ref("");

    const pushEmit = () => {     
        values.value.push(valueInput.value);
        valueInput.value = "";
    }

    return {
        pushEmit,
        valueInput
    }
}