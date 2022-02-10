module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: '@react-native-community',
  plugins: ['import'],
  rules: {
    'react-native/no-inline-styles': 0,
    'react-hooks/exhaustive-deps': 1,
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        groups: [
          'internal',
          'external',
          'builtin',
          'index',
          'sibling',
          'parent',
          'object',
        ],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-console': 2,
    'no-shadow': [0, {hoist: 'never'}],
  },
};
