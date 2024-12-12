import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import prettier from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.vue'], // Apply to Vue files
    languageOptions: {
      parser: vueParser, // Use vue-eslint-parser
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
    plugins: {
      vue,
    },
    rules: {
      ...vue.configs['vue3-recommended'].rules, // Use Vue 3 recommended rules
      ...prettier.rules, // Include Prettier rules
      'vue/multi-word-component-names': 'off', // Allow single-word names
    },
  },
  {
    files: ['**/*.js'], // Apply to JavaScript files
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      ...prettier.rules, // Include Prettier rules
    },
  },
];
