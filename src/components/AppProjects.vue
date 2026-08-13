<template>
  <section class="projects-section" id="projects">
    <h2 class="mb-4">My projects</h2>
    <p class="projects-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
      Donec nec urna orci. Aenean accumsan aliquam lobortis.
    </p>
    <hr class="center-diamond" />
    <div
      class="container-projects"
      data-aos="zoom-in"
      data-aos-duration="2000"
      data-aos-easing="ease-in"
    >
      <div
        id="carouselExampleCaptions"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <iframe
              class="embed d-block w-100"
              src="https://www.youtube.com/embed/zSWdZVtXT7E"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div class="carousel-caption d-none d-md-block">
              <div class="project-caption">
                <h5>Project</h5>
                <p class="m-0">
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <iframe
              class="embed d-block w-100"
              src="https://www.youtube.com/embed/r5X-hFf6Bwo"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div class="carousel-caption d-none d-md-block">
              <div class="project-caption">
                <h5>Project</h5>
                <p class="m-0">
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <iframe
              class="embed d-block w-100"
              src="https://www.youtube.com/embed/vtxVK3sbZ0o"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div class="carousel-caption d-none d-md-block">
              <div class="project-caption">
                <h5>Project</h5>
                <p class="m-0">
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <AppClouds />
  </section>
</template>
<script lang="ts">
import AppClouds from "./AppClouds.vue";
import AOS from "aos";

export default {
  name: "AppProjects",
  components: {
    AppClouds,
  },
  mounted() {
    AOS.init();
  },
};
</script>
<style lang="scss" scoped>
.projects-section {
  background: $tertiary-color;
  max-width: 100%;
  padding: pxToRem(40) 0 0 0;

  @include media-breakpoint-down(sm) {
    .projects-text {
      padding: 0 pxToRem(40);
    }
  }

  h2 {
    font-size: $h2-font-size;
    font-weight: $bold;
    font-family: $heading-font;
  }

  hr {
    @include divider($secondary-color);
  }

  .container-projects {
    background: $primary-color;
    max-width: pxToRem(1200);
    margin: 0 pxToRem(20) pxToRem(40) pxToRem(20);
    padding: pxToRem(15);
    border-radius: $standard-border-radius;

    @include media-breakpoint-up(lg) {
      margin: 0 auto pxToRem(50) auto;
      padding: pxToRem(30);
    }

    .embed {
      width: 100%;
      aspect-ratio: 16 / 9;
      border-radius: $standard-border-radius;
    }

    .project-caption {
      background: $primary-color;
      padding: pxToRem(15);
      border-radius: pxToRem(8);
    }
  }

  .clouds {
    fill: $secondary-color;
    max-width: 100%;
    margin-bottom: 0;
  }
}
</style>
