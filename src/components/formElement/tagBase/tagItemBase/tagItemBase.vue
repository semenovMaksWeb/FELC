<template>
    <div class="tag-item">
        {{ text }}
        <div @click="deleteTag" class="tag-item-close">X</div>
    </div>
</template>
<script lang="ts">
import { toRefs } from 'vue';
import { tagItemBase } from "./tagItemBase"

export default {
    name: "TagItemBase",
    emits: ["delete"],
    props: {
        text: {
            type: String,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    setup(props, { emit }){
        const { index } = toRefs(props);
        return {
            ...tagItemBase(index, emit)
        }
    }
}
</script>
<style lang="scss">
@import "tagItemBase.scss";
</style>