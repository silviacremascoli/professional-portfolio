<template>
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img src="../assets/john-smith-logo.png" alt="John Smith logo" class="logo"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto nav-underline">
          <router-link class="nav-link home-link" aria-current="page" to="/">Home</router-link>
          <a class="nav-link" href="#skills">Expertise</a>
          <a class="nav-link" href="#about-me">About me</a>
          <router-link class="nav-link" to="/blog">Blog</router-link>
          <a class="nav-link" href="#projects">My Projects</a>
          <a class="nav-link contact" href="#contact">Contact me</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  background: $secondary-color;
  max-width: 100%;
  flex-grow: 0;
  flex-shrink: 0;

  &.navbar {
    padding: 4px 20px;

    @include media-breakpoint-up(sm) {
      padding: 5px 50px;
    }
  }
  .nav-link {
    color: $tertiary-color;
    font-size: 18px;
    letter-spacing: 1.5px;
    text-align: left;
    padding-bottom: 2px;

    &:hover {
      color: $tertiary-color;
      transition: all 400ms ease-in-out;

      @include media-breakpoint-up(lg) {
        transform: scale(1.05);
      }
    }

    &:focus, &:active {
      color: $tertiary-color;
    }

    &.home-link {
      @include media-breakpoint-down(sm) {
        padding-top: 20px;
      }
    }

    &.contact {
      @include media-breakpoint-down(lg) {
        margin-bottom: 20px;
      }
    }
  }

  .navbar-toggler {
    background: $tertiary-color;

    &:is(:focus, :active, :focus) {
      outline: none;
      box-shadow: none;
    }
  }
  .logo {
    max-width: 60px;
  }
}
</style>
