<template>
  <div class="blog">
    <p>Hello</p>
  </div>
</template>

<script lang="ts">
import AppNav from "../components/AppNav.vue";
import AppFooter from "../components/AppFooter.vue";

export default {
  name: "Blog",
  components: {
    AppNav,
    AppFooter,
  },
};
</script>

<style lang="scss" scoped>
  .blog {
    flex-grow: 1;
  }
</style>
