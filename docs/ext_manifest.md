# Manifest

## General Information

```json
{
  "manifest_version": 2,
  "name": "Borderify",
  "version": "0.0.1",
  "short_name": "My Extension",
  "description": "Replaces pictures with pictures of cats.",
  "author": "Walt Whitman",
  "homepage_url": "https://gitlab.com/the-bootcamp-project/boilerplates/browser-extension",
  "default_locale": "en",
}
```

## UI Actions

```json
  "browser_action": {
    "default_title": "Beastify",
    "default_popup": "popup.html"
  },
```

```json
  "page_action": {
    "default_icon": {
      "19": "button/geo-19.png",
      "38": "button/geo-38.png"
    },
    "default_title": "Beastify",
    "default_popup": "popup.html"
  },
```

```json
  "options_ui": {
    "open_in_tab": true, /* Attribute Incompatible in Opera and Safari */
    "page": "options.html"
  },
```

```json
  "devtools_page": "devtools.html", // Fully Incompatible in Safari and Firefox Android
```

```json
  // Fully Inkompalible in Opera and Safari
  "user_scripts": {
    "api_script": "apiscript.js"
  },
```

## Permissions

- [permissions.getAll()](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/permissions/getAll)

<!-- tabs:start -->

## **Chrome**

```json
{
  "permissions": [
    "activeTab",
    "alarms",
    "clipboardWrite",
    "cookies",
    "storage",
    "tabs",
    "webNavigation",
    "webRequest",
    "unlimitedStorage",
    "clipboardRead",
    "downloads",
    "downloads.open",
    "geolocation",
    "idle",
    "management",
    "notifications",
    "privacy",
    "topSites",
    "proxy",
    "nativeMessaging",
    "contextMenus",
    "bookmarks",
    "browsingData",
    "history",
    "identity",
    "sessions"
  ],
}
```

## **Edge**

```json
{
  "permissions": [
    "activeTab",
    "alarms",
    "clipboardWrite",
    "cookies",
    "storage",
    "tabs",
    "webNavigation",
    "webRequest",
    "unlimitedStorage",
    "clipboardRead",
    "downloads",
    "downloads.open",
    "geolocation",
    "idle",
    "management",
    "notifications",
    "privacy",
    "topSites",
    "proxy",
    "nativeMessaging",
    "contextMenus",
    "bookmarks",
    "browsingData",
    "history",
    "identity",
    "sessions"
  ],
}
```

## **Firefox**

```json
{
  "permissions": [
    "activeTab",
    "alarms",
    "clipboardWrite",
    "cookies",
    "storage",
    "tabs",
    "webNavigation",
    "webRequest",
    "unlimitedStorage",
    "webRequestBlocking",
    "clipboardRead",
    "downloads",
    "downloads.open",
    "geolocation",
    "idle",
    "management",
    "notifications",
    "privacy",
    "topSites",
    "proxy",
    "nativeMessaging",
    "contextMenus",
    "bookmarks",
    "browsingData",
    "history",
    "identity",
    "sessions",
    "menus",
    "browserSettings",
    "contentSettings",
    "contextualIdentities",
    "find",
    "captivePortal",
    "pkcs11",
    "search",
    "tabHide",
    "theme"
  ]
}
```

### Firefox Android

```json
{
  "permissions": [
    "activeTab",
    "alarms",
    "clipboardWrite",
    "cookies",
    "storage",
    "tabs",
    "webNavigation",
    "webRequest",
    "unlimitedStorage",
    "webRequestBlocking",
    "clipboardRead",
    "downloads",
    "downloads.open",
    "geolocation",
    "idle",
    "management",
    "notifications",
    "privacy",
    "topSites",
    "proxy",
    "browserSettings",
    "contentSettings",
    "contextualIdentities"
  ]
}
```

## **Opera**

