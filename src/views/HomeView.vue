<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
    <!-- Replace the variables below. -->
    <script>
      function onSubmit(token) {
        document.getElementById('demo-form').submit()
      }
    </script>
    <button
      class="g-recaptcha"
      data-sitekey="6LejN0wrAAAAAHYS1ampdaZpdG5GBvCgQB-u3j8a"
      data-callback="onSubmit"
      data-action="submit"
    >
      Submit
    </button>
  </main>
</template>
