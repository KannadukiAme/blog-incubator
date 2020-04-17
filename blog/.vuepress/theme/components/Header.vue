<template>
  <div class="header">
    <h3 class="header-title">{{$site.title}}</h3>
    <Navbar class="header-nav" />
  </div>
</template>

<script>
import Navbar from "./Navbar";
export default {
  name: "header",
  components: {
    Navbar
  }
};
</script>

<style lang="stylus" scoped>
.header
  display flex
  justify-content space-between
  .header-title
    width 100px
    display flex
    align-items center
    justify-content center
  .header-nav
    width 300px
</style>
