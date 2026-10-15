# @codicus/configs

Shared Oxlint, Oxfmt and TypeScript configs for Node 24+ projects. For a new TypeScript library, start from the [TypeScript library template](https://github.com/codicus-labs/typescript-library-template); configure tests, CI and Git hooks in the project.

## TypeScript 7: Oxlint

```sh
pnpm add -D @codicus/configs typescript@^7 oxlint oxlint-tsgolint oxfmt @types/node
```

```ts
// oxlint.config.ts
export { default } from '@codicus/configs/oxlint';
```

```ts
// oxfmt.config.ts
export { default } from '@codicus/configs/oxfmt';
```

The shared Oxfmt preset leaves Svelte formatting and Tailwind class sorting disabled; enable either in your project's `oxfmt.config.ts` when needed.

In the library template, have `configs/tsconfig.base.json` extend `@codicus/configs/tsconfig/base.json`; keep source paths, cache locations and project references local. For a standalone Node project, extend `@codicus/configs/tsconfig/node.json`. Set `env: { node: true }` in the project Oxlint config if you need Node globals. Run `pnpm exec oxlint .` and `pnpm exec oxfmt --check .`.

## ESLint

For projects that lint with ESLint, such as SvelteKit, `@codicus/configs/eslint` adds the Codicus rule policy: the shared lint rules, no inline disable comments, and stricter TypeScript rules. The project configures parsers, framework plugins, and typescript-eslint itself; the TypeScript rules need typed linting.

```sh
pnpm add -D @codicus/configs eslint typescript-eslint
```

```js
// eslint.config.js
import codicus from '@codicus/configs/eslint';
import { defineConfig } from 'eslint/config';
import ts from 'typescript-eslint';

export default defineConfig(ts.configs.strictTypeChecked, /* framework configs */ codicus);
```

Place `codicus` after the presets so its rule settings win.

For repository development, see the [monorepo README](../../README.md).
