<script setup>
import { inject } from 'vue'

const SETUP = inject('setup')

import BoxIcon from './BoxIcon.vue'
</script>

<template>
  <div class="field has-addons">
    <p v-for="profileItem in SETUP.socmed" class="control">
      <BoxIcon
        :classes="profileItem.classes"
        :type="profileItem.type"
        :icon="profileItem.icon"
        :link="profileItem.link"
      ></BoxIcon>
    </p>
  </div>
</template>

<style></style>
