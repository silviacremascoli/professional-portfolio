<template>
  <footer>
    <div class="social-links pb-4 d-flex justify-content-center">
      <a
        href="https://www.linkedin.com/in/john-smith/"
        target="_blank"
        title="LinkedIn John Smith"
        ><i class="fa-brands fa-linkedin"></i
      ></a>
      <a
        href="https://github.com/johnsmith"
        target="_blank"
        title="GitHub John Smith"
        ><i class="fa-brands fa-github"></i
      ></a>
      <a href="https://youtube.com" target="_blank" title="Youtube John Smith"
        ><i class="fa-brands fa-youtube"></i
      ></a>
      <a
        href="https://drive.google.com/file/d/1lcpjhCugvGs7G4qIBis6Uv1gtVaqoWjo/view?usp=drive_link"
        target="_blank"
        title="Resume John Smith"
        ><i class="fa-solid fa-file"></i
      ></a>
    </div>
    <p>
      This website was coded by
      <a href="https://silviacremascoli.com" target="_blank"
        >Silvia Cremascoli</a
      >
    </p>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  color: $white;
  background: $tertiary-color;
  padding: rem(25) 0;
  letter-spacing: rem(1);
  font-weight: $light-bold;
  max-width: 100%;

  a {
    color: $secondary-color;
    text-decoration: none;
    transition: all 200ms ease-in-out;

    &:hover {
      text-decoration: underline;
    }
  }

  .clouds {
    max-width: 100%;
  }

  .social-links a {
    margin: 0 rem(15);
    color: $tertiary-color;
    background: $secondary-color;
    padding: rem(10) rem(16);
    font-size: rem(18);
    border-radius: $round-border-radius;
    transition: all 500ms ease-in-out;

    &:hover {
      background: $primary-color;
      transform: scale(1.2);
    }
  }
}
</style>
