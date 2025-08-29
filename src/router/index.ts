import { createRouter, createWebHistory } from 'vue-router'
import auth from './modules/auth.ts'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [...auth],
})

export default router
