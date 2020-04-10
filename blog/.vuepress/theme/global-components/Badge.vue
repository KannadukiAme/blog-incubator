<template>
  <a class="badge" :href="url">
    <i :class="[icon, 'rotate']"></i>
  </a>
</template>

<script>
export default {
  name: "badge",
  props: {
    icon: String,
    url: String
  }
};
</script>

<style lang="stylus" scoped>
.badge
  color red
  font-size 2em
.rotate:hover
  animation spin 1s linear
@keyframes spin
  0%
    transform rotate(0deg)
  100%
    transform rotate(360deg)
</style>>
