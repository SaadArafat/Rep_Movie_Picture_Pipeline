module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["react-app", "eslint:recommended", "plugin:prettier/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
