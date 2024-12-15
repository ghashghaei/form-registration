<template>
  <div>
    <!-- Email Label and Input -->
    <label for="email" class="email-label">Email</label>
    <div class="input-container">
      <input
        id="email"
        :value="modelValue"
        type="email"
        placeholder="Enter your email"
        :class="['input', { error: emailError }]"
        aria-describedby="email-error"
        aria-invalid="true"
        @blur="validateEmail"
        @input="updateEmail"
      />
    </div>

    <!-- Email Error Message -->
    <p v-if="emailError" id="email-error" class="error-message">
      Please enter a valid email address.
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Define props and emit for v-model
const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

// Email validation state
const emailError = ref(false);

// Email validation regex
const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.value = !emailRegex.test(props.modelValue);
};

// Emit the updated email value
const updateEmail = (event) => {
  emit("update:modelValue", event.target.value);
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
</style>
