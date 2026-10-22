import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import localRules from './eslint-rules/index.cjs'

export default defineConfig([
  globalIgnores(['dist', '.agents/skills/**', '.claude/skills/**']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
  {
    files: ['src/**/*.{js,jsx}', 'public/dc-organizer/**/*.js'],
    plugins: { quality: localRules },
    rules: {
      'quality/max-lines': ['error', { max: 350 }],
      'quality/no-direct-console': ['error', { logger: 'a user-visible status or dedicated logger' }],
    },
  },
])
