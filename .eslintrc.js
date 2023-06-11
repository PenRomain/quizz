module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'treact/jsx-props-no-spreading': 0,
    'no-shadow': 0,
    'react/prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
  },
};
