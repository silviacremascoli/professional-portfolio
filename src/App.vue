<template>
  <div id="app">
    <AppNav />
    <AppScrollTopButton />
    <main class="main-content">
      <router-view></router-view>
    </main>
    <AppFooter />
  </div>
</template>

<script lang="ts">
import AppNav from "./components/AppNav.vue";
import AppScrollTopButton from "./components/AppScrollTopButton.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppNav,
    AppScrollTopButton,
    AppFooter,
  },
};
</script>

<style lang="scss">
html, body {
  height: 100%;
  margin: 0;
}

#app {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1 0 auto;
}
</style>
