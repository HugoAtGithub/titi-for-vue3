<template>
  <div> Dialog 示例</div>
  <Demo :component="Dialog1Demo"/>
  <Demo :component="Dialog2Demo"/>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Dialog1Demo from "../components/Dialog1.demo.vue";
import Dialog2Demo from "../components/Dialog2.demo.vue";

export default {
  components: {
    Demo
  },
  setup() {
    return {
      Dialog1Demo,
      Dialog2Demo
    }
  }
}

</script>
