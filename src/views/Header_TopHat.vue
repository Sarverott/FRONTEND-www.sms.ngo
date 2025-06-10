<script setup>
//import { props } from "vue"
const props = defineProps(
    {
        sitename: String,
        currentcontext: String
    }
);

import ThemeButton from '@/components/ThemeButton.vue';
import SocMedIcon from '@/components/soc-med/SocMedIcon.vue';

</script>

<template>
    <header class="hero is-link ">
        <nav class="navbar">
            <div class="container">
                <div id="navMenu" class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item">
                            Home
                        </a>
                        <a class="navbar-item">
                            Documentation
                        </a>
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <ThemeButton></ThemeButton>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="hero-body">
            <h2 class="title is-1">
                {{ sitename }}
            </h2>
            <h1 class="subtitle is-3">
                {{ currentcontext }}
            </h1>
            <nav class="buttons has-addons ">
                <slot></slot>
            </nav>
        </div>
    </header>
</template>

<style></style>