<template>
  <div class="titi-tabs">
    <div class="titi-tabs-nav">
      <div class="titi-tabs-nav-item" v-for="(title, index) in titles" :key="index">{{ title }}</div>
    </div>
    <div class="titi-tabs-content">
      <component class="titi-tabs-content-item" v-for="(tab, index) in defaults" :key="index" :is="tab"></component>
    </div>
  </div>
</template>
<script lang="ts">
import Tab from './Tab.vue'

export default {
  setup(props, context) {
    const defaults = context.slots.default()
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })
    const titles = defaults.map(tag => {
      return tag.props.title
    })
    return {defaults, titles}
  }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.titi-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-color: 1px solid $border-color;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>