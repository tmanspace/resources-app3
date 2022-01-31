import { createApp } from 'vue';
import App from './App.vue';
import baseCard from "@/components/UI/BaseCard";
import baseButton from "@/components/UI/BaseButton";

const app = createApp(App);

app.component('base-card', baseCard);
app.component('base-button', baseButton);

app.mount('#app');
