<script setup>
import ThemeButton from '../ThemeButton.vue'
import Minilogo from '../icons/minilogo.vue'
import NavbarBurger from './NavbarBurger.vue'
</script>
<template>
  <nav class="navbar is-link is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://www.sms.ngo/" target="_top">
        <Minilogo></Minilogo>
      </a>

      <NavbarBurger></NavbarBurger>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item"> Home </a>

        <a class="navbar-item"> Documentation </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> More </a>

          <div class="navbar-dropdown">
            <a class="navbar-item"> About </a>
            <a class="navbar-item is-selected"> Jobs </a>
            <a class="navbar-item"> Contact </a>
            <hr class="navbar-divider" />
            <a class="navbar-item"> Report an issue </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <ThemeButton></ThemeButton>
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-warning">
              <strong>Sign up</strong>
            </a>
            <a class="button is-warning"> Log in </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<style lang="css" scoped></style>
