const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const APP_DIR   = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'build');
const env = process.env.ENVIRONMENT;

const config = {
  entry: {
    bundle: `${APP_DIR}/index.jsx`,
  },
  output: {
    path: BUILD_DIR,
    filename: env !== 'local' ? '[name].[hash].js' : '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
          options: {
            includePaths: ['absolute/path/a', 'absolute/path/b'],
          },
        }],
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
          options: {
            includePaths: ['absolute/path/a', 'absolute/path/b'],
          },
        }],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        include: `${APP_DIR}/assets`,
        loader: 'url-loader?name=public/fonts/[name].[ext]?[hash]',
      },
      {
        test: /\.(svg|jpe?g|png)$/,
        include: `${APP_DIR}/assets`,
        loader: 'file-loader?name=public/assets/[name].[hash].[ext]',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      excludeChunks: [
        'poppins_regular',
        'logo_svg',
      ],
    }),
    new ManifestPlugin({
      fileName: '/public/hash-manifest.json'
    })
  ],
};

module.exports = config;
