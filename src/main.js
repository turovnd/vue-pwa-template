import Vue from 'vue';
import App from './App.vue';

/* Import Plugins */
import { router } from './plugins/vue-router';
import { i18n } from './plugins/vue-i18n';
import './plugins/vue-bootstrap.js';
import './plugins/vue-fontawesome';
import './plugins/vue-notification';
import './plugins/vue-vee-validate';

/* Import Service Worker */
import './registerServiceWorker';

/* Import Styles */
import './assets/scss/styles.scss';

/* Import Vuex Store */
import { store } from './store';

Vue.config.productionTip = false;

new Vue({
	i18n,
	router,
	store,
	render: h => h(App)
}).$mount('#app');
