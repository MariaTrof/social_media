import path from 'path';
import webpack from 'webpack';
import { BuildPath } from '../build/types/config';
import { BuildCssLoader } from '../build/loaders/BuildCssLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPath = {
        entry: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        build: '',
    };
    config.resolve!.modules!.push(paths.src);
    config.resolve!.extensions!.push('.ts', '.tsx');
    config.module!.rules!.push(BuildCssLoader(true));
    return config;
};
