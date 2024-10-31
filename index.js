const parser = require('@typescript-eslint/parser')
const typescriptPlugin = require('typescript-eslint')
const pluginImport = require('eslint-plugin-import')

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  ...typescriptPlugin.configs.recommended,
  {
    files: ['**/*.{js,ts}'],
    ignores: ["**/*eslint*"],
    languageOptions: {
      parser,
      parserOptions: {
        project: ['./tsconfig.json']
      }
    },
    plugins: {
      import: pluginImport
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-inferrable-types': 'warn',
      '@typescript-eslint/no-redundant-type-constituents': 'warn',
      '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
      'keyword-spacing': 'warn',
      'no-trailing-spaces': 'warn',
      'eol-last': 'warn',
      'semi': ['error', 'never'],
      'eqeqeq': 'warn',
      'quotes': ['warn', 'single'],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'space-before-blocks': ['error', 'always'],
      'import/order': ['error', {
        groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index'
        ],
        'newlines-between': 'always',
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true
        }
      }],
      'comma-dangle': ['error', {
          arrays: 'never',
          objects: 'never',
          imports: 'never',
          exports: 'never',
          functions: 'never',
      }],
      'no-var': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
      '@typescript-eslint/no-require-imports': 'off'
    }
  }
]