<script setup>

//import SocMedIcon from './components/soc-med/SocMedIcon.vue';

import AcceptTermsAndPolicy from '@/components/widgets/AcceptTermsAndPolicy.vue';
import * as emojisArray from '@/assets/emojis.json';
import { onMounted } from 'vue';
import logo from '@/components/icons/logo.vue';
import TagCloud from 'TagCloud';
import Cookie from 'js-cookie';
import { BrowserFS, configure } from 'browserfs';



let tagcloudHook = null;


const cacheDescriptor = {
    "acceptWebsite": "user_accepts_terms_and_policies",
    "docs": {
        "terms": {
            "hashCookie": 'using-terms_sha1_hash',
            "name": 'using-terms',
            "LS_path": '/docs/using-terms.md',
            "source_URL": ''
        },
        "policy": {
            "hashCookie": 'data-policy_sha1_hash',
            "name": 'data-policy',
            "LS_path": '/docs/data-policy.md',
            "source_URL": ''
        },
        "license": {
            "hashCookie": 'license_sha1_hash',
            "name": 'website license',
            "LS_path": '/docs/LICENSE',
            "source_URL": ''
        },
    }
}

function notifyMe() {
    if (!("Notification" in window)) {
        // Check if the browser supports notifications
        alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
        // Check whether notification permissions have already been granted;
        // if so, create a notification
        const notification = new Notification("Hi there!");
    } else if (Notification.permission !== "denied") {
        // We need to ask the user for permission
        Notification.requestPermission().then((permission) => {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
                const notification = new Notification("Hi there!");
            }
        });
    }
}

onMounted(() => {

    isTermsAccepted()
    //console.log(emojisArray)


})
// async function getData(jsonURL, callback) {
//   //const url = "https://raw.githubusercontent.com/muan/unicode-emoji-json/refs/heads/main/data-by-emoji.json";
//   try {
//     const response = await fetch(jsonURL);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const result = await response.json();
//     //console.log(result);\
//     callback(result)
//   } catch (error) {
//     console.error(error.message);
//     callback(false)
//   }
// }
// getData("https://raw.githubusercontent.com/muan/unicode-emoji-json/refs/heads/main/data-by-emoji.json", (x)=>console.log(JSON.stringify(Object.keys(x))))



function checkTermsAndPolicyAgreed(...cookieNames) {
    cookieNames.unshift(cacheDescriptor["acceptWebsite"])
    //if(cookieNames.length()==0)
    return (
        [
            ...cookieNames
            //cacheDescriptor["acceptWebsite"], 
            //cacheDescriptor["docs"]["terms"]["hashCookie"], 
            //cacheDescriptor["docs"]["policy"]["hashCookie"]
        ].map(
            (x) => typeof (Cookie.get(x))
        ).every(
            (x) => (x != "undefined")
        )
        // &&
        // [
        //     "terms_content",
        //     "policy_content"
        // ].map(
        //     (x)=>localStorage.getItem(x)
        // ).every(
        //     (x)=>(x!==null)
        // )
    );

}



async function getDocCached(url, label) {
    if (checkTermsAndPolicyAgreed()) {

    } else {
        document.querySelector(".loadscreen-terms-cover").classList.add("is-active");
        //throw new Error("Access revoked! user not yet allow website to be shown to him");
    }
}

async function getTextVersionHash(content) {
    return await window.crypto.subtle.digest(
        "SHA-1",
        (
            new TextEncoder()
        ).encode(
            content
        )
    );
}

function approvalAction() {
    Cookie.set(cacheDescriptor["acceptWebsite"], Date.now());
    document.querySelector(".loadscreen-terms-cover").classList.remove("is-active");
    if (tagcloudHook !== null) tagcloudHook.destroy();
    document.querySelector(".bluratorium").classList.remove("bluratorium");
}

function isTermsAccepted() {
    if (checkTermsAndPolicyAgreed()) {
        document.querySelector(".loadscreen-terms-cover").classList.remove("is-active")
        document.querySelector(".bluratorium").classList.remove("bluratorium");
    } else {
        const container = '.emoji-cloud';
        const texts = [...emojisArray.default].sort(() => 0.5 - Math.random()).slice(0, 81);
        const options = {
            radius: 1200,
            initSpeed: 'fast',
            maxSpeed: 'fast',
            reverseDirection: true
        };
        tagcloudHook = TagCloud(container, texts, options);

        //document.querySelector(".terms-and-policy-approval-button").addEventListener("click", ()=>{

        //delete tagcloudHook;
        //});
        //delete tagcloudHook;
    }
}

</script>
<template>

    <div class="loadscreen-terms-cover modal is-active">

        <div class="modal-background">
            <div class="loading-screen-background">
                <div class="emoji-cloud"></div>
            </div>
        </div>
        <div class="modal-content no-scrollo">
            <div class="loading-screen-area">
                <!-- <div class="emoji-cloud"></div> -->
                <logo class="logo-svg-item"></logo>
                <AcceptTermsAndPolicy @approval="approvalAction" :notice="null"></AcceptTermsAndPolicy>
            </div>

        </div>
    </div>


</template>

<style scoped>
.loading-screen-background {
    position: relative;

}

.no-scrollo {
    overflow: hidden;
}

.loading-screen-area {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.smoother {
    transition: all 500;
}

.emoji-cloud {
    font-size: 30px !important;
    display: inline-block;
    text-align: center;
    top: -500px;
    left: -500px;
    position: absolute;
    filter: sepia(100%) saturate(8) opacity(30%) contrast(200%) hue-rotate(80deg);

}

.tagcloud--item {
    /* font-size: 30px !important; */
}
</style>