```json
{
  "permissions": [
    "activeTab",
    "alarms",
    "clipboardWrite",
    "cookies",
    "storage",
    "tabs",
    "webNavigation",
    "webRequest",
    "webRequestBlocking",
    "clipboardRead",
    "downloads",
    "downloads.open",
    "geolocation",
    "idle",
    "management",
    "notifications",
    "privacy",
    "topSites",
    "nativeMessaging",
    "contextMenus",
    "bookmarks",
    "browsingData",
    "history",
    "identity",
    "sessions",
    "dns",
    "debugger",
    "pageCapture"
  ]
}
```

## **Safari**

```json
{
  "permissions": [
    "activeTab",
    "alarms",
    "clipboardWrite",
    "cookies",
    "storage",
    "tabs",
    "webNavigation",
    "webRequest",
    "unlimitedStorage",
    "nativeMessaging",
    "contextMenus",
    "dns",
    "menus"
  ]
}
```

<!-- tabs:end -->

## Optional Permissions

```json
  "optional_permissions": [],
```

## Content Security Policies

```json
  // Fully Inkompalible in Firefox-Android
  "content_security_policy": "script-src 'self'; object-src 'self'; frame-src 'self';"
```

## Backgroud and Content Scripts

```json
  "background": {
    "persistent": true, // Attribute Incompatible in Firefox-Android
    "scripts": ["browser-polyfill.min.js","background.js"]
  },
```

```json
  "content_scripts": [{
    "all_frames": true,
    "js": ["browser-polyfill.min.js","content.js"],
    "css": [],
    "run_at": "",
    "matches": [],
    "match_about_blank": true, // Attribute Incompatible in Safari
    "exclude_matches": [],
    "include_globs": [], // Attribute Incompatible in Safari
    "exclude_globs": [] // Attribute Incompatible in Safari
  }]
```

## Privacy Mode

```json
  // Fully Inkompalible in Safari
  "incognito": "spanning"
  "incognito": "split" // Attribute Incompatible in Firefox-Desktop, Safari and Firefox-Android
```

## Accessible Resources

```json
  "web_accessible_resources": []
```

## Browser Behaviour

```json
  // Fully Inkompalible in Safari and Firefox-Android
  "omnibox": {
    "keyword": "mdn"
  }
```

```json
  // Fully Inkompalible in Opera and Firefox-Android
  "chrome_url_overrides": { /* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides */
    "newtab": "my-new-tab.html"
  }
```

```json
  // Fully Inkompalible in Opera, Safari and Firefox-Android
  "chrome_settings_overrides": { /* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides */
    "homepage": "https://developer.mozilla.org/",
    "search_provider": {
      "name": "Discogs",
      "search_url": "https://www.discogs.com/search/?q={searchTerms}",
      "keyword": "disc",
      "favicon_url": "https://www.discogs.com/favicon.ico"
    }
  }
```

[commands](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands)

## Full Example

[Browser compatibility for manifest.json](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json)

