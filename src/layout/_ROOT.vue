<script setup>
import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'

import SilesiaAside from './aside-left.vue'
import SilesiaFooter from './footer.vue'
import SilesiaHeader from './header.vue'
import SilesiaMainCenter from './mainarea.vue'

//import { totp, hotp } from 'jsOTP'

//console.log('jsOTP loaded:', totp, hotp)
</script>

<template>
  <div class="bluratorium margined-on-top">
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
        <button class="is-large button is-warning">Home</button>
      </RouterLink>
      <RouterLink to="/about_this_place">
        <button class="is-large button is-warning is-dark">Kontakt</button>
      </RouterLink>
      <RouterLink to="/calendar">
        <button class="is-large button is-warning is-dark">terminariumm</button>
      </RouterLink>
      <RouterLink to="/about_this_place">
        <button class="is-large button is-warning is-dark">Kontakt</button>
      </RouterLink>
    </SilesiaHeader>

    <div class="grid">
      <!-- 
            # lister panel on left with grafit
            ---
            > grafen not included
            -->
      <SilesiaAside class="cell is-gap-1.5"> </SilesiaAside>
      <!-- 
            # based on carbon core of action
            ---
            > local originated industrial closest products 
            > to actual diamond that was ever produced on 
            > teritory of silesian region in known history 
            -->
      <SilesiaMainCenter class="cell is-col-span-4">
        <RouterView />
      </SilesiaMainCenter>
    </div>

    <!-- 
    # The Black Foot 
    --- 
    > like bigfoot but from local mines
    -->
    <SilesiaFooter> </SilesiaFooter>
  </div>
</template>

<style scoped>
.margined-on-top {
  margin-top: 30px;
}
.bluratorium {
  overflow: hidden !important;
  filter: sepia(100%) saturate(8) opacity(30%) contrast(200%) hue-rotate(100deg);
}
</style>
