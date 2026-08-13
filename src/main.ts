import { createApp } from "vue";
import Particles from "vue3-particles";
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from "./App.vue";
import router from './router';

createApp(App).use(router).use(Particles).use(AOS).mount("#app");
