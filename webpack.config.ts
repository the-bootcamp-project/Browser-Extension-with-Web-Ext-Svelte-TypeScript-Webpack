import path from 'path'
import Webpack from 'webpack'
import WebpackDev from 'webpack-dev-server'
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin'
import CspHtmlWebpackPlugin from 'csp-html-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
// import CompressionPlugin from 'compression-webpack-plugin'

// import marked from 'marked'
// const renderer = new marked.Renderer()
// import toml from 'toml'
// import yaml from 'yamljs'
// import json5 from 'json5'
import SveltePreprocess from 'svelte-preprocess'
import Autoprefixer from 'autoprefixer'

// const PACKAGE_INFO = require(path.resolve(__dirname,'package.json'))

const DIST_DIR  = path.resolve(__dirname,'dist')
const SRC_DIR   = path.resolve(__dirname,'src')
const EXT_DIR   = path.resolve(__dirname,'extensions')
const DEP_DIR   = path.resolve(__dirname,'node_modules')
const COMPO_DIR = path.resolve(SRC_DIR,'components')
const PAGES_DIR = path.resolve(SRC_DIR,'pages')
const UI_DIR    = path.resolve(SRC_DIR,'ui')
const TEMP_DIR  = path.resolve(SRC_DIR,'templates')

const mode = process.env['NODE_ENV'] ?? 'development'
const isProduction = mode === 'production'
const isDevelopment = !isProduction

const WEBEXT_TARGET = process.env['WEBEXT_TARGET'] ?? 'firefox-desktop'
// const WEBEXT_FIREFOX_DESKTOP_BASE   = ['firefox-desktop','firefox-beta']
// const WEBEXT_FIREFOX_ANDROID_BASE   = ['firefox-android']
// const WEBEXT_CHROMIUM_BASE          = ['chromium','edge','brave','brave-beta']

// const getWebExtTarget = function (Webext: string) {
//     if(Webext === 'firefox-desktop')        { return 'firefox-desktop' }
//     else if(Webext === 'firefox-android')   { return 'firefox-android' }
//     else if(Webext === 'firefox-beta')      { return 'firefox-beta' }
//     else if(Webext === 'chromium')          { return 'chromium' }
//     else if(Webext === 'edge')              { return 'edge' }
//     else if(Webext === 'brave')             { return 'brave' }
//     else if(Webext === 'brave-beta')        { return 'brave-beta' }
//     else if(Webext === 'opera')             { return 'opera' }
//     else if(Webext === 'safari')            { return 'safari' }
//     else                                    { return 'firefox-desktop' }
// }

const getWebExtDistPath = (Webext: string): string => {
    if(Webext === 'firefox-desktop')        { return path.resolve(DIST_DIR, 'firefox-desktop') }
    else if(Webext === 'firefox-android')   { return path.resolve(DIST_DIR, 'firefox-android') }
    else if(Webext === 'firefox-beta')      { return path.resolve(DIST_DIR, 'firefox-beta') }
    else if(Webext === 'chromium')          { return path.resolve(DIST_DIR, 'chromium') }
    else if(Webext === 'edge')              { return path.resolve(DIST_DIR, 'edge') }
    else if(Webext === 'brave')             { return path.resolve(DIST_DIR, 'brave') }
    else if(Webext === 'brave-beta')        { return path.resolve(DIST_DIR, 'brave-beta') }
    else if(Webext === 'opera')             { return path.resolve(DIST_DIR, 'opera') }
    else if(Webext === 'safari')            { return path.resolve(DIST_DIR, 'safari') }
    else                                    { return path.resolve(DIST_DIR, 'firefox-desktop') }
}

const getWebExtensionManifestFile = (Webext: string): string => {
    if(Webext === 'firefox-desktop')        { return path.resolve(EXT_DIR, 'manifest.firefox-desktop.json') }
    else if(Webext === 'firefox-android')   { return path.resolve(EXT_DIR, 'manifest.firefox-android.json') }
    else if(Webext === 'firefox-beta')      { return path.resolve(EXT_DIR, 'manifest.firefox-beta.json') }
    else if(Webext === 'chromium')          { return path.resolve(EXT_DIR, 'manifest.chromium.json') }
    else if(Webext === 'edge')              { return path.resolve(EXT_DIR, 'manifest.edge.json') }
    else if(Webext === 'brave')             { return path.resolve(EXT_DIR, 'manifest.brave.json') }
    else if(Webext === 'brave-beta')        { return path.resolve(EXT_DIR, 'manifest.brave-beta.json') }
    else if(Webext === 'opera')             { return path.resolve(EXT_DIR, 'manifest.opera.json') }
    else if(Webext === 'safari')            { return path.resolve(EXT_DIR, 'manifest.safari.json') }
    else                                    { return path.resolve(EXT_DIR, 'manifest.firefox-desktop.json') }
}

// const FILE_NAME = PACKAGE_INFO.name + '_' + getWebExtTarget(WEBEXT_TARGET) + '_' + PACKAGE_INFO.version + '.zip'
const OVERWRITE_DIST = true

