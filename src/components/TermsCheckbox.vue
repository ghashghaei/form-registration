<template>
  <div class="terms-container">
    <!-- Checkbox Input, use `v-bind` to bind the prop to the checkbox -->
    <input
      id="terms"
      :checked="modelValue"
      type="checkbox"
      class="terms-checkbox"
      aria-labelledby="terms-label"
      aria-checked="modelValue"
      @change="updateTermsAccepted"
    />
    <label id="terms-label" for="terms" class="terms-label"
      >Accept Terms of Service</label
    >
  </div>
</template>

<script setup>

// Define `modelValue` prop and emit the `update:modelValue` event
const props = defineProps({
  modelValue: Boolean,
});

const emit = defineEmits(["update:modelValue"]);

// Update the `modelValue` when checkbox is clicked
const updateTermsAccepted = () => {
  emit("update:modelValue", !props.modelValue);
};
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
