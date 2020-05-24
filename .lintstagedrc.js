module.exports = {
  '*.{js,json,md}': 'prettier --write',
  '*.{ts,tsx}': ['prettier --write', 'eslint --fix'],
};
