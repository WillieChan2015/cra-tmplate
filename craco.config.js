const path = require('path');
const cracoAntDesignPlugin = require('craco-antd');
const sassSourcemapsPlugin = require('./webpack_plugin/craco-plugin-sass-sourcemaps');
const fastRefreshCracoPlugin = require('craco-fast-refresh');

module.exports = {
  webpack: {
    // 别名
    alias: {
      '@': path.resolve('src'),
      '~': path.resolve('src'),
      '~types': path.resolve('src/types'),
    },
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.output.path = path.resolve(__dirname, 'dist') // ts编译后的文件
      paths.appBuild = path.resolve(__dirname, 'dist'); // public中的文件
      return webpackConfig;
    }
  },

  devServer: {
    port: 7010,
  },

  // babel: {
  //   plugins: [
  //     ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
  //   ],
  // },

  plugins: [
    { plugin: fastRefreshCracoPlugin },
    { plugin: cracoAntDesignPlugin },
    { plugin: sassSourcemapsPlugin }
  ],
};
