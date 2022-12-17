<template>
    <div class="tag">
        <div class="tag-container">
            <TagItemBase v-for="elem of values" :text="elem" />
        </div>
        <input v-model="valueInput" @keyup.enter="pushEmit" class="tag-input" />
    </div>
</template>

<script lang="ts">
import { PropType, toRefs } from 'vue';
import { tagBase } from './tagBase';
import TagItemBase from './tagItemBase/tagItemBase.vue';

export default {
    name: "TagBase",
    props: {
        values: {
            type: Object as PropType<string[]>,
            required: true
        }
    },
    components: { TagItemBase },
    setup(props, { emit }) {
        const  { values } = toRefs(props);
        return {
            ...tagBase(values, emit)
        }
    }
}
</script>

<style lang="scss">
@import "tagBase.scss" 
</style>