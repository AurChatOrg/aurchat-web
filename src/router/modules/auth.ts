import SignInView from '@/views/auth/SignInView.vue'
import SignUpView from '@/views/auth/SignUpView.vue'

export default [
	{
		path: '/sign-in',
		component: SignInView,
		name: 'SignIn',
		meta: { title: 'Sign In Your Account' },
	},
	{
		path: '/sign-up',
		component: SignUpView,
		name: 'SignUp',
		meta: { title: 'Sign Up Your Account' },
	},
]
