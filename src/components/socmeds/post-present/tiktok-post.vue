<script setup>
import 'https://www.tiktok.com/embed.js'

import { onMounted } from 'vue'
onMounted(() => {
  //importScripts('')
})
const props = defineProps(['videoId', 'username', 'hashtags', 'musicDetails'])
</script>
<template>
  <blockquote
    class="tiktok-embed"
    :cite="'https://www.tiktok.com/@' + props.username + '/video/' + props.videoId"
    :data-video-id="props.videoId"
  >
    <section>
      <a
        target="_blank"
        :title="'@' + props.username"
        :href="'https://www.tiktok.com/@' + props.username + '?refer=embed'"
        >@{{ props.username }}</a
      >
      <a
        v-for="tag in props.hashtags"
        :title="tag"
        target="_blank"
        :href="'https://www.tiktok.com/tag/' + tag + '?refer=embed'"
        >#{{ tag }}</a
      >
      <a
        v-if="props.musicDetails"
        target="_blank"
        :title="'♬ ' + props.musicDetails.title"
        :href="'https://www.tiktok.com/music/' + props.musicDetails.id + '?refer=embed'"
        >♬ {{ props.musicDetails.title }}</a
      >
    </section>
  </blockquote>
</template>
<style lang="css" scoped>
.tiktok-embed {
  max-width: 605px;
  min-width: 325px;
}
</style>
