# @codicus/configs

## 0.9.0

### Minor Changes

- Breaking: replace the Oxlint and Oxfmt presets with Vite+ presets. `@codicus/configs/vite-plus` exports `staged`, `fmt` and `lint` for `vite.config.ts`; `@codicus/configs/lint` and `@codicus/configs/fmt` export the single presets. The lint preset enables `typeCheck`, the Vite+ Oxlint plugin and the `vue` plugin; the format preset formats Svelte. `@codicus/configs/oxlint` and `@codicus/configs/oxfmt` are removed, and `oxlint`, `oxlint-tsgolint` and `oxfmt` are no longer peer dependencies.

## 0.8.1

### Patch Changes

- Point package repository metadata to the renamed `codicus-labs/js-tooling` repository.

## 0.8.0

### Minor Changes

- Add the `eslint` subpath with the Codicus rule policy for ESLint projects. It replaces `@codicus/eslint-svelte`; projects now configure parsers, Svelte, and typescript-eslint presets themselves.

## 0.7.0

### Minor Changes

- Move the ESLint/Svelte preset to `@codicus/eslint-svelte` and remove the `eslint-svelte` subpath and its dependencies from `@codicus/configs`.

## 0.6.0

### Minor Changes

- Disable Svelte formatting and Tailwind class sorting in the shared Oxfmt preset by default. Enable either option in the consuming project's Oxfmt config.

## 0.5.0

### Minor Changes

- Enable `import/no-cycle` as an error in the default Oxlint preset.

## 0.4.0

### Minor Changes

- Remove the pnpm-plugin subpath. Install @codicus/pnpm-plugin-configs as a separate pnpm config dependency instead.

## 0.3.0

### Minor Changes

- Simplify the published presets to Oxlint, Oxfmt, ESLint/Svelte, and shared TypeScript configs. Remove the legacy ESLint, Vitest, commitlint, specialized Oxlint, and Svelte tsconfig exports; consumers must update their imports. Build the presets with tsdown and enable type-aware Oxlint rules by default.

## 0.2.0

### Minor Changes

- Sort Tailwind classes in formatted files, including Svelte components.

### Patch Changes

- Indent Svelte script and style blocks when formatting.
