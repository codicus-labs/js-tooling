import { defineConfig } from 'tsdown';

export default defineConfig({
    entry: {
        oxlint: 'src/oxlint.ts',
        eslint: 'src/eslint.ts',
        oxfmt: 'src/oxfmt.ts',
        'lint-rules/index': 'src/lint-rules/index.ts',
    },
    format: 'esm',
    dts: true,
    tsconfig: 'tsconfig.json',
});
