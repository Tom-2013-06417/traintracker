<template>
  <span v-html="require(`@/assets/img/${icon}.svg`)"></span>
</template>

<script>
export default {
  props: ['icon']
}
</script>
