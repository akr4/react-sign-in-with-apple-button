module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  rules: {
    // Use typing with TypeScript
    'react/prop-types': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
