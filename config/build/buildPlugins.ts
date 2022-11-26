import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack';
import {BuildOptions} from './types/config';

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {


  return [new HtmlWebpackPlugin({template: options.paths.html}),
    new webpack.ProgressPlugin()]
}