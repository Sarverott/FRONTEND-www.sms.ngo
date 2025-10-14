<script setup>
//import {defineEmit} from 'vue';
import { marked } from 'marked';
const props = defineProps(['notice'])

const emit = defineEmits(['approval'])

function acknowledgeButtonPush() {
    emit("approval")
}


</script>
<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                Twoja akceptacja otwarcia tej strony wedle prawa w europie
            </p>
        </header>
        <!-- <div class="card-content" v-html="marked.parse(props.notice)"> -->
        <div class="card-content">

            <!-- <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
            iaculis mauris.
            <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div> -->
        </div>
        <footer class="card-footer">
            <a href="#firstvisit" class="card-footer-item terms-and-policy-approval-button"
                @click="acknowledgeButtonPush">Okidoki</a>
            <a href="#firstvisit" class="card-footer-item terms-and-policy-approval-button"
                @click="acknowledgeButtonPush">Przyjąłem</a>
            <a href="#firstvisit" class="card-footer-item terms-and-policy-approval-button"
                @click="acknowledgeButtonPush">Akceptuję</a>
        </footer>
    </div>
</template>
<style scoped></style>
