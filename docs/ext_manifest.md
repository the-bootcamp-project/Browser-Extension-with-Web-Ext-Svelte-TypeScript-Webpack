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

### Chromium

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
    "dns",
    "debugger",
    "pageCapture",
    "background"
  ]
}
```

### Edge

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
    "dns",
    "debugger",
    "pageCapture",
    "background"
  ]
}
```

### Firefox Desktop

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

### Opera

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

### Safari

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