```json
{
  "manifest_version": 2,  /* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version */
  "name": "Borderify",    /* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name */
  "version": "0.0.1",     /* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version */
  "short_name": "My Extension", /* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/short_name */
  "description": "Replaces pictures with pictures of cats.",    /* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description */
  "author": "Walt Whitman",                                     /* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/author */
  /* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url */
  "homepage_url": "https://gitlab.com/the-bootcamp-project/boilerplates/browser-extension",
  "default_locale": "en", /* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/default_locale */

  "browser_action": { /* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action */
    "default_title": "Beastify",
    "default_popup": "popup.html"
  },
  "page_action": {  /* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action */
    "default_icon": {
      "19": "button/geo-19.png",
      "38": "button/geo-38.png"
    },
    "default_title": "Beastify",
    "default_popup": "popup.html"
  },
  "options_ui": { /* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui */
    "open_in_tab": true,
    "page": "options.html"
  },
  "user_scripts": { /* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts */
    "api_script": "apiscript.js"
  },
  "devtools_page": "devtools.html", /* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page */

  "permissions": [ /* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions */
    "<all_urls>",
    /* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#browser_compatibility */
    "activeTab",
    "alarms",
    "clipboardWrite",
    "cookies",
    "storage",
    "tabs",
    "webNavigation",
    "webRequest",

    /* Chromium, Edge, Firefox-Desktop, Safari, Firefox-Desktop only */
    "unlimitedStorage",     // Inkompalible Opera
    /* Chromium, Edge, Firefox-Desktop, Opera, Firefox-Desktop only */
    "webRequestBlocking"    // Inkompalible Safari
    "clipboardRead",        // Inkompalible Safari
    "downloads",            // Inkompalible Safari
    "downloads.open",       // Inkompalible Safari
    "geolocation",          // Inkompalible Safari
    "idle",                 // Inkompalible Safari
    "management",           // Inkompalible Safari
    "notifications",        // Inkompalible Safari
    "privacy",              // Inkompalible Safari
    "topSites",             // Inkompalible Safari

    /* Chromium, Edge, Firefox-Desktop only */
    "proxy",                // Inkompalible Opera, Safari

    /* Chromium, Edge, Firefox-Desktop, Opera, Safari only */
    "nativeMessaging",      // Inkompalible Firefox for Android
    "contextMenus",         // Inkompalible Firefox for Android

    /* Chromium, Edge, Firefox-Desktop, Opera only */
    "bookmarks",            // Inkompalible Safari, Firefox for Android
    "browsingData",         // Inkompalible Safari, Firefox for Android
    "history",              // Inkompalible Safari, Firefox for Android
    "identity",             // Inkompalible Safari, Firefox for Android
    "sessions",             // Inkompalible Safari, Firefox for Android
  ],
  "optional_permissions": [ /* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions */
    /* Chromium, Edge, Opera, Safari only */
    "dns",                  // Inkompalible Firefox, Firefox for Android
    /* Chromium, Edge, Opera */
    "debugger",             // Inkompalible Firefox, Safari, Firefox for Android
    "pageCapture",          // Inkompalible Firefox, Safari, Firefox for Android
    /* Chromium, Edge only */
    "background",           // Inkompalible Firefox, Opera, Safari, Firefox for Android

    /* Firefox-Desktop, Safari only */
    "menus",                // Inkompalible Chrome, Edge, Opera, Firefox for Android
    /* Firefox-Desktop, Firefox-Android onyl */
    "browserSettings",      // Inkompalible Chrome, Edge, Opera, Safari
    "contentSettings",      // Inkompalible Chrome, Edge, Opera, Safari
    "contextualIdentities", // Inkompalible Chrome, Edge, Opera, Safari
    /* Firefox-Desktop only */
    "find",                 // Inkompalible Chrome, Edge, Opera, Safari, Firefox for Android
    "captivePortal",        // Inkompalible Chrome, Edge, Opera, Safari, Firefox for Android
    "pkcs11",               // Inkompalible Chrome, Edge, Opera, Safari, Firefox for Android
    "search",               // Inkompalible Chrome, Edge, Opera, Safari, Firefox for Android
    "tabHide",              // Inkompalible Chrome, Edge, Opera, Safari, Firefox for Android
    "theme",                // Inkompalible Chrome, Edge, Opera, Safari, Firefox for Android
  ],

  /* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy */
  "content_security_policy": "script-src 'self'; object-src 'self'; frame-src 'self';",

  "background": { /* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background */
    "scripts": ["browser-polyfill.min.js","background.js"]
  },
  "content_scripts": [{ /* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts */
    "all_frames": true,
    "js": ["browser-polyfill.min.js","content.js"],
    "css": [],
    "run_at": "",
    "matches": [],
    "match_about_blank": true,
    "exclude_matches": [],
    "include_globs": [],
    "exclude_globs": []
  }],
  "incognito": "spanning", /* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito */
  "web_accessible_resources": [], /* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources */
  "omnibox": {  /* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/omnibox */
    "keyword": "mdn"
  },
  "chrome_url_overrides": { /* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides */
    "newtab": "my-new-tab.html"
  },
  "chrome_settings_overrides": { /* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides */
    "homepage": "https://developer.mozilla.org/",
    "search_provider": {
      "name": "Discogs",
      "search_url": "https://www.discogs.com/search/?q={searchTerms}",
      "keyword": "disc",
      "favicon_url": "https://www.discogs.com/favicon.ico"
    }
  }
}
```

