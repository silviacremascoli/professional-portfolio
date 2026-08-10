<template>
  <div class="home">
    <AppHero />
    <AppSkills />
    <AppAbout />
    <AppProjects />
    <AppContact />
  </div>
</template>

<script lang="ts">
import AppHero from "@/components/AppHero.vue";
import AppSkills from "@/components/AppSkills.vue";
import AppAbout from "@/components/AppAbout.vue";
import AppProjects from "@/components/AppProjects.vue";
import AppContact from "@/components/AppContact.vue";

export default {
  name: "HomeView",
  components: {
    AppHero,
    AppSkills,
    AppAbout,
    AppProjects,
    AppContact,
  },
};
</script>
