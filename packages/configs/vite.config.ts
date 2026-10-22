import { defineConfig } from 'vite-plus';

export default defineConfig({
    pack: {
        entry: {
            oxlint: 'src/oxlint.ts',
            eslint: 'src/eslint.ts',
            oxfmt: 'src/oxfmt.ts',
            'lint-rules/index': 'src/lint-rules/index.ts',
        },
        format: 'esm',
        dts: true,
        tsconfig: 'tsconfig.json',
    },
});
