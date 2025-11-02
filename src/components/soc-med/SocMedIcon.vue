<script setup>
const favicons = [
	"https://github.com/favicon.ico",
	"https://youtube.com/favicon.ico",
	"https://x.com/favicon.ico",
	"https://facebook.com/favicon.ico",
	"https://www.instagram.com/favicon.ico",
	"https://tiktok.com/favicon.ico",
];
</script>
<template>
  <img v-for="icon in favicons" :src="icon" width="100" height="100" alt="" />
</template>
<style lang="css" scoped></style>
