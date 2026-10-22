import { defineConfig } from 'vite-plus';

import codicus from './packages/configs/src/vite-plus.ts';

export default defineConfig({
    ...codicus,
    lint: {
        ...codicus.lint,
        ignorePatterns: [...codicus.lint.ignorePatterns, 'packages/create/templates/**'],
        jsPlugins: [
            { name: 'codicus', specifier: './packages/configs/src/lint-rules/index.ts' },
            { name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' },
        ],
        overrides: [
            ...codicus.lint.overrides,
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
