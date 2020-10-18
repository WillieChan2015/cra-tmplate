const path = require('path');
const cracoAntDesignPlugin = require("craco-antd");
const sassSourcemapsPlugin = require('./webpack_plugin/craco-plugin-sass-sourcemaps');
const fastRefreshCracoPlugin = require('craco-fast-refresh');

module.exports = {
  webpack: {
    // 别名
    alias: {
      "@": path.resolve("src"),
      "~": path.resolve("src"),
      "~types": path.resolve("src/types"),
    },
  },

  devServer: {
    port: 7010,
  },

  // babel: {
  //   plugins: [
  //     ["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }],
  //   ],
  // },

  plugins: [
    { plugin: fastRefreshCracoPlugin },
    { plugin: cracoAntDesignPlugin },
    { plugin: sassSourcemapsPlugin }
  ],
};
