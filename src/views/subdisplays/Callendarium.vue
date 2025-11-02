<script setup>
import gcalendar from "@/components/widgets/GoogleCalendarDisplay.vue";

const subcalendars = [
	[
		"YjQ3OWI5YjBkY2MwYTE5NzE0MGMxOTAxOTAzOTc4ZTE0YWFiZTA5YjVlNmM5MGY0Nzc3OTNlNmFjMjU0ZTY3MEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t",
		"#795548",
	],
	["ZW4ucG9saXNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t", "#0b8043"],
	["Y3RmdGltZUBnbWFpbC5jb20", "#7cb342"],
	["cGwucG9saXNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t", "#0b8043"],
];
</script>
<template>
  <div class="box">
    <div class="tabs is-boxed">
      <ul>
        <li class="is-active">
          <a>
            <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
            <span>Videos</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
            <span>Documents</span>
          </a>
        </li>
      </ul>
    </div>
    <gcalendar
      title="Śląski Maker Space - testowy kalendarz"
      viewmode="MONTH"
      :subcalendars="subcalendars"
    >
    </gcalendar>
  </div>
</template>
<style scoped></style>
