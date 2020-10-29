import path from 'path';
import fs from 'fs';
import webpack from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach(mod => {
    nodeModules[mod] = 'commonjs ' + mod;
  });

const config: webpack.Configuration = {
  target: 'node',
  mode: 'production',
  entry: {
    app: path.resolve(__dirname, '../app/app.ts'),
  },
  output: {
    path: path.resolve(__dirname, '../app-js'),
    filename: '[name].js',
  },

  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../app'),
      'app': path.resolve(__dirname, '../app'),
      'util': path.resolve(__dirname, '../app/util'),
      'conf': path.resolve(__dirname, '../conf'),
    },
  },

  externals: nodeModules,
  context: __dirname,
  node: {
    __dirname: false,
    __filename: false,
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              configFile: path.resolve(__dirname, '../server-tsconfig.json')
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.ProgressPlugin({}),
    new CleanWebpackPlugin(),
  ]
}


webpack(config).run((state: any) => {
  console.log(state);
});