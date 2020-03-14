<template>
  <div id="app">
    <base-component>
      Base Component
      <div slot="test">Test Slot</div>
    </base-component>
    <enhanced-component>
      Enhanced Component
      <div slot="test">Test Slot</div>
    </enhanced-component>
  </div>
</template>

<script>
import HOC from "./hoc";
import BaseComponent from "./components/BaseComponent.vue";

export default {
  name: "App",
  components: {
    BaseComponent,
    EnhancedComponent: HOC(BaseComponent)
  }
};
</script>

<style lang="scss" scoped>
#app {
}
</style>
