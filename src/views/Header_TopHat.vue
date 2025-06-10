<script setup>

//import { props } from "vue"

const props = defineProps(
    {
        toptitle: String
    }
);

</script>

<template>
    <header>
        <h2>
            {{ toptitle }}
        </h2>
        <div>
            <nav>
                <slot></slot>
            </nav>
        </div>
    </header>
</template>

<style></style>