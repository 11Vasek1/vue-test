import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PublicView from '@/views/PublicView.vue';
import ProtectedView from '../views/ProtectedView.vue';
import store from '@/store';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/public',
		name: 'public',
		component: PublicView,
	},
	{
		path: '/protected',
		name: 'protected',
		component: ProtectedView,
		beforeEnter: (to, from, next) => {
			const isLogged = store.state.isLogged;

			if (isLogged) {
				next();
			} else {
				alert('Вы не авторизированы');

				next('/');
			}
		},
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
