<template>
  <div id="app">
    <h1>Registration Form</h1>
    <RegistrationForm />
  </div>
</template>

<script setup>
import RegistrationForm from "./components/RegistrationForm.vue";
</script>

<style>
#app {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
h1 {
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 20px;
}
</style>
