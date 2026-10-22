import { defineConfig } from 'vite-plus';

import fmtPreset from './packages/configs/src/oxfmt.ts';
import lintPreset from './packages/configs/src/oxlint.ts';

export default defineConfig({
    staged: {
        '*': 'vp check --fix --no-error-on-unmatched-pattern',
    },
    fmt: fmtPreset,
    lint: {
        ...lintPreset,
        ignorePatterns: [...lintPreset.ignorePatterns, 'packages/create/templates/**'],
        jsPlugins: [
            { name: 'codicus', specifier: './packages/configs/src/lint-rules/index.ts' },
            { name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' },
        ],
        options: { ...lintPreset.options, typeCheck: true },
        rules: { ...lintPreset.rules, 'vite-plus/prefer-vite-plus-imports': 'error' },
        overrides: [
            ...lintPreset.overrides,
            {
                files: ['vite.config.ts'],
                rules: { 'codicus/package-boundaries': 'off' },
            },
            {
                files: ['packages/configs/src/eslint.ts'],
                rules: {
                    'codicus/no-chained-type-assertions': 'off',
                    'typescript/no-unsafe-type-assertion': 'off',
                    'typescript/no-unnecessary-type-assertion': 'off',
                },
            },
        ],
    },
});
