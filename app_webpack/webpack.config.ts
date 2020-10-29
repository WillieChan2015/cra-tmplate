import path from 'path';
import webpack from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

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
    new webpack.NoEmitOnErrorsPlugin(),
  ]
}


webpack(config).run((state: any) => {
  console.log(state);
});