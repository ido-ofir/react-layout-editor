const path = require('path');
const entry = path.resolve(__dirname, 'source/index.js');

const publicPath = '/build/';
const distPath = path.join(__dirname, 'dist');

module.exports = function (env) {
    let config = {
        entry: entry,
        devtool: "source-map",
        output: {
            path: distPath,
            filename: "[name].bundle.js?v=[chunkhash:4]",
        },
        optimization: {
            splitChunks: {
                chunks: "async",
                minSize: 5000,
                minChunks: 1,
                maxAsyncRequests: 5,
                maxInitialRequests: 3,
                name: true,
                cacheGroups: {
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    },
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10
                    }
                }
            }
        },

        module: {
            rules: [
                {
                    test: /(\.js|\.jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                // {
                //     test: /\.worker\.js$/,
                //     use: { loader: 'worker-loader' }
                // },
                // {
                //     test: /\.html$/,
                //     use: [
                //         {
                //             loader: "html-loader",
                //             options: {minimize: true}
                //         }
                //     ]
                // },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                }
                // {
                //     test: /\.scss$/,
                //     use: ['style-loader', 'css-loader', 'sass-loader']
                // },
                // {
                //     test: /.png$/,
                //     use: {
                //         loader: "url-loader?mimetype=image/png"
                //     }
                // },
                // {
                //     test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                //     use: {
                //         loader: "url-loader?limit=10000&minetype=application/font-woff"
                //     }
                // },
                // {
                //     test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                //     use: ["file-loader"]
                // }
            ]
        },
        resolve: {
            modules: ["node_modules_local", "node_modules"]
        },

        watchOptions: {
            ignored: /node_modules/
        },

        plugins: [
            // new HtmlWebPackPlugin({
            //     title: "Stemplate",
            //     rootUri: "/",
            //     version: vars.version,
            //     minify: true,
            //     cache: true,
            //     showErrors: true,
            //     filename: path.resolve(__dirname, './index.html'),
            //     inject: false,
            //     template: path.resolve(__dirname, './index.ejs'), // Load a custom template (ejs by default see the FAQ for details)
            // }),
        ]
    };
    return config;
};
