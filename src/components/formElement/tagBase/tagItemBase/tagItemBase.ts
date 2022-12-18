import { Ref } from "vue";

export function tagItemBase(index: Ref<number>, emit:any){
    const deleteTag = () => {
        emit("delete", index.value);  
    }
    return {
        deleteTag
    }
}