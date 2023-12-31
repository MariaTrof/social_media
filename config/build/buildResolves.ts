import { type ResolveOptions } from 'webpack';
import { type BuildOptions } from './types/config';

export function buildResolves(options: BuildOptions): ResolveOptions {
    return {

        extensions: ['.js', '.ts', '.tsx'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},

    };
}
