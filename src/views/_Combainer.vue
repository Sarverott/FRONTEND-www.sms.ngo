<script setup>
import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'

import SilesiaFooter from "./Footer_BottomLinks.vue"
import SilesiaMainCenter from "./Main_Centerior.vue"
import SilesiaAside from "./Aside_LeftPanel.vue"
import SilesiaHeader from "./Header_TopHat.vue"

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
    <SilesiaHeader sitename="Silesia Maker Space" currentcontext="Hello World! To my tukej som">
        <RouterLink to="/">
            <button class=" is-large button is-warning">
                Hello World!
            </button>
        </RouterLink>
        <RouterLink to="/about_this_place">
            <button class="  is-large button is-warning is-dark">
                About
            </button>
        </RouterLink>
        <RouterLink to="/kalendarz">
            <button class=" is-large button is-warning is-dark">
                terminariumm
            </button>
        </RouterLink>
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