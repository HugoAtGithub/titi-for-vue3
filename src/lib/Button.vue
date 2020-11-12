<template>
  <div class="titi-button">
    <button :class="{[`theme-${theme}`]: theme}">
      <slot/>
    </button>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    theme: {
      type: String,
      default: 'button'
    }
  },

}
</script>
<style lang="scss">
div {
  border: 1px solid red;
}
</style>