# js-tooling

- [`@codicus/configs`](packages/configs/README.md): Oxlint, Oxfmt, ESLint, and TypeScript presets.
- [`@codicus/pnpm-plugin-configs`](packages/pnpm-plugin/README.md): pnpm installation policy.

Uses [Vite+](https://viteplus.dev) with Node from `.node-version` and pnpm 12.14.0. Run `vp install`, `vp run build`, and `vp run check` (format, lint, typecheck, and Knip). `vp install` sets up the Git hooks in `.vite-hooks`.
