<script setup>
import ThemeButton from '../ThemeButton.vue'
import Minilogo from '../icons/minilogo.vue'
import NavbarBurger from './NavbarBurger.vue'
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav
    class="header-fronter navbar is-link is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="https://www.sms.ngo/" target="_top">
        <Minilogo></Minilogo>
      </a>

      <NavbarBurger></NavbarBurger>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <RouterLink class="navbar-item" to="/"> Home </RouterLink>

        <RouterLink class="navbar-item" to="/about"> About </RouterLink>

        <div class="navbar-item has-dropdown is-hoverable">
          <RouterLink class="navbar-link" to="/workshop"> Workshops </RouterLink>

          <div class="navbar-dropdown">
            <RouterLink class="navbar-item" to=""> Woodcraft </RouterLink>
            <RouterLink class="navbar-item is-selected"> Blacksmiths </RouterLink>
            <RouterLink class="navbar-item"> Electronics </RouterLink>
            <hr class="navbar-divider" />
            <RouterLink class="navbar-item"> Ask for more </RouterLink>
          </div>
        </div>
        <a class="navbar-item"> Contact </a>
      </div>

      <div class="navbar-end">
        <ThemeButton></ThemeButton>
        <div class="navbar-item">
          <div class="buttons">
            <a @click="userSignInterface('signup')" class="button is-warning">
              <strong>Sign up</strong>
            </a>
            <a @click="userSignInterface('login')" class="button is-warning"> Log in </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<style lang="css" scoped>
.header-fronter {
  z-index: 999;
}
</style>
