import { createRouter, createWebHistory } from 'vue-router'
import auth from './modules/auth.ts'
import HomeView from '@/views/chat/HomeView.vue'
import { i18n } from '@/i18n'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		...auth,
		{
			path: '/',
			component: HomeView,
			name: 'HomeView',
			meta: { title: 'AurChat' },
		},
	],
})

router.beforeEach((to, from, next) => {
	const key = to.name as string
	if (key) document.title = typeof to.meta.title === 'string' ? i18n.global.t(`route.${key}`) : 'AurChat'
	next()
})

export default router
