<script setup>
    import { ref, reactive } from 'vue'

    import Cookie from 'js-cookie'

    import Moon from "./icons/moon.vue"
    import Sun from "./icons/sun.vue"

    var docHook = document.querySelector("html");

    const isDark = ref(checkTheme())

    function checkTheme(){
        if (!docHook.getAttribute('data-theme')) {
            if(typeof(Cookie.get("theme-mode"))=="undefined"){
                docHook.setAttribute('data-theme', 'dark');
            }else{
                docHook.setAttribute('data-theme', Cookie.get("theme-mode"));
            }
            switchTheme();
        }
        return docHook.getAttribute('data-theme') === 'dark'
    }

    function switchTheme(){
        if(checkTheme()) {
            docHook.setAttribute("data-theme", "light")
            if(typeof(Cookie.get("theme-mode"))) Cookie.set("theme-mode", "light")
        } else {
            docHook.setAttribute("data-theme", "dark")
            if(typeof(Cookie.get("theme-mode"))) Cookie.set("theme-mode", "dark")
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