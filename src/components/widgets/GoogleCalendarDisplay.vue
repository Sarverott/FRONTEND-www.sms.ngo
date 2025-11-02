<script setup>
const props = defineProps(['viewmode', 'title', 'subcalendars'])

console.log(props.subcalendars)

function calendarLinkBuilder(title, viewmode, subcalendars) {
  const calendarConfig = [
    ['wkst', 1],
    ['ctz', 'Europe/Warsaw'],
    ['showPrint', 1],
    ['height', 800],
    ['title', title],
    ['mode', viewmode],
    //["src", "YjQ3OWI5YjBkY2MwYTE5NzE0MGMxOTAxOTAzOTc4ZTE0YWFiZTA5YjVlNmM5MGY0Nzc3OTNlNmFjMjU0ZTY3MEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"],
    //["color", "#795548"]
  ]

  let linkSrc = 'https://calendar.google.com/calendar/embed?'
  linkSrc += calendarConfig
    .concat(
      subcalendars.map((x) => ['src', x[0]]),
      subcalendars.map((x) => ['color', x[1]]),
    )
    .map((x) => `${x[0]}=${encodeURIComponent(x[1])}`)
    .join('&')

  console.log(linkSrc)

  return linkSrc

  // linkSrc+=`src=YjQ3OWI5YjBkY2MwYTE5NzE0MGMxOTAxOTAzOTc4ZTE0YWFiZTA5YjVlNmM5MGY0Nzc3OTNlNmFjMjU0ZTY3MEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&`;
  // linkSrc+=`src=ZW4ucG9saXNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&`
  // linkSrc+=`src=Y3RmdGltZUBnbWFpbC5jb20&`
  // linkSrc+=`src=cGwucG9saXNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&`
  // linkSrc+=`color=%23795548&`
  // linkSrc+=`color=%230b8043&`
  // linkSrc+=`color=%237cb342&`
  // linkSrc+=`color=%230b8043`
}

// function calendarLinkBuilder(){
//     let linkSrc='https://calendar.google.com/calendar/embed?'
//     linkSrc+=`height=600&`;
//     linkSrc+=`wkst=1&ctz=Europe%2FWarsaw&showPrint=0&`;
//     linkSrc+=`title=%C5%9Al%C4%85ski%20Maker%20Space%20-kalendarz%20testowy&`;
//     linkSrc+=`mode=WEEK&`;
//     linkSrc+=`src=YjQ3OWI5YjBkY2MwYTE5NzE0MGMxOTAxOTAzOTc4ZTE0YWFiZTA5YjVlNmM5MGY0Nzc3OTNlNmFjMjU0ZTY3MEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&`;
//     linkSrc+=`src=ZW4ucG9saXNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&`;
//     linkSrc+=`src=Y3RmdGltZUBnbWFpbC5jb20&`;
//     linkSrc+=`src=cGwucG9saXNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&`;
//     linkSrc+=`color=%23795548&`;
//     linkSrc+=`color=%230b8043&`;
//     linkSrc+=`color=%237cb342&`;
//     linkSrc+=`color=%230b8043`;

// }

// function calendarLinkBuilder(){
//     let linkSrc='https://calendar.google.com/calendar/embed?'
//     linkSrc+=`height=600&`;
//     linkSrc+=`wkst=1&ctz=Europe%2FWarsaw&showPrint=0&`;
//     linkSrc+=`title=%C5%9Al%C4%85ski%20Maker%20Space%20-kalendarz%20testowy&`;
//     linkSrc+=`src=&`;
//     linkSrc+=`src=&`;
//     linkSrc+=`src=&`;
//     linkSrc+=`src=&`;

//     linkSrc+=`color=%23&`;
//     linkSrc+=`color=%23&`;
//     linkSrc+=`color=%23`;
// }
</script>

<template>
  <iframe
    class="google-calendar-display"
    :src="calendarLinkBuilder(props.title, props.viewmode, props.subcalendars)"
    height="800"
    frameborder="0"
    scrolling="no"
  >
  </iframe>
</template>

<style lang="css" scoped>
.google-calendar-display {
  width: 100%;
  border: solid 1px #777;
}

html[data-theme='dark'] .google-calendar-display {
  filter: sepia(1) invert(1);
  border: solid 3px #ff0;
}

html[data-theme='light'] .google-calendar-display {
  filter: sepia(1);
  border: solid 3px #00f;
}
</style>
