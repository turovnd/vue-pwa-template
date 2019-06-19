/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
	// Home Page
	{
		path: '/',
		name: 'Home',
		meta: {
			requiresAuth: true
		},
		component: () => import('../views/Home')
	},

	// About page
	{
		path: '/about',
		name: 'about',
		meta: {
			requiresAuth: true
		},
		component: () => import('../views/About')
	},

	// Handle Not Found
	{
		path: '/not-found',
		name: 'NotFounded',
		component: () => import('../views/NotFound')
	},

	// Redirect all other pages to Not Found page
	{
		path: '*',
		redirect: '/not-found'
	}
];
