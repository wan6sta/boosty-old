import {buildWebpackConfig} from './config/build/buildWebpackConfig';
import {BuildMode, BuildPaths} from './config/build/types/config';
import path from 'path'

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html')
}

const mode: BuildMode = 'development'

const isDev = mode === 'development'

const config = buildWebpackConfig({
  mode: 'development',
  paths,
  isDev
})

export default config