<template>
  <button
    v-on:click.prevent="scrollToTop"
    id="scroll-top-button"
    :style="{ display: display ? 'block' : 'none' }"
  >
    <i class="fa-regular fa-hand-point-up"></i>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      display: false as boolean,
      scrollPosition: 0 as number,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.detectScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.detectScroll);
  },
  methods: {
    // the scrollToTop function scrolls back to the top of the page with a smooth effect, while the detectScroll function makes the button appear only after the user has scrolled down
    scrollToTop(event: Event) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
    detectScroll(event: Event) {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition > 500) {
        this.display = true;
      } else {
        this.display = false;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
#scroll-top-button {
  $size: pxToRem(50);

  position: fixed;
  right: pxToRem(20);
  bottom: pxToRem(20);
  width: $size;
  height: $size;
  z-index: 99;
  border-radius: $round-border-radius;
  background: $tertiary-color;
  box-shadow: 0 0 pxToRem(10) rgba(0, 0, 0, 0.5);
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.2);
  }

  i {
    color: $secondary-color;
    font-size: pxToRem(28);
  }
}
</style>
