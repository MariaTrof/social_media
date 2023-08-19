import type webpack from 'webpack';
import { type BuildOptions } from './types/config';
import { BuildCssLoader } from './loaders/BuildCssLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
            loader: 'file-loader',
        },
    };
    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    const cssLoader = BuildCssLoader(isDev);
    return [babelLoader, typescriptLoader, cssLoader, fileLoader, svgLoader];
}
