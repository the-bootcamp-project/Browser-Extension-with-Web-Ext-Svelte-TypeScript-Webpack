import { default as path } from 'path'
import Webpack from 'webpack'
import type WebpackDev from 'webpack-dev-server'
import CopyPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CspHtmlWebpackPlugin from 'csp-html-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

import sveltePreprocess from 'svelte-preprocess'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

const SRC_DIR       = path.resolve(__dirname,'src')
const BUNDLE_DIR    = path.resolve(__dirname,'bundle')
const DEP_DIR       = path.resolve(__dirname,'node_modules')
const TAILWIND_DIR  = path.resolve(DEP_DIR,'@bootcamp-project','tailwind-config')
const UI_DIR        = path.resolve(SRC_DIR,'ui')
const TEMPLATES_DIR = path.resolve(SRC_DIR,'templates')

const mode = process.env['NODE_ENV'] ?? 'development'
const isProduction = mode === 'production'

const webext: Configuration = {
    context:    path.resolve(__dirname),

    node:       false,
	mode:       isProduction ? 'production' : 'development',
    watch:      isProduction ? false: true,
	devtool:    isProduction ? 'source-map' : 'eval-source-map',
	target:     'browserslist',

    performance: {
        hints: isProduction ? false : undefined,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },

    resolve: {
        modules: [path.join(__dirname, 'node_modules')],
        alias: { svelte: path.resolve(DEP_DIR,'svelte') },
        extensions: ['.mjs','.ts','.js','.json','.svelte'],
        mainFields: ['svelte','browser','module','main'],
        fallback: {
            util: false,
            path: false,
            fs: false,
            // assert: require.resolve('assert'),
            // buffer: require.resolve('buffer'),
            // console: require.resolve('console-browserify'),
            // constants: require.resolve('constants-browserify'),
            // crypto: require.resolve('crypto-browserify'),
            // domain: require.resolve('domain-browser'),
            // events: require.resolve('events'),
            // http: require.resolve('stream-http'),
            // https: require.resolve('https-browserify'),
            // os: require.resolve('os-browserify/browser'),
            // path: require.resolve('path-browserify'),
            // punycode: require.resolve('punycode'),
            // process: require.resolve('process/browser'),
            // querystring: require.resolve('querystring-es3'),
            // stream: require.resolve('stream-browserify'),
            // string_decoder: require.resolve('string_decoder'),
            // sys: require.resolve('util'),
            // timers: require.resolve('timers-browserify'),
            // tty: require.resolve('tty-browserify'),
            // url: require.resolve('url'),
            // util: require.resolve('util'),
            // vm: require.resolve('vm-browserify'),
            // zlib: require.resolve('browserify-zlib'),
        },
    },

    entry: {
        /* Extension Backgroud / Content Scripts */
        background:     path.resolve(SRC_DIR,'scripts','Backgroud.ts'),         // Extension Background Script
        contentScripts: path.resolve(SRC_DIR,'scripts','ContentScripts.ts'),    // Extension Content Script
        devtoolsPage:   path.resolve(SRC_DIR,'scripts','DevtoolsPage.ts'),      // Extension Devtools Script
        /* Extension UI Elements */
        options:        path.resolve(UI_DIR,'Options.ts'),  // Options Pages Script
        popup:          path.resolve(UI_DIR,'Popup.ts'),    // Browser Action "Popup" Script
        devtools:       path.resolve(UI_DIR,'Devtools.ts'), // DevTools Page Script
        /* Extension App Pages */
    },

    output: { filename: '[name].js', path: BUNDLE_DIR, clean: true },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
            {
                test: /\.svelte$/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        compilerOptions: { dev: !isProduction },
                        emitCss: isProduction,
                        hotReload: !isProduction,
                        preprocess: sveltePreprocess({
                            sourceMap: !isProduction,
                            postcss: { plugins: [tailwind,autoprefixer] },
                        }),
                    }
                },
            },
            { test: /node_modules\/svelte\/.*\.mjs$/, resolve: { fullySpecified: false } },
            {
                test: /\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    { loader: "postcss-loader", options: { postcssOptions: { config: path.resolve(TAILWIND_DIR,'postcss.config.js') } } }
                ]
            }
        ]
    },

    plugins: [
        /* Application Pages */
        new HtmlWebpackPlugin({ title: 'devtools',  filename: 'devtools-page.html', template: path.resolve(TEMPLATES_DIR,'devtools-page.html'), chunks:['devtools'] }),
        new HtmlWebpackPlugin({ title: 'options',   filename: 'options.html',       template: path.resolve(TEMPLATES_DIR,'default.html'),       chunks:['options'] }),
        new HtmlWebpackPlugin({ title: 'popup',     filename: 'popup.html',         template: path.resolve(TEMPLATES_DIR,'default.html'),       chunks:['popup'] }),
        /* Generate Content Security Policy Meta Tags */
        new CspHtmlWebpackPlugin({ 'script-src': '', 'style-src': '' }),
        new MiniCssExtractPlugin({ filename: 'style.css', chunkFilename: 'style.css' }),
        new CopyPlugin({ patterns: [
            /* Copy Browser Polyfill */
            { from: path.resolve(DEP_DIR,'webextension-polyfill','dist','browser-polyfill.min.js'), force: true },
            /* Copy _locales */
            { from: path.resolve('_locales'), to: path.resolve(BUNDLE_DIR,'_locales'), force: true }
        ] }),
        new ForkTsCheckerWebpackPlugin({ eslint: { files: './src/**/*.{ts,js}' } }),
        // fix "process is not defined" error: (do "npm install process" before running the build)
        new Webpack.ProvidePlugin({
            browser: "webextension-polyfill",
            process: 'process/browser'
        })
    ],
    devServer: {
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 3000
    }
};

// This interface combines configuration from `webpack` and `webpack-dev-server`. You can add or override properties in this interface to change the config object type used above.
export interface Configuration extends Webpack.Configuration, WebpackDev.Configuration {}
export default webext;