module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
    'plugin:react/recommended',
    'xo',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 2],
    'object-curly-spacing': ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
};
