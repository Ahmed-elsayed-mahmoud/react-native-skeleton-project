module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2015,
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "no-console": "off",
    "global-require": "off",
    "import/no-unresolved": [3],
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/interface-name-prefix": "always"
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  globals: {
    __DEV__: true
  }
}
