<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})

import { onMounted, ref } from 'vue'

const calendarUrls = {
  //google: {
  //  weekly: `https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FWarsaw&title=%C5%9Al%C4%85ski%20MakerSpace%20-%20KATO&mode=WEEK&src=YjQ3OWI5YjBkY2MwYTE5NzE0MGMxOTAxOTAzOTc4ZTE0YWFiZTA5YjVlNmM5MGY0Nzc3OTNlNmFjMjU0ZTY3MEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4ucG9saXNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y3RmdGltZUBnbWFpbC5jb20&src=cGwucG9saXNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23795548&color=%230b8043&color=%237cb342&color=%230b8043`,
  //  monthly: `https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FWarsaw&title=%C5%9Al%C4%85ski%20MakerSpace%20-%20KATO&mode=MONTH&src=YjQ3OWI5YjBkY2MwYTE5NzE0MGMxOTAxOTAzOTc4ZTE0YWFiZTA5YjVlNmM5MGY0Nzc3OTNlNmFjMjU0ZTY3MEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4ucG9saXNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y3RmdGltZUBnbWFpbC5jb20&src=cGwucG9saXNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23795548&color=%230b8043&color=%237cb342&color=%230b8043`,
  //  harmonogram: `https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FWarsaw&title=%C5%9Al%C4%85ski%20MakerSpace%20-%20KATO&mode=AGENDA&src=YjQ3OWI5YjBkY2MwYTE5NzE0MGMxOTAxOTAzOTc4ZTE0YWFiZTA5YjVlNmM5MGY0Nzc3OTNlNmFjMjU0ZTY3MEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4ucG9saXNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y3RmdGltZUBnbWFpbC5jb20&src=cGwucG9saXNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23795548&color=%230b8043&color=%237cb342&color=%230b8043`,
  //},
}
</script>

<template>
  <h1>Śląski Maker Space - TESTSERVER</h1>
  <!--<iframe :src="calendarUrls.google.weekly" style="border: solid 1px #777" width="800" height="600" frameborder="0"
    scrolling="no"></iframe>-->
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
