import tseslint from 'typescript-eslint';
export default [{ ignores: ['**/dist/**', '**/node_modules/**'] }, {
  files: ['**/*.ts', '**/*.tsx'],
  languageOptions: { parser: tseslint.parser, parserOptions: { ecmaFeatures: { jsx: true } } },
  rules: {
    'max-lines': ['error', { max: 100 }],
    'max-lines-per-function': ['error', { max: 30 }],
    'max-params': ['error', 3],
    'max-depth': ['error', 3],
  },
}];
