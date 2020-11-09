<template>
  <div>
    导航 |
    <router-link to="/">Frank1</router-link>
    |
    <router-link to="/xxx">Frank2</router-link>
  </div>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
}
</script>
