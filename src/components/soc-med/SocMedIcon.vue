<script setup>
const PARAM = {
	link: String,
	type: String,
	icon: String,
	classes: Array,
};

const props = defineProps(PARAM);
</script>
<template>
  <a :href="props.link" target="_blank" :title="'socialmedia on ' + props.type.toUpperCase()">
    <img :src="icon" width="100" height="100" :alt="" />
  </a>
</template>
<style lang="css" scoped></style>