const smp = new SpeedMeasurePlugin({ disable: !process.env['MEASURE'] });
const config: Configuration = smp.wrap({
	mode:       isDevelopment ? 'development' : 'production',
	target:     isDevelopment ? 'web' : 'browserslist',
    devtool:    isDevelopment ? 'eval-cheap-module-source-map' : undefined,

    context:    path.resolve(__dirname),

    entry: {
        main:           path.resolve(COMPO_DIR,'main','App.ts'),
        /* Extension Backgroud / Content Scripts */
        background:     path.resolve(SRC_DIR,'scripts','Backgroud.ts'),         // Extension Background Script
        contentScripts: path.resolve(SRC_DIR,'scripts','ContentScripts.ts'),    // Extension Content Script
        apiScripts:     path.resolve(SRC_DIR,'scripts','APIScripts.ts'),        // Extension User Script
        devtoolsPage:     path.resolve(SRC_DIR,'scripts','DevtoolsPage.ts'),        // Extension Devtools Script
        /* Extension UI Elements */
        options:        path.resolve(UI_DIR,'Options.ts'),      // Options Pages Script
        popup:          path.resolve(UI_DIR,'Popup.ts'),        // Browser Action "Popup" Script
        devtools:       path.resolve(UI_DIR,'Devtools.ts'),     // DevTools Page Script
        /* Extension App Pages */
        newTab:         path.resolve(PAGES_DIR,'NewTab.ts'),    // New Tab Page
    },
    output: { filename: '[name].js', path: path.resolve(getWebExtDistPath(WEBEXT_TARGET)), clean: OVERWRITE_DIST },

    resolve: {
        alias: { svelte: path.resolve(DEP_DIR,'svelte') },
        extensions: ['.mjs', '.js', '.ts', '.svelte'],
        mainFields: ['svelte', 'browser', 'module', 'main'],
        symlinks: false,
        cacheWithContext: false
    },

    module: {
        rules: [
            /* Loading TypeScript */    { test: /\.ts?$/, loader: 'ts-loader', options: { happyPackMode: true, transpileOnly: true }, include: [SRC_DIR], exclude: [DEP_DIR] },
            /* Loading Svelte */        { test: /\.svelte$/, use: { loader: 'svelte-loader', options: { emitCss: isProduction, preprocess: SveltePreprocess({ scss: true, sass: true, postcss: { plugins: [Autoprefixer] } }) } }, include: [SRC_DIR], exclude: [DEP_DIR] },
                                        // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
            /* Loading Svelte */        { test: /node_modules\/svelte\/.*\.mjs$/, resolve: { fullySpecified: false } },
            /* Loading Styles */        { test: /\.(c|s(a|c))ss$/, use: ['css-loader', { loader: 'postcss-loader', options: { postcssOptions: { plugins: [Autoprefixer] } } }, 'sass-loader'], include: [SRC_DIR], exclude: [DEP_DIR] },
            /* Loading Images */        { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource', include: [SRC_DIR], exclude: [DEP_DIR] },
            /* Loading Fonts */         { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource', include: [SRC_DIR], exclude: [DEP_DIR] }
            /* Loading HTML */          // { test: /\.html$/i, loader: "html-loader", include: [SRC_DIR], exclude: [DEP_DIR] },
            /* Loading Markdown */      // { test: /\.md$/, use: [{ loader: "html-loader" },{ loader: "markdown-loader", options: { pedantic: true, renderer }}], include: [SRC_DIR], exclude: [DEP_DIR] },
            /* Loading Toml */          // { test: /\.toml$/i, type: 'json', parser: { parse: toml.parse }, include: [SRC_DIR], exclude: [DEP_DIR] },
            /* Loading Yaml */          // { test: /\.yaml$/i, type: 'json', parser: { parse: yaml.parse }, include: [SRC_DIR], exclude: [DEP_DIR] },
            /* Loading Json */          // { test: /\.json5$/i, type: 'json', parser: { parse: json5.parse }, include: [SRC_DIR], exclude: [DEP_DIR] },
        ],
    },

    plugins: [
        /* Options Pages */  new HtmlWebpackPlugin({ title: 'options',       filename: 'options.html',       template: path.resolve(TEMP_DIR,'FullPage.html'),      chunks:['options'] }),
        /* "Popup" Action */ new HtmlWebpackPlugin({ title: 'popup',         filename: 'popup.html',         template: path.resolve(TEMP_DIR,'Popup.html'),         chunks:['popup'] }),
        /* Devtools Pages */ new HtmlWebpackPlugin({ title: 'devtools-page', filename: 'devtools-page.html', template: path.resolve(TEMP_DIR,'devtools-page.html'), chunks:['devtoolsPage'], inject: 'body' }),
        /* Devtools Panel */ new HtmlWebpackPlugin({ title: 'devtools',      filename: 'devtools.html',      template: path.resolve(TEMP_DIR,'FullPage.html'),      chunks:['devtools'] }),
        /* New Tab Pages */  new HtmlWebpackPlugin({ title: 'newTab',        filename: 'newtab.html',        template: path.resolve(TEMP_DIR,'FullPage.html'),      chunks:['newTab'] }),
        /* Generate Content Security Policy Meta Tags */
        new CspHtmlWebpackPlugin({ 'script-src': '', 'style-src': '' }),
        new CopyPlugin({ patterns: [
            /* Copy Browser Polyfill */
            { from: path.resolve(DEP_DIR,'webextension-polyfill','dist','browser-polyfill.min.js'), force: OVERWRITE_DIST },
            /* Copy _locales */
            { from: path.resolve(SRC_DIR,'_locales'), to: path.resolve(getWebExtDistPath(WEBEXT_TARGET), '_locales'), force: OVERWRITE_DIST },
            /* Copy WEBEXT_TARGET specific Browser Manifest file */
            { from: getWebExtensionManifestFile(WEBEXT_TARGET), to: path.resolve(getWebExtDistPath(WEBEXT_TARGET), 'manifest.json'), force: OVERWRITE_DIST }
        ] }),
        new ForkTsCheckerWebpackPlugin({ eslint: { files: './src/**/*.{ts,js}' } })
        // new CompressionPlugin()
    ],

    devServer: { hot: true, stats: 'errors-only', watchContentBase: true }
});

// This interface combines configuration from `webpack` and `webpack-dev-server`. You can add or override properties in this interface to change the config object type used above.
export interface Configuration extends Webpack.Configuration, WebpackDev.Configuration {}

export default config;
