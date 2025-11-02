<script setup>
//import {defineEmit} from 'vue';

const props = defineProps(['notice'])

const emit = defineEmits(['approval'])

function acknowledgeButtonPush() {
  emit('approval')
}
</script>
<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Pliki cookie i klauzula RODO w związku z przetwarzaniem danych
      </p>
    </header>
    <div class="card-content">
      <div v-html="props.notice"></div>
    </div>
    <footer class="card-footer">
      <a
        href="#firstvisit"
        class="card-footer-item terms-and-policy-approval-button"
        @click="acknowledgeButtonPush"
        >Okidoki</a
      >
      <a
        href="#firstvisit"
        class="card-footer-item terms-and-policy-approval-button"
        @click="acknowledgeButtonPush"
        >Przyjąłem</a
      >
      <a
        href="#firstvisit"
        class="card-footer-item terms-and-policy-approval-button"
        @click="acknowledgeButtonPush"
        >Akceptuję</a
      >
    </footer>
  </div>
</template>
<style scoped></style>
