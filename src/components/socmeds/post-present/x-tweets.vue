<script setup>
import 'https://platform.twitter.com/widgets.js'

const props = defineProps({
  reflink: String,
  postId: String,
  user: String,
  username: String,
  date: String,
  lang: String,
})

function getThemeMode() {
  return document.querySelector('html').getAttribute('data-theme')
}
</script>
<template>
  <div class="block">
    <blockquote class="twitter-tweet" :data-theme="getThemeMode()">
      <p :lang="props.lang" dir="ltr">
        <a :href="'https://t.co/' + props.reflink"> https://t.co/{{ props.reflink }} </a>
      </p>
      &mdash; {{ props.username }} (@{{ props.user }})
      <a
        :href="
          'https://twitter.com/' + props.user + '/status/' + props.postId + '?ref_src=twsrc%5Etfw'
        "
      >
        {{ props.date }}
      </a>
    </blockquote>
  </div>
</template>
<style lang="css" scoped></style>
