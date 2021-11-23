<a href="https://bootcamp-project.com/" target="_blank"><img src="https://bootcamp-project.com/tbcp.svg" align="right" height="200" /></a>

<h1 align="center">How to Build and Publish Modern Browser Extension with Svelte TailwindCSS TypeScript and Webpack</h1>

<div align="center"><img src="https://img.shields.io/badge/Bootcamp-Project-blue?style=for-the-badge" /></div>

## 👉 About 👈

**Minimum Viable Product**: What is what we want?

- [X] Modern Web techniques
  - [X] TypeScript Support
  - [X] Svelte Components
    - [X] Storybook UI Testing and Presentation
  - [X] TailwindCSS Styling
  - [X] with Webpack bundeling
- [X] a Static Application Security Code Analyzing
  - [X] with ESLint (eslint-plugin-security)
- [ ] A Test Driven Development approche
  - [ ] with Mocha and Chai
- [X] Automation (CI/CD)
  - [ ] Linting
  - [ ] Building
  - [ ] Packaging
  - [ ] Deployment / Publishing
- [X] a on Board Documentation for our Users

---

## 🚀 Getting Started 🚀

_For more examples, please refer to the [Documentation](https://frameworks.bootcamp-project.com)_

### ✋ Prerequisites ✋

Ensure you have

- [Node.js](https://nodejs.org) 12.0.0 or later and
- [Yarn](https://yarnpkg.com) v2 and
- [web-ext](https://github.com/mozilla/web-ext) installed

```bash
sudo npm install -g yarn
```

```bash
sudo yarn global add web-ext --prefix /usr/local
# and, install other global dependencies
sudo yarn global add webpack webpack-cli webpack-bundle-analyzer typescript cross-env concurrently rimraf --prefix /usr/local
```

### 💪 Installation 💪

- `yarn install` to install dependencies.

## 😏 Development 😏

Run the following:

- `yarn run dev:chrome` to start the development server for chrome extension
- `yarn run dev:firefox` to start the development server for firefox addon
- `yarn run dev:opera` to start the development server for opera extension

### 🤓 Linting 🤓

### 🧐 Testing 🧐

### 🤩 Building 🤩

Then run the following:

- `yarn run build:chrome` to build chrome extension
- `yarn run build:firefox` to build firefox addon
- `yarn run build:opera` to build opera extension
- `yarn run build` builds and packs extensions all at once to extension/ directory

Check here for more details: [https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)

### 🥳 Publishing 🥳

| Browsers | Web store |
| -------------- | --------------- |
| Chrome | [https://developer.chrome.com/webstore/publish](https://developer.chrome.com/webstore/publish) |
| Microsoft Edge | [https://docs.microsoft.com/en-us/microsoft-edge/extensions-chromium/publish/publish-extension](https://docs.microsoft.com/en-us/microsoft-edge/extensions-chromium/publish/publish-extension) |
| Firefox | [https://extensionworkshop.com/documentation/publish/submitting-an-add-on](https://extensionworkshop.com/documentation/publish/submitting-an-add-on) |

It's possible to automatically publish to both the Chrome Web Store and Mozilla Addons at once by adding these secrets on GitHub Actions:

1. `CLIENT_ID`, `CLIENT_SECRET`, and `REFRESH_TOKEN` from [Google APIs][link-cws-keys].
2. `WEB_EXT_API_KEY`, and `WEB_EXT_API_SECRET` from [AMO][link-amo-keys].

Also include `EXTENSION_ID` in the secrets ([how to find it](https://stackoverflow.com/a/8946415/288906)) and add Mozilla’s [`gecko.id`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) to `manifest.json`.

The GitHub Actions workflow will:

1. Build the extension
2. Create a version number based on the current UTC date time, like [`19.6.16`](https://github.com/fregante/daily-version-action) and sets it in the manifest.json
3. Deploy it to both stores

#### Auto-publishing

Thanks to the included [GitHub Action Workflows](.github/workflows), if you set up those secrets in the repo's Settings, the deployment will automatically happen:

- on a schedule, by default [every week](.github/workflows/deploy-automatic.yml) (but only if there are any new commits in the last tag)
- manually, by clicking ["Run workflow"](https://github.blog/changelog/2020-07-06-github-actions-manual-triggers-with-workflow_dispatch/) in the Actions tab.

## ⭐️ Features ⭐️

- **Cross Browser Support** ([Web-Extensions API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API))
- Promise-based `browser.*` APIs [webextension-polyfill](https://github.com/mozilla/webextension-polyfill)
- **ES6 / Node.js** modules support
- **TypeScript** by default
- [**Svelte** UI Library](https://gitlab.com/the-bootcamp-project/libraries/svelte-components) by default
- **Tailwind CSS** by default
- **Auto-publishing** with **auto-versioning** and support for manual releases
- [Extensive configuration **documentation**](https://frameworks.bootcamp-project.com/#/browser_extension/index)

### 😎 Built With 😎

- [mozilla/web-ext](https://github.com/mozilla/web-ext)
- [Webpack](https://webpack.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Svelte](https://svelte.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [IPFS](https://ipfs.io/)

## 📑 Changelog 📑

See [CHANGELOG](CHANGELOG) for more information.

## 📋 Roadmap 📋

- Smart reload
- Auto packs browser specific build files
- Auto-syncing options
- Automatic build on code changes

See the [open issues](https://gitlab.com/the-bootcamp-project/frameworks/browser-extension/-/issues) for a list of proposed features (and known issues).

## 🤝 Contribute 🤝

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Please read the [contribution guidelines](docs/_media/code_of_conduct.md) first.

## 📜 License 📜

See [LICENSE](https://frameworks.bootcamp-project.com/#/LICENSE) for more information.

## 💌 Contact 💌

[Bootcamp contributors](https://bootcamp-project.com/) - `contributors` @ `bootcamp-project` .com

## 🏆 Acknowledgements 🏆

Thanks for these awesome resources that were used during the development of the **Bootcamp Project: Modern Application Frameworks**:

- [Mozilla: WebExtensions](https://developer.mozilla.org/de/docs/Mozilla/Add-ons/WebExtensions)
- [Chrome extensions](https://developer.chrome.com/docs/extensions/)
