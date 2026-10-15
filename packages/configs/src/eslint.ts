import type { ESLint, Linter } from 'eslint';

import lintRules from './lint-rules/index.ts';

const sourceFiles = ['**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,svelte}'];
const typescriptFiles = ['**/*.{ts,cts,mts,tsx,svelte}'];

// Codicus rule policy only. Projects own parsers, framework plugins, and typescript-eslint presets;
// the TypeScript rules below require the typescript-eslint plugin and type information.
const config: Linter.Config[] = [
    {
        name: '@codicus/inline-config',
        linterOptions: {
            noInlineConfig: true,
            reportUnusedDisableDirectives: 'error',
        },
        rules: {
            'no-warning-comments': ['error', { location: 'start', terms: ['oxlint-disable', 'oxlint-enable'] }],
        },
    },
    {
        name: '@codicus/lint-rules',
        files: sourceFiles,
        plugins: {
            // SAFETY: Shared rules use the ESLint plugin runtime shape despite differing TypeScript declarations.
            codicus: lintRules as unknown as ESLint.Plugin,
        },
        rules: {
            'codicus/no-chained-type-assertions': 'error',
            'codicus/no-known-value-widening': 'warn',
            'codicus/no-module-mocking': 'error',
            'codicus/no-reflect-apply': 'warn',
            'codicus/no-reflect-get': 'warn',
            'codicus/no-widen-then-assert': 'error',
            'codicus/package-boundaries': 'error',
            'codicus/require-safety-comment-for-type-assertion': 'warn',
        },
    },
    {
        name: '@codicus/javascript',
        files: sourceFiles,
        rules: {
            curly: ['error', 'all'],
            eqeqeq: ['error', 'always', { null: 'ignore' }],
            'no-console': 'warn',
            'no-var': 'error',
            'prefer-object-has-own': 'error',
        },
    },
    {
        name: '@codicus/prefer-const',
        files: sourceFiles,
        // Svelte declares props with `let { ... } = $props()`; eslint-plugin-svelte offers `svelte/prefer-const` instead.
        ignores: ['**/*.svelte', '**/*.svelte.{js,ts}'],
        rules: {
            'prefer-const': 'error',
        },
    },
    {
        name: '@codicus/scripts',
        files: ['**/scripts/**/*.{js,cjs,mjs,ts,cts,mts}'],
        rules: {
            'no-console': 'off',
        },
    },
    {
        name: '@codicus/typescript',
        files: typescriptFiles,
        rules: {
            '@typescript-eslint/ban-ts-comment': [
                'error',
                {
                    minimumDescriptionLength: 10,
                    'ts-expect-error': 'allow-with-description',
                    'ts-ignore': true,
                },
            ],
            '@typescript-eslint/consistent-type-imports': [
                'error',
                { fixStyle: 'inline-type-imports', prefer: 'type-imports' },
            ],
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-non-null-assertion': 'warn',
            '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
            '@typescript-eslint/switch-exhaustiveness-check': 'error',
        },
    },
];

export default config;
