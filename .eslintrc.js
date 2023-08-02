module.exports = {

    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'airbnb'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: [
        'react',
        '@typescript-eslint'
    ],
    rules: {
        'react/jsx-filename-extension': 'off',
        'react/jsx-filename-extension': 'off',
        'react/jsx-indent': [ 2, 4 ],
        indent: [ 2, 4 ],
        'react/jsx-indent-props': [ 2, 4 ], 
        'react/react-in-jsx-scope': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'no-return-await': 'warn'
    },
    ignorePatterns: [ '.eslintrc.js', 'node_modules' ],
    globals: {
    'IS__DEV': true
    }
}
