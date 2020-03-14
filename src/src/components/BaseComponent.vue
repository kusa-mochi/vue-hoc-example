<template>
    <div class="root">
        <div>data: {{sampleProp}}</div>
        <slot></slot>
        <slot name="test"></slot>
    </div>
</template>

<script>
export default {
    name: 'Base',
    data () {
        return {
            sampleProp: 123
        };
    }
}
</script>

<style lang="scss" scoped>
.root {
    background-color: rgba(#169632, 0.1);
    border: 1px gray solid;
    margin: 8px;
}
</style>