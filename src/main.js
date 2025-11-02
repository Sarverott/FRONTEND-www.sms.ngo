import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import locales from "./locales";

const app = createApp(App);

app.use(router);
app.use(locales);

app.mount("#app");
