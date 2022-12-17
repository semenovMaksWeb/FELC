<template>
    <div class="tag-item">
        {{ text }}
        <div class="tag-item-close">X</div>
    </div>
</template>
<script lang="ts">
export default {
    name: "TagItemBase",
    props:{
        text: {
            type: String
        }
    }
}
</script>
<style lang="scss">
@import "tagItemBase.scss";
</style>