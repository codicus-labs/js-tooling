import { defineConfig } from 'vite-plus';

export default defineConfig({
    pack: {
        entry: {
            'vite-plus': 'src/vite-plus.ts',
            lint: 'src/lint.ts',
            fmt: 'src/fmt.ts',
            eslint: 'src/eslint.ts',
            'lint-rules/index': 'src/lint-rules/index.ts',
        },
        format: 'esm',
        dts: true,
        tsconfig: 'tsconfig.json',
    },
});
