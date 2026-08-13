<template>
  <section class="skills-section" id="skills">
    <h2 class="mb-4">Expertise</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem
      leo.<br />
      Praesent pellentesque nisi id augue tempus, eu dictum augue lobortis.
    </p>
    <hr />
    <div class="container">
      <div class="row pb-5">
        <div class="col-lg-4">
          <div
            class="skill"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-easing="ease-in"
          >
            <i class="fa-solid fa-link mb-3"></i>
            <h3 class="mb-4">Digital Transformation</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
              amet sem leo. Praesent pellentesque nisi id augue tempus, eu
              dictum augue lobortis. Donec tincidunt sagittis enim. Fusce
              tincidunt sagittis nisi, vitae sodales mauris sollicitudin et.
              Suspendisse bibendum orci eget vulputate auctor. Integer quis quam
              elit. Maecenas sed ipsum eros.
            </p>
          </div>
        </div>
        <div class="col-lg-4">
          <div
            class="skill"
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-easing="ease-in"
          >
            <i class="fa-brands fa-aws mb-3"></i>
            <h3 class="mb-4">Amazon Web Services</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
              amet sem leo. Praesent pellentesque nisi id augue tempus, eu
              dictum augue lobortis. Donec tincidunt sagittis enim. Fusce
              tincidunt sagittis nisi, vitae sodales mauris sollicitudin et.
              Suspendisse bibendum orci eget vulputate auctor. Integer quis quam
              elit. Maecenas sed ipsum eros.
            </p>
          </div>
        </div>
        <div class="col-lg-4">
          <div
            class="skill"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-easing="ease-in"
          >
            <i class="fa-brands fa-windows mb-3"></i>
            <h3 class="mb-4">Microsoft Azure</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
              amet sem leo. Praesent pellentesque nisi id augue tempus, eu
              dictum augue lobortis. Donec tincidunt sagittis enim. Fusce
              tincidunt sagittis nisi, vitae sodales mauris sollicitudin et.
              Suspendisse bibendum orci eget vulputate auctor. Integer quis quam
              elit. Maecenas sed ipsum eros.
            </p>
          </div>
        </div>
        <div class="col-lg-4">
          <div
            class="skill"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-easing="ease-in"
          >
            <i class="fa-brands fa-google mb-3"></i>
            <h3 class="mb-4">Google Cloud</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
              amet sem leo. Praesent pellentesque nisi id augue tempus, eu
              dictum augue lobortis. Donec tincidunt sagittis enim. Fusce
              tincidunt sagittis nisi, vitae sodales mauris sollicitudin et.
              Suspendisse bibendum orci eget vulputate auctor. Integer quis quam
              elit. Maecenas sed ipsum eros.
            </p>
          </div>
        </div>
        <div class="col-lg-4">
          <div
            class="skill"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-easing="ease-in"
          >
            <i class="fa-solid fa-wifi mb-3"></i>
            <h3 class="mb-4">Industrial IoT Solutions</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
              amet sem leo. Praesent pellentesque nisi id augue tempus, eu
              dictum augue lobortis. Donec tincidunt sagittis enim. Fusce
              tincidunt sagittis nisi, vitae sodales mauris sollicitudin et.
              Suspendisse bibendum orci eget vulputate auctor. Integer quis quam
              elit. Maecenas sed ipsum eros.
            </p>
          </div>
        </div>
        <div class="col-lg-4">
          <div
            class="skill"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-easing="ease-in"
          >
            <i class="fa-solid fa-truck-field mb-3"></i>
            <h3 class="mb-4">Supply Management</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
              amet sem leo. Praesent pellentesque nisi id augue tempus, eu
              dictum augue lobortis. Donec tincidunt sagittis enim. Fusce
              tincidunt sagittis nisi, vitae sodales mauris sollicitudin et.
              Suspendisse bibendum orci eget vulputate auctor. Integer quis quam
              elit. Maecenas sed ipsum eros.
            </p>
          </div>
        </div>
      </div>
    </div>
    <AppClouds />
  </section>
</template>
<script lang="ts">
import AppClouds from "./AppClouds.vue";
import AOS from "aos";

export default {
  name: "AppSkills",
  components: {
    AppClouds,
  },
  mounted() {
    AOS.init();
  },
};
</script>
<style lang="scss" scoped>
.skills-section {
  background: $tertiary-color;
  color: $white;
  max-width: 100%;
  padding: pxToRem(40) 0 0 0;

  h2 {
    font-size: $h2-font-size;
    font-weight: $bold;
    font-family: $heading-font;
  }

  hr {
    @include divider($secondary-color);
  }

  .container {
    margin: 0 auto;

    .col-lg-4 {
      margin-bottom: pxToRem(15);

      .skill {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: $primary-color;
        border-radius: $standard-border-radius;
        border: pxToRem(1) solid $primary-color;
        padding: pxToRem(40);
        margin-top: pxToRem(10);
        transition: all 400ms ease-in;

        &:hover {
          background: $tertiary-color;
          border: pxToRem(2) solid $primary-color;
          color: $primary-color;
          cursor: default;

          i {
            transform: rotateY(360deg);
            color: $primary-color;
          }
        }

        i {
          font-size: pxToRem(36);
          color: $tertiary-color;
          transition: transform 2s ease-in-out;
        }

        h3 {
          font-size: pxToRem(24);
          font-weight: $bold;
          font-family: $heading-font;
        }
      }
    }
  }

  .clouds {
    fill: $secondary-color;
  }
}
</style>
