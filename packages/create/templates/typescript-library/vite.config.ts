import fmtPreset from '@codicus/configs/oxfmt';
import lintPreset from '@codicus/configs/oxlint';
import { defineConfig } from 'vite-plus';

export default defineConfig({
    staged: {
        '*': 'vp check --fix --no-error-on-unmatched-pattern',
    },
    fmt: fmtPreset,
    lint: {
        ...lintPreset,
        jsPlugins: [...lintPreset.jsPlugins, { name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
        options: { ...lintPreset.options, typeCheck: true },
        rules: { ...lintPreset.rules, 'vite-plus/prefer-vite-plus-imports': 'error' },
    },
    pack: {
        entry: 'src/index.ts',
        format: 'esm',
        dts: true,
        exports: true,
        tsconfig: 'configs/tsconfig.app.json',
    },
});
