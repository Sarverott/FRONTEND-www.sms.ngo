<script setup>

import 'https://platform.twitter.com/widgets.js';


function getThemeMode() {
    return document.querySelector("html").getAttribute("data-theme");
}


</script>
<template>
    <div class="block">

        <blockquote class="twitter-tweet" :data-theme="getThemeMode()">
            <p lang="zxx" dir="ltr">
                <a href="https://t.co/BWeKMPk9Ce">
                    https://t.co/BWeKMPk9Ce
                </a>
            </p>
            &mdash; Śląski Maker
            Space (@MakerSlask85812)
            <a href="https://twitter.com/MakerSlask85812/status/1978233585522880632?ref_src=twsrc%5Etfw">
                October 14, 2025
            </a>
        </blockquote>

    </div>


</template>
<style lang="css" scoped></style>