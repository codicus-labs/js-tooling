# @codicus/create

Project templates for [`vp create`](https://viteplus.dev/guide/create).

```sh
vp create @codicus                      # pick a template
vp create @codicus:typescript-library   # TypeScript library with Vite+ and the Codicus presets
```

Templates live in `templates/` and are copied as-is; `_gitignore` becomes `.gitignore`. Register a new template in `createConfig.templates` in `package.json`.
