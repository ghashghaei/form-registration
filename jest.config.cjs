module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest', // Handles .vue files
    '^.+\\.js$': 'babel-jest', // Handles JavaScript files
  },
  moduleFileExtensions: ['js', 'json', 'vue'], // Recognizes these extensions
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Maps @ to the src directory
  },
};
