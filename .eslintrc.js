// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
  ignorePatterns: ['apps/**', 'packages/**'],
  extends: ['@medenia/eslint-config/library.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
