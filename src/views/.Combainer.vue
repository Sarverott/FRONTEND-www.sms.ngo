<script setup>
import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'

import SilesiaFooter from "@views/Footer_BottomLinks"
import SilesiaMainCenter from "@views/Main_Centerior"
import SilesiaAside from "@views/Aside_LeftPanel"
import SilesiaHeader from "@views/Header_TopHat"

//import { totp, hotp } from 'jsOTP'

//console.log('jsOTP loaded:', totp, hotp)
</script>

<template>
    <!-- 
    # carbonated header
    --- 
    > because head is bussy with looking 
    > for our tunnel wizard, we call him
    > Skarbek... it is name that as word 
    > for us sounds odd, for sure today
    > maybe between treasure and darling?
    > well, actually it is best explanation
    > you can except I think.
    -->
    <SilesiaHeader sitename="Silesia Maker Space">
        <RouterLink to="/">"Hello World!""</RouterLink>
        <RouterLink to="/about_this_place">About</RouterLink>
        <RouterLink to="/translated_languages">Translate</RouterLink>
    </SilesiaHeader>
    <!-- 
    # lister panel on left with grafit
    ---
    > grafen not included
    -->
    <SilesiaAside>

    </SilesiaAside>
    <!-- 
    # based on carbon core of action
    ---
    > local originated industrial closest products 
    > to actual diamond that was ever produced on 
    > teritory of silesian region in known history 
    -->
    <SilesiaMainCenter>
        <RouterView />
    </SilesiaMainCenter>
    <!-- 
    # The Black Foot 
    --- 
    > like bigfoot but from local mines
    -->
    <SilesiaFooter>


    </SilesiaFooter>
</template>

<style></style>