module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'import', 'jsx-a11y', 'prettier'],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['tsx'] }],
    'import/no-unresolved': 'off',
    'no-undef': 'off',
  },
  overrides: [
    {
      files: ['src/**/*.test.tsx', 'src/**/*.test.ts'],
      rules: { 'import/no-extraneous-dependencies': 'off' },
    },
  ],
};
