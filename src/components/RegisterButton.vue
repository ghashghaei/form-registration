<template>
  <button type="submit" class="button" :disabled="!isFormValid">
    Register
  </button>
</template>

<script setup>
defineProps({
  isFormValid: Boolean,
});
</script>

<style scoped>
.button {
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1rem;
  background-color: var(--color-button-bg, #007bff);
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.button:hover:not(:disabled) {
  background-color: var(--color-button-bg-hover, #0056b3);
}

.button:disabled {
  background-color: var(--color-button-disabled, #b0b0b0);
  cursor: not-allowed;
}

.button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(38, 143, 255, 0.5);
}
</style>
