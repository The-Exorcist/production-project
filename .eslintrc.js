module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        'i18next',
        "react-hooks",
        '@typescript-eslint',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'linebreak-style': 'off',
        'react/jsx-runtime': 'off',
        'react/function-component-definition': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: ['data-testid', 'to'],
            },
        ],
        'max-len': ['error', { ignoreComments: true, code: 120 }],
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        "react-hooks/rules-of-hooks": "warn",
        "react-hooks/exhaustive-deps": "error",
        'no-param-reassign': 'off',
        'no-undef': 'off'
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
    },
};
