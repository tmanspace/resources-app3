import { createApp } from 'vue';
import App from './App.vue';
import baseCard from "@/components/UI/BaseCard";
import baseButton from "@/components/UI/BaseButton";
import baseModal from "@/components/UI/BaseModal";

const app = createApp(App);

app.component('base-card', baseCard);
app.component('base-button', baseButton);
app.component('base-modal', baseModal);

app.mount('#app');
