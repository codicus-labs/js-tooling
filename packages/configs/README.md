# @codicus/configs

Shared Vite+, ESLint and TypeScript configs for Node 24+ projects. For a new TypeScript library, run `vp create @codicus:typescript-library`.

## Vite+

```sh
pnpm add -D @codicus/configs vite-plus typescript @types/node
```

```ts
// vite.config.ts
import codicus from '@codicus/configs/vite-plus';
import { defineConfig } from 'vite-plus';

export default defineConfig({
    ...codicus,
});
```

`@codicus/configs/vite-plus` sets `staged`, `fmt` and `lint`; `vp check` then formats, lints and typechecks. Use `@codicus/configs/lint` and `@codicus/configs/fmt` to take only one preset or to extend it:

```ts
lint: { ...codicus.lint, env: { node: true } },
```

Have the project tsconfig extend `@codicus/configs/tsconfig/base.json`, or `@codicus/configs/tsconfig/node.json` for a standalone Node project.

### Vue and Svelte

Oxlint lints the `<script>` blocks of `.vue` and `.svelte` files, including the `vue` plugin rules. Type-aware rules and `typeCheck` only cover TypeScript files; run `vue-tsc` or `svelte-check` for components. Oxfmt formats Vue and Svelte files. Tailwind class sorting stays disabled; enable it in the project's `fmt` when needed.

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
