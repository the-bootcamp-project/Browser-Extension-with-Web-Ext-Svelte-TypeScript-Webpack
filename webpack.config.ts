import path from 'path';
import Webpack from 'webpack';
import WebpackDev from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CspHtmlWebpackPlugin from 'csp-html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

import marked from 'marked';
const renderer = new marked.Renderer();
import toml from 'toml';
import yaml from 'yamljs';
import json5 from 'json5';
import SveltePreprocess from 'svelte-preprocess';
import Autoprefixer from 'autoprefixer';

const mode = process.env['NODE_ENV'] ?? 'development';
const isProduction = mode === 'production';
const isDevelopment = !isProduction;

const config: Configuration = {
	target: isDevelopment ? 'web' : 'browserslist',

	mode:       isProduction    ? 'production' : 'development',
    devtool:    isDevelopment   ? 'eval-cheap-module-source-map' : undefined,
    context: __dirname, // to automatically find tsconfig.json

    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: { filename: 'main.js', path: path.resolve(__dirname, 'dist'), clean: true },

    resolve: {
        alias: {
            svelte: path.resolve('node_modules', 'svelte')
        },
        extensions: ['.mjs', '.js', '.ts', '.svelte'],
        mainFields: ['svelte', 'browser', 'module', 'main']
    },

    module: {
        rules: [
            /* Images */        { test: /\.(png|svg|jpg|jpeg|gif)$/i, include: path.resolve(__dirname, 'src'), exclude: /node_modules/, type: 'asset/resource' },
            /* Fonts */         { test: /\.(woff|woff2|eot|ttf|otf)$/i, include: path.resolve(__dirname, 'src'), exclude: /node_modules/, type: 'asset/resource' },
            /* HTML */          { test: /\.html$/i, include: path.resolve(__dirname, 'src'), exclude: /node_modules/, loader: "html-loader" },
            /* Markdown */      { test: /\.md$/, include: path.resolve(__dirname, 'src'), exclude: /node_modules/, use: [{ loader: "html-loader" },{ loader: "markdown-loader", options: { pedantic: true, renderer }}]},
            /* Toml */          { test: /\.toml$/i, include: path.resolve(__dirname, 'src'), exclude: /node_modules/, type: 'json', parser: { parse: toml.parse } },
            /* Yaml */          { test: /\.yaml$/i, include: path.resolve(__dirname, 'src'), exclude: /node_modules/, type: 'json', parser: { parse: yaml.parse } },
            /* Json */          { test: /\.json5$/i, include: path.resolve(__dirname, 'src'), exclude: /node_modules/, type: 'json', parser: { parse: json5.parse } },
            /* TypeScript */    { test: /\.ts?$/, include: path.resolve(__dirname, 'src'), exclude: /node_modules/, loader: "ts-loader", options: { happyPackMode: true, transpileOnly: true } }, // transpileOnly - disable type checker - we will use it in fork plugin
            /* Svelte */        { test: /\.svelte$/, include: path.resolve(__dirname, 'src'), exclude: /node_modules/,use: { loader: 'svelte-loader', options: { emitCss: isProduction, preprocess: SveltePreprocess({ scss: true, sass: true, postcss: { plugins: [Autoprefixer] } }) } } },
            /* Styles */        { test: /\.(css|scss|sass)$/, include: path.resolve(__dirname, 'src'), exclude: /node_modules/, use: ['css-loader', { loader: 'postcss-loader', options: { postcssOptions: { plugins: [Autoprefixer] } } }, 'sass-loader'] },
            /* Svelte */        { test: /node_modules\/svelte\/.*\.mjs$/, resolve: { fullySpecified: false } } // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
        ],
    },

    plugins: [
        new HtmlWebpackPlugin(),
        new CspHtmlWebpackPlugin({ 'script-src': '', 'style-src': '' }),
        new ForkTsCheckerWebpackPlugin({ eslint: { files: './src/**/*.{ts,js}' } })
    ],

    devServer: {
        hot: true,
        stats: 'errors-only',
        contentBase: 'public',
        watchContentBase: true
    },
};

/**
 * This interface combines configuration from `webpack` and `webpack-dev-server`. You can add or override properties
 * in this interface to change the config object type used above.
 */
export interface Configuration extends Webpack.Configuration, WebpackDev.Configuration {}

export default config;
