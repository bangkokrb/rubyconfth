const webpack = require('webpack');
const config = require('./shared');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

/**
 * `BUILD_ENV` holds the environment name to be used for loading environment specific configs
 * */
const GLOBALS = {
  'process.env': {
    'NODE_ENV': JSON.stringify('development'),
    'BUILD_ENV': JSON.stringify(process.env.BUILD_ENV),
    'GOOGLE_MAP_API_KEY': JSON.stringify(process.env.GOOGLE_MAP_API_KEY)
  }
};

config['mode'] = 'development';

config['plugins'].push(new webpack.DefinePlugin(GLOBALS));

config['plugins'].push(new webpack.SourceMapDevToolPlugin({
  filename: '[name].js.map',
  exclude: ['spritemap']
}));

config['plugins'].push(new VueLoaderPlugin());

module.exports = config;
