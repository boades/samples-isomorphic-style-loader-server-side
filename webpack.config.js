const webpack = require('webpack');

module.exports = {
  target: 'node',
  entry: [
    './src/server.js'
  ],
  output: {
    filename: './build/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'isomorphic-style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:3]'
            }
          }
        ]
      }
    ]
  }
};
