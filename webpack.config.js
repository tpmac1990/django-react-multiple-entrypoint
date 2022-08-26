var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  context: __dirname,

  entry: {
    principal: path.resolve(__dirname, 'mysite//polls/static/js/index'),
    other: path.resolve(__dirname, 'mysite//polls/static/js/other')
  },

  output: {
      path: path.resolve(__dirname, 'mysite//polls/static/bundles/'),
      publicPath: 'http://localhost:3000/static/', 
      chunkFilename: '[name].bundle.js',
      filename: "[name]-[contenthash].js",
  },

  // web-dev-server: stores bundles in memory for faster response
  devServer: {
    port: 3000,
    hot: true,
    headers: {'Access-Control-Allow-Origin': '*'},
  },

  plugins: [
    // clear bundles folder before creating new files
    new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns: ['**/*','!favicon.png']}),
    new BundleTracker({filename: 'mysite/webpack-stats.json'}),
    // forces webpack-dev-server program to write bundle files to the file system
    new WriteFilePlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

};
