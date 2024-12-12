// Utility function to validate the password rules
export const passwordRules = (password) => [
  {
    text: 'At least 8 characters',
    isValid: password.length >= 8,
  },
  {
    text: 'Contains special character',
    isValid: /[!@#$%^&*]/.test(password),
  },
  {
    text: 'Contains number',
    isValid: /\d/.test(password),
  },
  {
    text: 'Contains uppercase letter',
    isValid: /[A-Z]/.test(password),
  },
  {
    text: 'Contains lowercase letter',
    isValid: /[a-z]/.test(password),
  },
];
