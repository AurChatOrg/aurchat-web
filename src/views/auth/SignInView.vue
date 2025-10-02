<script setup lang="ts">
import { ref } from 'vue'
import { Eye, EyeClosed } from 'lucide-vue-next'
import { alovaInstance } from '@/utils/alova.ts'

const visiblePassword = ref<boolean>(false)

const changePasswordVisible = (e: PointerEvent) => {
	e.preventDefault()
	visiblePassword.value = !visiblePassword.value
}

const submitForm = async (e) => {
	e.preventDefault()
	const response = await alovaInstance.Get('/api/v1/ping')
	console.log(response)
}
</script>

<template>
	<div class="background">
		<div class="card-container">
			<div class="title-container">
				<h2 class="title">{{ $t('auth.signIn') }}</h2>
			</div>

			<form class="form-container">
				<div>
					<label class="label">{{ $t('auth.accountName') }}</label>
					<input class="input" :placeholder="$t('auth.accountName')" />
				</div>

				<div class="password-input">
					<label class="label">{{ $t('auth.password') }}</label>
					<div class="input-with-element">
						<input
							class="input"
							:type="visiblePassword ? 'text' : 'password'"
							:placeholder="$t('auth.password')"
						/>
						<button @click="changePasswordVisible" class="show-password element">
							<Eye v-if="!visiblePassword" />
							<EyeClosed v-else />
						</button>
					</div>
				</div>

				<div>
					<label class="label">{{ $t('auth.email') }}</label>
					<input class="input" :placeholder="$t('auth.email')" />
				</div>

				<div class="submit-btn-container">
					<button type="submit" class="submit-btn" @click="submitForm">
						{{ $t('auth.signIn') }}
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<style scoped lang="less">
@import '@/assets/settings';
@import '@/assets/auth/card';

.background {
	background: @background;
	background-size: cover;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}

.card-container {
	.card-width();
	.glass(30);
	.card-settings();
}

.title-container {
	display: flex;
	justify-content: center;
}

.title,
.label {
	color: #3c3c3c;
}

.form-container {
	display: grid;
	gap: 10px;
}

.input {
	width: 100%;
	padding: 12px 20px;
	margin: 8px 0;
	display: inline-block;
	border: @input-border solid var(--aur-border);
	border-radius: @input-radius;
	box-sizing: border-box;
}

// Password Input
.password-input {
	width: 100%;
	display: flex;
	flex-direction: column;
}

// Show Password Button
.show-password {
	border: none;
	background: none;
	color: inherit;
	cursor: pointer;
	text-decoration: underline;
}

.show-password:hover,
.show-password:active,
.show-password:focus {
	text-decoration: underline;
}

// Submit Button
.submit-btn-container {
	display: flex;
	width: 100%;
	justify-content: center;
}

.submit-btn {
	padding: 15px 64px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	background-color: var(--aur-primary);
	border: none;
	border-radius: @button-radius;
	color: white;
}
</style>
