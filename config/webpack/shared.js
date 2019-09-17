const path = require('path');
const { sync } = require('glob');
const WebpackShellPlugin = require('webpack-shell-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, '../../', dir)
}

const shared = {
  context: resolve('/'),

  entry: {
    application: resolve('_js/application.js')
  },

  output: {
    filename: '[name].js',
    path: resolve('assets/javascript/')
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.json'],

    alias: {
      'Vendor': resolve('vendor/javascript/')
    }
  },

  plugins: [
    new SVGSpritemapPlugin(resolve('assets/images/shared/icons/*.svg'), {
      output: {
        filename: 'icon-sprite.svg'
      },
      sprite: {
        prefix: false
      }
    }),

    new WebpackShellPlugin({
      onBuildEnd: [
        // Sprite images to use inline/linked files
        'mv assets/javascript/icon-sprite.svg assets/images/icon-sprite.svg',
        // Required for Jekyll includes
        'cp assets/images/icon-sprite.svg _includes/icon-sprite.svg'
      ]
    })
  ],
};

module.exports = shared;
