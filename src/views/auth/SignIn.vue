<script setup lang="ts">
</script>

<template>
	<div class="sign-in-container">
		<div class="sign-in-photo">
			<p>a</p>
		</div>

		<div class="sign-in-form">
			<form class="form">
				<h1>{{ $t('auth.signIn') }}</h1>

				<div class="form-item">
					<label class="label">{{ $t('auth.accountName') }}</label>
					<input
						class="input"
						:placeholder="$t('auth.plsInput') + $t('auth.accountName')"
					/>
				</div>

				<div class="form-item">
					<label class="label">{{ $t('auth.password') }}</label>
					<input
						class="input"
						:placeholder="$t('auth.plsInput') + $t('auth.password')"
					/>
				</div>

				<button type="submit" class="form-submit-btn">{{ $t('auth.signIn') }}</button>
			</form>
		</div>
	</div>
</template>

<style scoped>
.sign-in-container {
	width: 100%;
	height: 100vh;
	display: flex;
}

.sign-in-photo {
	flex: 0 0  50%;
}

.sign-in-form {
	flex: 0 0 50%;
	background: var(--aur-bg);
	color: var(--aur-text);

	display: flex;
	justify-content: center;
	align-items: center;
}

.form {
	display: flex;
	flex-direction: column;
	gap: 24px;
}

.form-item {
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.label {
	color: var(--aur-text-sub);
}

.input {
	width: 100%;
	max-width: 320px;
	padding: 12px 18px;
	border: 1px solid var(--aur-border, #d0d7de);
	border-radius: 8px;
	background: var(--aur-bg-alt, #ffffff);
	color: var(--aur-text, #24292f);
	font-size: 0.95rem;
	transition: all 0.2s ease;
}

.input::placeholder {
	color: var(--aur-text-muted, #8c959f);
}

.input:focus {
	outline: none;
	border-color: var(--aur-primary, #0969da);
	box-shadow: 0 0 0 3px var(--aur-primary-a20, rgba(9, 105, 218, 0.2));
}

.form-submit-btn {
	padding: 12px 24px;
	min-height: 48px;
	font-size: 1rem;
	background: var(--aur-primary);
	border-radius: 8px;
	border: 1px solid var(--aur-border, #d0d7de);
	color: white;
}
</style>
