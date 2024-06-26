module.exports = {
  extends: "airbnb",
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ["react"],
  ignorePatterns: ["build/", "switcher.js", "theme.js"],
  rules: {
    "max-len": [0],
    "no-shadow": [0],
    "no-return-assign": [0],
    "no-param-reassign": [0],
    "no-prototype-builtins": [0],
    "object-curly-newline": [
      1,
      {
        ObjectExpression: {
          minProperties: 8,
          multiline: true,
          consistent: true,
        },
        ObjectPattern: { minProperties: 8, multiline: true, consistent: true },
        ImportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ExportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
      },
    ],
    "react/function-component-definition": [
      1,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "import/no-extraneous-dependencies": [0],
    "react/prop-types": [0],
    "linebreak-style": [0],
    "no-nested-ternary": [0],
    "no-undef": [0],
    "eslint-disable": "quotes",
  },
};
