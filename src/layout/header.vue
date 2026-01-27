<script setup>
//import { props } from "vue"
import { RouterLink } from 'vue-router'
const props = defineProps({
  sitename: String,
  currentcontext: String,
})

import ThemeButton from '@/components/ThemeButton.vue'
import NavbarHead from '@/components/head-navbar/NavbarHead.vue'
//import SocMedIcons from '@/components/socmeds/ListBoxes.vue'
</script>

<template>
  <header>
    <NavbarHead>
      ffff
      <slot></slot>
    </NavbarHead>
    <div class="hero is-warning is-large">
      <div class="hero-body">
        <h2 class="title is-1">
          {{ sitename }}
        </h2>
        <h1 class="subtitle is-3">
          {{ currentcontext }}
        </h1>
        <nav class="buttons has-addons">
          <RouterLink class="navbar-item" to="/"> Start </RouterLink>
          <RouterLink class="navbar-item" to="/contact"> Kontakt </RouterLink>
          <RouterLink class="navbar-item" to="/"> Start </RouterLink>
          <RouterLink class="navbar-item" to="/contact"> Kontakt </RouterLink>
        </nav>
        <!--<SocMedIcons></SocMedIcons>-->
      </div>
    </div>
  </header>
</template>

<style></style>
