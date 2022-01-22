import _ from 'lodash'
import { default as path } from 'path'
import type webpack from 'webpack'
import type webpackdev from 'webpack-dev-server'
import { merge } from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CspHtmlWebpackPlugin from 'csp-html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import sveltePreprocess from 'svelte-preprocess'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

import { WebpackConfig, WebpackDevelopmentConfig } from '@bootcamp-project/webpack-config'

// const MODULES_DIR = path.resolve(__dirname, 'node_modules')
const ROOT_DIR = path.resolve(__dirname)
const SRC_DIR = path.resolve(ROOT_DIR, 'src')
const UI_DIR = path.resolve(SRC_DIR, 'ui')
const STATIC_DIR = path.resolve(SRC_DIR, 'static')
const SCRIPTS_DIR = path.resolve(SRC_DIR, 'scripts')
const DEST_DIR = path.resolve(ROOT_DIR, 'build')
// const POSTCSS_CONFIG = path.resolve(ROOT_DIR, 'postcss.config.js')
const TEMPLATES_DIR = path.resolve(SRC_DIR, 'templates')
const POLYFILL_DIR = path.resolve(ROOT_DIR, 'node_modules', 'webextension-polyfill', 'dist', 'browser-polyfill.min.js')

const mode = process.env['NODE_ENV'] ?? 'development'
const isProduction = mode === 'production'

const DEV_CSP = { 'base-uri': "'self'", 'script-src': ["'unsafe-inline'", "'self'", "'unsafe-eval'"], 'style-src': ["'unsafe-inline'", "'self'", "'unsafe-eval'"], }
const PROD_CSP = { 'base-uri': "'self'", 'script-src': ["'unsafe-inline'", "'self'", "'unsafe-eval'"], 'style-src': ["'unsafe-inline'", "'self'", "'unsafe-eval'"], }
const CSP = isProduction ? PROD_CSP : DEV_CSP

const Config: webpack.Configuration | webpackdev.Configuration = {
    context: path.resolve(ROOT_DIR),
    devtool: 'inline-source-map',
    entry: {
        /* App Pages */
        index: path.resolve(SRC_DIR, 'app.ts'),
        /* WebExt UI Components */
        devtools: path.resolve(UI_DIR, 'Devtools.ts'),
        options: path.resolve(UI_DIR, 'Options.ts'),
        popup: path.resolve(UI_DIR, 'Popup.ts'),
        newtab: path.resolve(UI_DIR, 'NewTab.ts'),
        /* WebExt Runtime Scripts */
        background: path.resolve(SCRIPTS_DIR, 'Backgroud.ts'),
        contentScripts: path.resolve(SCRIPTS_DIR, 'ContentScripts.ts'),
        devtoolsPage: path.resolve(SCRIPTS_DIR, 'DevtoolsPage.ts')
    },

    resolve: {
        extensions: ['.ts']
    },

    output: { filename: '[name].js', path: DEST_DIR, clean: true },

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
                            postcss: { plugins: [tailwind, autoprefixer] },
                        }),
                    }
                },
            },
            { test: /node_modules\/svelte\/.*\.mjs$/, resolve: { fullySpecified: false } },
            { test: /\.css$/, use: ["style-loader", "css-loader", "postcss-loader"] }
        ]
    },

    plugins: [
        /* Application Pages */
        new HtmlWebpackPlugin({ title: 'index', filename: 'index.html', template: path.resolve(TEMPLATES_DIR, 'default.html'), chunks: ['index'] }),
        new HtmlWebpackPlugin({ title: 'devtools', filename: 'devtools-page.html', template: path.resolve(TEMPLATES_DIR, 'default.html'), chunks: ['devtoolsPage'] }),
        new HtmlWebpackPlugin({ title: 'devtools', filename: 'devtools.html', template: path.resolve(TEMPLATES_DIR, 'default.html'), chunks: ['devtools'] }),
        new HtmlWebpackPlugin({ title: 'options', filename: 'options.html', template: path.resolve(TEMPLATES_DIR, 'default.html'), chunks: ['options'] }),
        new HtmlWebpackPlugin({ title: 'popup', filename: 'popup.html', template: path.resolve(TEMPLATES_DIR, 'default.html'), chunks: ['popup'] }),
        new HtmlWebpackPlugin({ title: 'newtab', filename: 'newtab.html', template: path.resolve(TEMPLATES_DIR, 'default.html'), chunks: ['newtab'] }),
        new CopyPlugin({ patterns: [{ from: STATIC_DIR, to: DEST_DIR }] }),
        new CopyPlugin({ patterns: [{ from: POLYFILL_DIR, to: DEST_DIR }] }),
        /* Generate Content Security Policy Meta Tags */
        new CspHtmlWebpackPlugin(CSP),
        new ForkTsCheckerWebpackPlugin({ eslint: { files: './src/**/*.{ts,js}' } }),
    ],
}

const Output = (isProduction) ? merge(WebpackConfig, Config) : merge(WebpackDevelopmentConfig, Config)

export default Output
