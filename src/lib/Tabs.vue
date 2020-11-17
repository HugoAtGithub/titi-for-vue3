<template>
  <div class="titi-tabs">
    <div class="titi-tabs-nav">
      <div class="titi-tabs-nav-item" v-for="(title, index) in titles" :key="index"
           @click="select(title)" :class="{selected: title === selected}">
        {{ title }}
      </div>
      <div class="titi-tabs-nav-indicator"></div>
    </div>
    <div class="titi-tabs-content">
      <component class="titi-tabs-content-item" :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>
<script lang="ts">
import Tab from './Tab.vue'
import {computed} from 'vue'

export default {
  props: {
    selected: {
      type: String
    }
  },
  setup: function (props, context) {
    const defaults = context.slots.default()
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })
    const titles = defaults.map(tag => {
      return tag.props.title
    })
    const current = computed(() => {
      return defaults.find(tag => tag.props.title === props.selected)
    })
    const select = (title: string) => {
      context.emit('update:selected', title)
    }
    return {defaults, titles, current, select}
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
    position: relative;

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
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>