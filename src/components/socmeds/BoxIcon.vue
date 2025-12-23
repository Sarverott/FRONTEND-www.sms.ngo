<script setup>
//
const props = defineProps({
  link: String,
  type: String,
  icon: String,
  classes: Array,
})
//
props.ALTTITLE = `profile on ${props.type.toUpperCase()} platform`
//
props.FLATCLASS = ['button', 'is-rounded'].concat(props.classes).join()
//
</script>
<template>
  <a :href="props.link" target="_blank" :title="props.ALTTITLE">
    <button :class="props.FLATCLASS">
      <img :src="icon" width="100" height="100" :alt="props.ALTTITLE" />
    </button>
  </a>
</template>
<style lang="css" scoped>
/* */
</style>
