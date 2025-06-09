<script setup>
    import { ref, reactive } from 'vue'

    import Moon from "./icons/moon.vue"
    import Sun from "./icons/sun.vue"


    var docHook = document.querySelector("html");

    const isDark = ref(checkTheme())

    function checkTheme(){
        if (!docHook.getAttribute('data-theme')) {
            docHook.setAttribute('data-theme', 'dark');
            switchTheme()
        }
        return docHook.getAttribute('data-theme') === 'dark'
    }

    function switchTheme(){
        if(checkTheme()) {
            docHook.setAttribute("data-theme", "light")
        } else {
            docHook.setAttribute("data-theme", "dark")
        }
    }

</script>
<template>
    <button class="button theme-btn is-active is-rounded" @click="switchTheme">
        <span class="icon light">
            <Moon/>
        </span>
        <span class="icon dark">
            <Sun/>
        </span>
    </button>
</template>
<style scoped>
    html[data-theme="dark"] .theme-btn .icon.dark,
    html[data-theme="light"] .theme-btn .icon.light{
        display: inline-block;
    }
    html[data-theme="dark"] .theme-btn .icon.light,
    html[data-theme="light"] .theme-btn .icon.dark{
        display: none;
    }
    .theme-btn {
        border-width: 2px;
    }
</style>