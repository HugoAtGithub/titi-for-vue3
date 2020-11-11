<template>
  <div>
    <Switch :value="y" @update:value="y = $event"/>
  </div>
  <div>{{ y }}</div>
</template>

<script>
import Switch from '../lib/Switch.vue';
import {ref} from "vue";

export default {
  components: {Switch},
  setup() {
    const y = ref(false)
    return {y}
  }
}
</script>

