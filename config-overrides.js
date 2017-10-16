const path = require('path');
const _  = require('lodash');
const rewireEslint = require('react-app-rewire-eslint');

const alias = {
    assets: path.resolve(__dirname, './src/assets'),
    views: path.resolve(__dirname, './src/views'),
    components: path.resolve(__dirname, './src/components'),
    utils: path.resolve(__dirname, './src/utils'),
}

module.exports = function override(config, env) {
    
    // eslint config
    rewireEslint(config, env);

    // webpack alias
    config.resolve.alias = _.assign(config.resolve.alias, alias)

    return config;
}