---
"@codicus/configs": minor
---

Breaking: replace the Oxlint and Oxfmt presets with Vite+ presets. `@codicus/configs/vite-plus` exports `staged`, `fmt` and `lint` for `vite.config.ts`; `@codicus/configs/lint` and `@codicus/configs/fmt` export the single presets. The lint preset enables `typeCheck`, the Vite+ Oxlint plugin and the `vue` plugin; the format preset formats Svelte. `@codicus/configs/oxlint` and `@codicus/configs/oxfmt` are removed, and `oxlint`, `oxlint-tsgolint` and `oxfmt` are no longer peer dependencies.
