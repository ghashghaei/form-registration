<template>
  <div>
    <!-- Email Label and Input -->
    <label for="email" class="email-label">Email</label>
    <div class="input-container">
      <input
        id="email"
        v-model="email"
        type="email"
        placeholder="Enter your email"
        :class="['input', { error: emailError }]"
        aria-describedby="email-error"
        aria-invalid="true"
        @blur="validateEmail"
      />
    </div>

    <!-- Email Error Message -->
    <p v-if="emailError" id="email-error" class="error-message">
      Please enter a valid email address.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Email state and error
const email = ref('');
const emailError = ref(false);

// Email validation regex
const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.value = !emailRegex.test(email.value);
};
</script>

<style scoped>
/* General email label and input container */
.email-label {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  display: block;
}

.input-container {
  position: relative;
  margin-bottom: 1rem;
}

/* Input styling with dynamic error handling */
.input {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 0.375rem;
  box-sizing: border-box;
}

.input:focus {
  outline: none;
  border-color: var(--color-button-bg);
}

.input.error {
  border-color: var(--color-invalid);
}

/* Error message styling */
.error-message {
  color: var(--color-invalid);
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

/* Button styling (if included in the form) */
button {
  padding: 1rem;
  background-color: var(--color-button-bg);
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
}

button:disabled {
  background-color: var(--color-button-disabled);
  cursor: not-allowed;
}

input[type='checkbox'] {
  width: auto;
}

label {
  font-size: 1rem;
  font-weight: normal;
  margin: 0 5px;
}
</style>
