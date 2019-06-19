/* ============
 * Vue Router
 * ============
 *
 * The official Router for Vue.js. It deeply integrates with Vue.js core
 * to make building Single Page Applications with Vue.js a breeze.
 *
 * http://router.vuejs.org/en/index.html
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '../routes';

Vue.use(VueRouter);

export const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

router.beforeEach(async (to, from, next) => {
	if (to.matched.some(m => m.meta.requiresAuth)) {
		console.log('Check if the user has access to the page');
	}
	next();
});

Vue.router = router;
