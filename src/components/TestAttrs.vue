<template>
  <div>
    <HelloWorld v-bind="$attrs" v-on="$listeners"></HelloWorld>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  components: {
    HelloWorld,
  },
  setup() {
    return {};
  },
});
</script>
