import { createApp } from 'vue';
import App from './App.vue';
import baseCard from "@/components/UI/BaseCard";

const app = createApp(App);

app.component('base-card', baseCard);

app.mount('#app');
