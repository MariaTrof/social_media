import path from 'path';
import type webpack from 'webpack';
import { type BuildOptions } from './types/config';
import { buildPlugins } from './buildConfig';

import { buildResolves } from './buildResolves';
import { buildDevServer } from './buildDEvServer';
import { buildLoaders } from './buildLoaders';

export function BuildWebpackConfig(
    options: BuildOptions,
): webpack.Configuration {
    const { paths, mode, isDev } = options;
    return {
        mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolves(options),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
