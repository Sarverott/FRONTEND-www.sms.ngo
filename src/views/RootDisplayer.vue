<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    //import HelloWorld from './components/HelloWorld.vue'

    //import { totp, hotp } from 'jsOTP'

    console.log('jsOTP loaded:', totp, hotp)
</script>

<template>
  
    <header>

        <div class="wrapper">


            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView />

    <footer>



    </footer>

</template>

<style>

</style>