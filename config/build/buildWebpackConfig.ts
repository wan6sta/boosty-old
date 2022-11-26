import {BuildOptions} from './types/config';
import {Configuration} from 'webpack';
import {buildPlugins} from './buildPlugins';
import {buildLoaders} from './buildLoaders';
import {buildResolvers} from './buildResolvers';

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  return {
    mode: options.mode,
    entry: options.paths.entry,
    output: {
      filename: 'bundle.[contenthash].js',
      path: options.paths.build,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders()
    },
    resolve: buildResolvers()
  }
}