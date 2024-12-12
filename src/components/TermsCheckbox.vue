<template>
  <div class="terms-container">
    <!-- Terms Checkbox Input -->
    <input
      id="terms"
      v-model="termsAccepted"
      type="checkbox"
      class="terms-checkbox"
      aria-labelledby="terms-label"
      aria-checked="termsAccepted"
    />
    <!-- Terms Label -->
    <label id="terms-label" for="terms" class="terms-label">
      Accept Terms of Service
    </label>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const termsAccepted = ref(false);
</script>

<style scoped>
.terms-container {
  display: flex;
  margin-top: 1rem;
}

.terms-checkbox {
  margin-right: 0.5rem;
  width: 1rem;
  height: 1rem;
}

.terms-label {
  font-size: 1rem;
  color: var(--color-text, #333);
  cursor: pointer;
}
</style>
