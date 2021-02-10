module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  extends: [
    "plugin:@typescript-eslint/recommended"
  ],
  rules: { }
};
