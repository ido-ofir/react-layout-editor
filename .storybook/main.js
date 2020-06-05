
let path = require('path');
module.exports = {
    stories: ['../stories/**/*.stories.[tj]s'],
    webpackFinal: async (config, { configType }) => {
        
        // config.module.rules.push({
        //     test: /(\.js|\.jsx)$/,
        //     exclude: /node_modules$/,
        //     use: {
        //         loader: "babel-loader"
        //     }
        // });

        // config.resolve = config.resolve || {
        //     modules: ['node_modules']
        // }
        // config.resolve.modules.push('node_modules_local');
    
        // Return the altered config
        return config;
      },
};