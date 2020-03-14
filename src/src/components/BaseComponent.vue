<template>
    <div class="root" @click="TestMethod">
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
    },
    methods: {
        TestMethod() {
            alert("test method !!!");
        }
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