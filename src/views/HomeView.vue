<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <TestAttrs msg="xxxfffx" />
    <TestJsx msg="xxxfffx" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import TestAttrs from "@/components/TestAttrs.vue";
import TestJsx from "@/components/TestJsx";

export default Vue.extend({
  name: "HomeView",
  components: {
    HelloWorld,
    TestAttrs,
    TestJsx,
  },
});
</script>
