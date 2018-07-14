<template>
  <v-app>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
