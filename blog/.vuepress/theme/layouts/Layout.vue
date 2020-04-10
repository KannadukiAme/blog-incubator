<template>
  <div>
    <Header />
    <Badge :icon="'fab fa-twitter'" :url="'http://www.google.com'"/>
    <Footer />
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

<style>
</style>
