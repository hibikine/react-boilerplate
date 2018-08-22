module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'import', 'jsx-a11y', 'prettier'],
  parser: 'typescript-eslint-parser',
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['tsx'] }],
    'import/no-unresolved': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
  },
  overrides: [
    {
      files: ['src/**/*.test.tsx', 'src/**/*.test.ts'],
      rules: { 'import/no-extraneous-dependencies': 'off' },
    },
  ],
};
