import { createApp } from "vue";
import "normalize.css"
// import 'bootstrap/dist/css/bootstrap.min.css'
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";



createApp(App).use(store).use(router).mount("#app");
