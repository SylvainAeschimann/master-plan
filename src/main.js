import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { createI18n } from 'vue-i18n'
import fr from './i18n/fr-CH.json';
import en from './i18n/en-GB.json';

const i18n = createI18n({
    locale: 'fr',
    defaultLocale: 'fr',
    messages:{
        fr:fr,
        en:en
    },
  })


createApp(App)
.use(store)
.use(router)
.use(i18n)
.mount('#app')
