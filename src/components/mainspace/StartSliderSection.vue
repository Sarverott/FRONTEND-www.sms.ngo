<script setup>
//
import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'

import { inject, onMounted } from 'vue'

const slider = {}

onMounted(() => {
  slider.item = new Glide('.glide', {
    type: 'carousel',
    perView: 4,
    focusAt: 'center',
    breakpoints: {
      800: {
        perView: 2,
      },
      480: {
        perView: 1,
      },
    },
  })
  slider.item.mount({ Controls, Breakpoints })
})
</script>
<template>
  <h1>sliderS</h1>
  <div class="glide">
    <div class="glide__track" data-glide-el="track">...</div>

    <div class="glide__bullets" data-glide-el="controls[nav]">
      <button class="glide__bullet" data-glide-dir="=0"></button>
      <button class="glide__bullet" data-glide-dir="=1"></button>
      <button class="glide__bullet" data-glide-dir="=2"></button>
    </div>
  </div>
</template>
<style lang="css" scoped>
@import '@glidejs/glide/dist/css/glide.core.min.css';
@import '@glidejs/glide/dist/css/glide.theme.min.css';
</style>
