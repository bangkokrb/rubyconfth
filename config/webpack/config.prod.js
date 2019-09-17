const webpack = require('webpack');
const config = require('./shared');

/**
 * `BUILD_ENV` holds the environment name to be used for loading environment specific configs
 * */
const GLOBALS = {
  'process.env': {
    'NODE_ENV': JSON.stringify('production'),
    'BUILD_ENV': JSON.stringify(process.env.BUILD_ENV),
    'GOOGLE_MAP_API_KEY': JSON.stringify(process.env.GOOGLE_MAP_API_KEY),
  }
};

config['mode'] = 'production';

config['optimization'] = Object.assign({ minimize: true }, config['optimization']);

config['plugins'].push(new webpack.DefinePlugin(GLOBALS));


module.exports = config;