- [Why I cannot use two or more "browser_action", "page_action" or "app" together?](https://stackoverflow.com/questions/7888915/why-i-cannot-use-two-or-more-browser-action-page-action-or-app-together/7889893)
- [Manifest file format](https://developer.chrome.com/docs/extensions/mv3/manifest/#app)
- [chrome.pageAction](https://developer.chrome.com/docs/extensions/reference/pageAction/)
- [chrome.browserAction](https://developer.chrome.com/docs/extensions/reference/browserAction/)
- [API Reference](https://developer.chrome.com/docs/extensions/reference/)
- [Chrome extensions: Use the "background.service_worker" key instead manifest_version 3](https://stackoverflow.com/questions/66055882/chrome-extensions-use-the-background-service-worker-key-instead-manifest-vers)
- [Manifest V3 migration checklist](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/)
- [Migrating to Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration/)
- [Content Security Policy Reference](https://content-security-policy.com/)
- [How to migrate manifest version 2 to v3 for chrome extension?](https://stackoverflow.com/questions/63308160/how-to-migrate-manifest-version-2-to-v3-for-chrome-extension)
- [Manifest V3 migration checklist](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/)
- [Migrating to Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration/)
- [Bring your extension to life](https://extensionworkshop.com/documentation/develop/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=dev-hub-legacy-menu-link)
- [Building a cross-browser extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension)
- [How to communicate between Content Script, Popup, and Background in Browser Extension development](https://saisandeepvaddi.com/blog/how-to-communicate-between-content-script-popup-background-in-web-extensions)
- [web-ext command reference](https://extensionworkshop.com/documentation/develop/web-ext-command-reference/)
- [Extension Compatibility Test for Firefox](https://www.extensiontest.com/)
- [Getting started with web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/#automatic-discovery-of-configuration-files)
- [Setting option defaults in a configuration file](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/#setting-option-defaults-in-a-configuration-file)
- [web-ext lint](https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#web-ext-lint)
- [Developing your web extension with the best tools](https://medium.com/@Morikko/developing-your-web-extension-with-the-best-tools-213207c2b6b5)
- [kelseasy/web-ext-types](https://github.com/kelseasy/web-ext-types)
- [@types/chrome](https://www.npmjs.com/package/@types/chrome)
- [Getting started with web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/)
- [mozilla/web-ext](https://github.com/mozilla/web-ext)
- [hiikezoe/web-ext-webpack-plugin](https://github.com/hiikezoe/web-ext-webpack-plugin)
- [web-ext command reference](https://extensionworkshop.com/documentation/develop/web-ext-command-reference/)
- [WebExtension browser API Polyfill](https://github.com/mozilla/webextension-polyfill/#installation)
- [Manifest v3 update](https://blog.mozilla.org/addons/2021/05/27/manifest-v3-update/?utm_source=newsletter&utm_medium=email&utm_campaign=about-addons-2021-august)
- [WebExtensions Community Group Charter](https://github.com/w3c/webextensions/blob/main/charter.md)
- [permissions.onRemoved](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/permissions/onRemoved)
- [addons.mozilla.org API v3 Deprecation](https://blog.mozilla.org/addons/2021/02/01/addons-mozilla-org-api-v3-deprecation/?utm_source=newsletter&utm_medium=email&utm_campaign=about-addons-2021-july)
- [mockzilla-webextension](https://lusito.github.io/mockzilla-webextension/)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Boilerplating tools](https://extensionworkshop.com/documentation/develop/browser-extension-development-tools/#boilerplating-tools)
- [mdn/webextensions-examples](https://github.com/mdn/webextensions-examples)
- [The Basics of Making an Extension](https://dev.opera.com/extensions/basics/)
- [paddycarver/crx-build.sh](https://gist.github.com/paddycarver/820351)
- [ahwayakchih/crx3](https://github.com/ahwayakchih/crx3)
- [phwebi/crx-tools](https://github.com/phwebi/crx-tools)
- [oncletom/crx](https://github.com/oncletom/crx)
- [Crx Builder for webpack](https://github.com/johnagan/crx-webpack-plugin)
