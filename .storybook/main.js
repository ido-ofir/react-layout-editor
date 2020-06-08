
let path = require('path');

module.exports = {
    stories: ['../stories/**/*.stories.[tj]s'],
    addons: [
		'@storybook/addon-actions/register',
		'@storybook/addon-knobs/register'
    ],
    webpackFinal: async (config, { configType }) => {

      config.resolve.alias.ui = path.resolve(__dirname, '../ui');

        // config.module.rules.push({
        //     test: /(\.js|\.jsx)$/,
        //     exclude: /node_modules$/,
        //     use: {
        //         loader: "babel-loader"
        //     }
        // });
		config.module.rules.push({
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
			include: path.resolve(__dirname, '../'),
		});
        // config.resolve = config.resolve || {
        //     modules: ['node_modules']
        // }
        // config.resolve.modules.push('node_modules_local');
    
        // Return the altered config
		return config;
	},
};