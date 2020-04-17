<template>
  <div class="layout">
    <Header class="layout-header" />
    <div class="layout-content">内容</div>
    <Footer class="layout-footer" />
  </div>
</template>

<script>
import Header from "@theme/components/Header";
import Footer from "@theme/components/Footer";

export default {
  name: "layout",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="stylus" scoped>
.layout
  // background-image url('/1.jpg')
  // background-attachment fixed
  // background-position center
  // background-repeat no-repeat
  // background-size cover
  display grid
  height 100vh
  grid-template-columns 1fr
  grid-template-rows 60px 1fr 50px
  grid-template-areas 'header' 'content' 'footer'
  .layout-header
    background-color white
    grid-area 'header'
  .layout-content
    grid-area 'content'
  .layout-footer
    background-color white
    grid-area 'footer'
</style>
