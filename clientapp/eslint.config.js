/* eslint-disable @typescript-eslint/no-require-imports */
const reactPlugin = require('eslint-plugin-react');
const tseslint = require('typescript-eslint');
const prettierPlugin = require('eslint-plugin-prettier');
const eslintConfigPrettier = require('eslint-config-prettier');
const globals = require('globals');

module.exports = [
  {
    ignores: ['node_modules/', 'dist/', 'build/', '.next/'],
  },

  ...tseslint.configs.recommended,

  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],

    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin,
    },

    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      ...reactPlugin.configs.recommended.rules,

      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'all',
          arrowParens: 'always',
          printWidth: 100,
          semi: true,
        },
      ],
      '@typescript-eslint/camelcase': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'react/no-unescaped-entities': 'off',
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
      'prefer-arrow-callback': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },

  eslintConfigPrettier,
];
