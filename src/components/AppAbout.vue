<template>
  <section class="about-section" id="about-me">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-6 description d-flex flex-column justify-center"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-easing="ease-in"
        >
          <h2 class="mb-3">Who am I?</h2>
          <p>
            Cras efficitur lacus commodo consequat rhoncus. Pellentesque
            dignissim magna nisi, vel vehicula risus tincidunt sit amet. Donec
            vel augue augue. Sed condimentum interdum congue. Sed nec convallis
            nulla. Sed nec fermentum nisi. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Quisque lectus
            arcu, vulputate eu dapibus at, rutrum id magna. Donec maximus purus
            id dui varius, eget pulvinar ex luctus. <br />
            <br />
            Nullam a odio purus. Fusce pretium egestas purus, sed finibus elit
            pellentesque non. Nunc bibendum elementum eros volutpat consectetur.
            Integer condimentum tortor a nibh porta malesuada.
          </p>
        </div>
        <div
          class="col-lg-6 cloud-video"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-easing="ease-in"
        >
          <video
            src="./media/industry_4.0.mp4"
            width="600"
            class="img-fluid"
            autoplay
            loop
          ></video>
        </div>
      </div>
      <div class="floating-clouds">
        <img
          src="./media/floating_cloud.png"
          class="floating-cloud-1 animation"
          alt="floating cloud"
        />
        <img
          src="./media/floating_cloud.png"
          class="floating-cloud-2 animation"
          alt="floating cloud"
        />
        <img
          src="./media/floating_cloud.png"
          class="floating-cloud-3 animation"
          alt="floating cloud"
        />
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
.about-section {
  background: $secondary-color;
  max-width: 100%;

  .description {
    padding: pxToRem(40) pxToRem(40) pxToRem(20) pxToRem(40);
    text-align: center;

    @include media-breakpoint-up(sm) {
      padding: pxToRem(60) 0 pxToRem(30) 0;
    }

    @include media-breakpoint-up(lg) {
      padding: pxToRem(60) pxToRem(60) pxToRem(40) pxToRem(60);
      text-align: justify;
    }

    h2 {
      font-size: $h2-font-size;
      font-weight: $bold;
      font-family: $heading-font;
    }
  }

  video {
    max-width: pxToRem(300);
    padding: 0 0 pxToRem(20) 0;

    @include media-breakpoint-up(sm) {
      padding: pxToRem(30) 0 pxToRem(40) 0;
      max-width: pxToRem(500);
    }

    @include media-breakpoint-up(lg) {
      padding-top: pxToRem(40);
    }
  }

  .floating-clouds {
    .animation {
      animation-direction: normal;
      animation-fill-mode: none;
      animation-play-state: running;
      opacity: 0;

      &.floating-cloud-1 {
        top: pxToRem(3610);
        max-width: pxToRem(50);
        animation-duration: 20s;
        animation-delay: 4s;

        @include media-breakpoint-up(lg) {
          top: pxToRem(2000);
          max-width: pxToRem(70);
          -webkit-animation: cloud-1 35s linear 6s infinite;
          animation: cloud-1 35s linear 6s infinite;
        }
      }

      &.floating-cloud-2 {
        top: pxToRem(3220);
        animation-duration: 20s;
        animation-delay: 2s;

        @include media-breakpoint-up(lg) {
          top: pxToRem(1800);
          max-width: pxToRem(50);
          -webkit-animation: cloud-2 25s linear 4s infinite;
          animation: cloud-2 25s linear 6s infinite;
        }
      }

      &.floating-cloud-3 {
        top: pxToRem(4010);
        animation-duration: 20s;
        animation-delay: 6s;

        @include media-breakpoint-up(lg) {
          top: pxToRem(2150);
          max-width: pxToRem(60);
          -webkit-animation: cloud-3 30s linear 8s infinite;
          animation: cloud-3 30s linear 6s infinite;
        }
      }
    }

    img {
      position: absolute;
      z-index: 0;
      height: auto;
    }

    @keyframes cloud-1 {
      0% {
        opacity: 0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        right: 0;
      }
      10% {
        opacity: 0.3;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
        right: pxToRem(200);
      }
      90% {
        opacity: 0.3;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
        right: pxToRem(1100);
      }
      100% {
        opacity: 0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        right: pxToRem(1200);
      }
    }

    @keyframes cloud-2 {
      0% {
        opacity: 0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        right: 0;
      }
      10% {
        opacity: 0.4;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
        right: pxToRem(200);
      }
      90% {
        opacity: 0.4;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
        right: pxToRem(1100);
      }
      100% {
        opacity: 0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        right: pxToRem(1200);
      }
    }

    @keyframes cloud-3 {
      0% {
        opacity: 0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        right: 0;
      }
      10% {
        opacity: 0.2;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
        right: pxToRem(200);
      }
      90% {
        opacity: 0.2;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
        right: pxToRem(1100);
      }
      100% {
        opacity: 0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        right: pxToRem(1200);
      }
    }
  }

  .clouds {
    fill: $tertiary-color;
    margin-bottom: 0;
  }
}
</style>
