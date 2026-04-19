<template>
  <div id="app">
    <AppNav />
    <AppScrollTopButton />
    <AppHero />
    <AppSkills />
    <AppAbout />
    <AppProjects />
    <AppContact />
    <AppFooter />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import AppNav from "./components/AppNav.vue";
import AppScrollTopButton from "./components/AppScrollTopButton.vue";
import AppHero from "./components/AppHero.vue";
import AppSkills from "./components/AppSkills.vue";
import AppAbout from "./components/AppAbout.vue";
import AppProjects from "./components/AppProjects.vue";
import AppContact from "./components/AppContact.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppNav,
    AppScrollTopButton,
    AppHero,
    AppSkills,
    AppAbout,
    AppProjects,
    AppContact,
    AppFooter,
  },
};
</script>

<style></style>
