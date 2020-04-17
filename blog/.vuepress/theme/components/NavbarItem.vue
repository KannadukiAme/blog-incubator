<template>
  <div class="navbar-item">
    <a :href="url">{{text}}</a>
  </div>
</template>

<script>
export default {
  name: "navbar-item",
  props: {
    text: String,
    url: String
  }
};
</script>

<style lang="stylus" scoped>
.navbar-item
  display flex
  width 80px
  align-items center
  justify-content center
  a
    align-self center
    text-decoration none
    color black
  a:hover
    margin-bottom -2px
    border-bottom 2px solid rgb(254, 223, 225)
.navbar-item:hover
  background-color rgb(254, 223, 225)
</style>
