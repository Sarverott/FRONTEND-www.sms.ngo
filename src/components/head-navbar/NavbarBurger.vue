<script setup>
import { ref } from 'vue'

import NavbarBurgerModal from './NavbarBurgerModal.vue'

const burgerActiveState = ref(false)

function burgerClicker() {
  burgerActiveState.value = !burgerActiveState.value
}
</script>
<template>
  <div :class="burgerActiveState ? 'modal is-active' : 'modal'" id="navbar-burger-modal-menu">
    <div class="modal-background" @click="burgerClicker()"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">MENU</p>
        <button @click="burgerClicker()" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <NavbarBurgerModal></NavbarBurgerModal>
      </section>
      <footer class="modal-card-foot">
        <div class="buttons">
          <button class="button" @click="burgerClicker()">Zamknij</button>
        </div>
      </footer>
    </div>
  </div>
  <a
    role="button"
    @click="burgerClicker()"
    :class="burgerActiveState ? 'navbar-burger is-active' : 'navbar-burger'"
    aria-label="menu"
    aria-expanded="true"
    data-target="navbar-burger-modal-menu"
  >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>
</template>
<style lang="css" scoped>
.navbar-burger span {
  background-color: yellow;
}
</style>
