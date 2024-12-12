<template>
  <div>
    <!-- Password Label -->
    <label for="password" class="password-label">Password</label>

    <!-- Password Input and Toggle Visibility -->
    <div class="input-container">
      <input
        id="password"
        v-model="password"
        :type="passwordVisible ? 'text' : 'password'"
        placeholder="Enter your password"
        class="input"
        aria-describedby="password-error"
        aria-invalid="passwordError"
        @input="checkPasswordRules"
      />
      <span class="toggle-visibility" @click="toggleVisibility">
        <img
          :src="passwordVisible ? eyeIconOpen : eyeIconClosed"
          alt="Toggle visibility"
          class="toggleIcon"
        />
      </span>
    </div>

    <!-- Password Rules and Strength Meter -->
    <div v-if="password.length > 0" class="password-rules">
      <p class="strength-label">{{ strengthText }}</p>

      <!-- Dynamic rendering of password rules -->
      <div
        v-for="(rule, index) in passwordRulesComputed"
        :key="index"
        :class="{ valid: rule.isValid, invalid: !rule.isValid }"
      >
        <img
          :src="rule.isValid ? tickIcon : crossIcon"
          alt="Icon"
          class="icon"
        />
        {{ rule.text }}
      </div>

      <!-- Strength Meter -->
      <div class="strength-meter-container">
        <div
          class="strength-meter"
          :style="{
            width: strengthPercentage + '%',
            backgroundColor: strengthColor,
          }"
        ></div>
      </div>
    </div>

    <!-- Error message if the password does not meet rules -->
    <p v-if="passwordError" id="password-error" class="error-message">
      Please ensure your password meets the required criteria.
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { passwordRules } from '../utils/passwordValidation';
import tickIcon from '../assets/check.png';
import crossIcon from '../assets/remove.png';
import eyeIconOpen from '../assets/open-eye.png';
import eyeIconClosed from '../assets/eye.png';

// Password input state
const password = ref('');
const passwordVisible = ref(false);
const passwordError = ref(false);

// Password rules and validation logic
const passwordRulesComputed = computed(() => passwordRules(password.value));

// Password strength calculation based on valid rules
const strengthPercentage = computed(() => {
  const validRulesCount = passwordRulesComputed.value.filter(
    (rule) => rule.isValid
  ).length;

  if (validRulesCount === 5) return 100; // Strong password (5 rules covered)
  if (validRulesCount >= 3) return 60; // Medium strength (3 to 4 rules covered)
  if (validRulesCount >= 1) return 30; // Weak password (1 to 2 rules covered)
  return 10; // Very weak password (less than 1 rule)
});

// Password strength color based on percentage
const strengthColor = computed(() => {
  const strength = strengthPercentage.value;
  if (strength >= 80) return 'var(--color-valid)'; // Green for strong
  if (strength >= 40) return 'var(--color-warning)'; // Yellow for medium
  return 'var(--color-invalid)'; // Red for weak
});

// Password strength text
const strengthText = computed(() => {
  const strength = strengthPercentage.value;
  if (strength >= 80) return 'Strong';
  if (strength >= 40) return 'Medium';
  return 'Weak';
});

// Toggle password visibility
const toggleVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};

// Check password validation status
const checkPasswordRules = () => {
  // Update password error based on whether any rule is invalid
  passwordError.value = passwordRulesComputed.value.some(
    (rule) => !rule.isValid
  );
};
</script>

<style scoped>
.input-container {
  position: relative;
  display: flex;
  margin-bottom: 1rem;
}

.password-label {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  display: block;
}

.toggle-visibility {
  position: absolute;
  right: 1rem;
  cursor: pointer;
  width: 1.25rem;
  height: 1.25rem;
}

.input {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 0.375rem;
  box-sizing: border-box;
}

.password-rules {
  margin-top: 1rem;
}

.password-rules div {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.valid {
  color: var(--color-valid);
}

.invalid {
  color: var(--color-invalid);
}

.strength-meter-container {
  margin-top: 1rem;
}

.strength-meter {
  width: 100%;
  height: 0.5rem;
  border-radius: 0.25rem;
  transition: width 0.3s ease-in-out;
}

.icon,
.toggleIcon {
  width: 1.25rem;
  height: 1.25rem;
  object-fit: contain;
  display: block;
}

.toggleIcon {
  margin-top: 16px;
}

.strength-label {
  font-size: 1rem;
  margin-top: 0.5rem;
}

.error-message {
  color: var(--color-invalid);
  font-size: 0.875rem;
  margin-top: 0.5rem;
}
</style>
