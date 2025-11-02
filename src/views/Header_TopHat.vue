<script setup>
//import { props } from "vue"
const props = defineProps({
  sitename: String,
  currentcontext: String,
})

import ThemeButton from '@/components/ThemeButton.vue'
import SocMedIcon from '@/components/soc-med/SocMedIcon.vue'
import NavbarHead from '@/components/head-navbar/NavbarHead.vue'
</script>

<template>
  <header>
    <NavbarHead>
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
          <a class="navbar-item"> Home </a>
          <a class="navbar-item"> Documentation </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<style></style>
