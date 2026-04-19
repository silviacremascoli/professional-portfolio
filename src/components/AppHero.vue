<template>
  <ParticlesBg />
  <header class="header">
    <h1 class="my-name">John Smith</h1>
    <h2>
      <span class="my-role">{{ typingValue }}</span>
      <span class="blinking-cursor">|</span>
      <span :class="{ typing: typingStatus }">&nbsp;</span>
    </h2>
    <AppClouds />
  </header>
</template>

<script lang="ts">
import ParticlesBg from "./ParticlesBg.vue";
import AppClouds from "./AppClouds.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppHero",
  components: {
    ParticlesBg,
    AppClouds,
  },
  data() {
    return {
      typingValue: "" as string,
      typingStatus: false as boolean,
      displayRoleArray: [
        "BlockChain Architect",
        "IoT Solution Architect",
        "Supply Chain Manager",
        "Digital Transformation Expert",
        "Sustainability Enthusiast",
      ] as string[],
      typingSpeed: 100 as number,
      deletingSpeed: 100 as number,
      newTextDelay: 2000 as number,
      displayRoleArrayIndex: 0 as number,
      charIndex: 0 as number,
    };
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
    // The typeText function types out characters one by one until the entire string is displayed, and then it triggers the eraseText function to erase characters one by one until the display role is cleared. It then moves to the next display role and repeats the process in a loop
    typeText(): any {
      if (
        this.charIndex <
        this.displayRoleArray[this.displayRoleArrayIndex].length
      ) {
        if (!this.typingStatus) this.typingStatus = true;
        this.typingValue += this.displayRoleArray[
          this.displayRoleArrayIndex
        ].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typingStatus = false;
        setTimeout(this.deleteText, this.newTextDelay);
      }
    },
    deleteText(): any {
      if (this.charIndex > 0) {
        if (!this.typingStatus) this.typingStatus = true;
        this.typingValue = this.displayRoleArray[
          this.displayRoleArrayIndex
        ].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.deleteText, this.deletingSpeed);
      } else {
        this.typingStatus = false;
        this.displayRoleArrayIndex += 1;
        if (this.displayRoleArrayIndex >= this.displayRoleArray.length)
          this.displayRoleArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.header {
  max-width: 100%;

  h1 {
    font-size: rem(72);
    margin-top: rem(80);
    margin-bottom: rem(10);
    font-family: $heading-font;

    @include media-breakpoint-up(lg) {
      font-size: rem(88);
    }
  }

  h2 {
    font-size: rem(36);
    font-weight: $light-bold;
    margin-bottom: rem(50);

    @include media-breakpoint-up(lg) {
      font-size: $h2-font-size;
    }
  }

  .my-name {
    @include text-gradient(linear-gradient(to right, #ff4a57 0%, #1f2235 100%));
  }

  .my-role {
    @include text-gradient(linear-gradient(to right, #1f2235 0%, #ff4a57 100%));
  }

  .blinking-cursor {
    font-size: rem(42);
    color: $tertiary-color;
    animation: blink 1s step-end infinite;

    @include media-breakpoint-up(lg) {
      font-size: rem(54);
    }
  }

  @keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: $tertiary-color;
    }
  }
  .clouds {
    fill: $tertiary-color;
  }
}
</style>
