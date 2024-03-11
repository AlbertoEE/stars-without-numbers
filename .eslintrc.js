module.exports = {
  parser: "@typescript-eslint/parser", // Explicitly set the parser
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
        project: "./tsconfig.json",
      },
    },
  ],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-key": "off",
    "@typescript-eslint/quotes": [
      "error",
      "double",
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowTypedFunctionExpressions: false },
    ],
  },
}
