<template>
  <div class="navbar">
    <template v-for="(item, index) in $site.themeConfig.nav">
      <NavbarItem class="navbar-item" :text="item.text" :url="item.link" />
    </template>
  </div>
</template>

<script>
import NavbarItem from "./NavbarItem";
export default {
  name: "navbar",
  components: {
    NavbarItem
  }
};
</script>

<style lang="stylus" scope>
.navbar
  display flex
  justify-content center
</style>
