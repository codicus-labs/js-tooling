# Library

Describe the library's purpose here. `vp create` sets the package name in `package.json`. The package is private by default; remove `"private": true` when you are ready to publish.

## Development

Uses [Vite+](https://viteplus.dev) with Node from `.node-version` and pnpm 12.14.0.

```sh
vp install
vp run build
vp run check
```

`vp run build` creates an ESM bundle and declarations with `vp pack`. `vp run check` runs formatting, type-aware linting with type checking, Vitest and Knip. Lint, format and the TypeScript base config come from `@codicus/configs`; pnpm's installation policy comes from `@codicus/pnpm-plugin-configs`. CI builds before running the checks. The template ships GitHub Actions (`.github/workflows/check.yml`) and GitLab CI (`.gitlab-ci.yml`); delete the one you do not use. Tests can be colocated as `*.spec.ts`; `src/index.spec.ts` tests the demo public API. `src/index.ts` exports a demo `greet` function; replace it with your public API.

`vp check --fix` fixes formatting and lint issues. `vp install` sets up the Git hooks in `.vite-hooks`: `vp staged` on pre-commit and commitlint on commit-msg.
