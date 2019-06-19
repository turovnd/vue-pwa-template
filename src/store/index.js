import Vue from 'vue';
import Vuex from 'vuex';

// Import modules
import user from './modules/user';

Vue.use(Vuex);

export const store = new Vuex.Store({
	modules: {
		user
	},
	state: {
		locales: [{ id: 'en', label: 'English' }, { id: 'ru', label: 'Русский' }]
	}
});

export default store;
