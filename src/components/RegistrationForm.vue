<template>
  <form @submit.prevent="handleSubmit">
    <EmailInput v-model="email" />
    <PasswordInput v-model="password" />
    <TermsCheckbox v-model="termsAccepted" />
    <RegisterButton :isFormValid="isFormValid" />
  </form>
</template>

<script setup>
import { ref, computed } from 'vue';
import EmailInput from './EmailInput.vue';
import PasswordInput from './PasswordInput.vue';
import TermsCheckbox from './TermsCheckbox.vue';
import RegisterButton from './RegisterButton.vue';

const email = ref('');
const password = ref('');
const termsAccepted = ref(false);

const isFormValid = computed(() => {
  return Boolean(
    email.value && password.value.length >= 8 && termsAccepted.value
  );
});

const handleSubmit = () => {
  alert('Form submitted!');
};
</script>
