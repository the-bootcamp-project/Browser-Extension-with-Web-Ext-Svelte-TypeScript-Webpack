const path = require('path');
module.exports = {
    parser: '@typescript-eslint/parser',
    // Specifies the ESLint parser
    plugins: ['security', '@typescript-eslint'],
    env: {
        browser: true
    },
    extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "plugin:prettier/recommended",  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        "plugin:security/recommended"
    ],
    parserOptions: {
        project: path.resolve(__dirname, './tsconfig.json'),
        tsconfigRootDir: __dirname,
        ecmaVersion: 'browser', // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        // '@typescript-eslint/explicit-function-return-type': 'off',
        // '@typescript-eslint/no-unused-vars': 'off'
    }
};
