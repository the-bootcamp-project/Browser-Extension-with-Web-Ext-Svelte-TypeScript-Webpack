# Getting Started

```git
git submodule add -b main https://gitlab.com/the-bootcamp-project/boilerplates/svelte-components.git src/components
git submodule update --init
```

```git
git submodule
git submodule deinit -f -- view
rm -rf .git/modules/view
git rm -f view
```

```bash
yarn add --dev copy-webpack-plugin @types/copy-webpack-plugin
```

```typescript
    plugins: [
        ...
        new CopyPlugin({ patterns: [{ context: path.resolve(__dirname, "view", "dist"), from: path.resolve(__dirname, "view", "dist", "*.{html,js}"), to: path.resolve(__dirname, "dist"), force:true }] }),
    ],
```
