var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,

  entry: {
    principal: './mysite/polls/static/js/index',
    other: './mysite/polls/static/js/other'
  },

  output: {
      path: path.resolve('./mysite/polls/static/bundles/'),
      publicPath: '/static/', 
      chunkFilename: '[name].bundle.js',
      filename: "[name]-[contenthash].js",
  },

  devServer: {
    port: 3000,
    hot: true,
    headers: {'Access-Control-Allow-Origin': '*'}
  },

  plugins: [
    new BundleTracker({filename: './mysite/webpack-stats.json'}),
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
  }

};




// const path = require("path");
// const common = require("./webpack.common");
// const { merge } = require('webpack-merge');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

// module.exports = merge(common, {
//     mode: "development",
//     entry: {
//         main: "./src/index.js",
//         vendor: "./src/vendor.js",
//     },
//     output: {
//         filename: "[name].[hash].js",
//         path: path.resolve(__dirname, "./gp/static"),
//         // publicPath: 'http://localhost:8000/static/',
//         publicPath: '/static/',
//     },
//     devServer: {
//         port: 3000,
//         hot: true,
//         headers: {'Access-Control-Allow-Origin': '*'}
//     },
//     plugins: [
//         new CopyWebpackPlugin({
//             patterns: [
//                 { from: path.resolve(__dirname,'./src/template_dev.html'), to: path.resolve(__dirname,'./gp/static/index.html') }
//             ]
//         })
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.scss$/,
//                 use: [
//                     'style-loader',
//                     'css-loader',
//                     'sass-loader'
//                 ]
//             },
//         ]
//     }
// });


// const BundleTracker  = require('webpack-bundle-tracker');
// const WriteFilePlugin = require('write-file-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// module.exports = {
//     plugins: [
//             new CleanWebpackPlugin({
//                     cleanOnceBeforeBuildPatterns: ['**/*','!favicon.png']
//                 }),
//             new BundleTracker({filename: './webpack-stats.json'}),
//             new WriteFilePlugin()
//         ],
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: [
//                     {
//                         loader: 'babel-loader',
//                     }
//                 ]
//             },
//             {
//                 test: /\.(svg|jpg|jpeg|png|gif)$/,
//                 use: {
//                     loader: 'url-loader'
//                 }
//             }
//         ]
//     }
// }