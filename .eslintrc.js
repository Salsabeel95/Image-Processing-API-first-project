module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        'prettier'
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 13
    },
    plugins: [
        "@typescript-eslint", 'prettier'
    ],
    rules: {}
};