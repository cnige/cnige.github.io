/**
 * Created by ige16 on 2017.4.9 0009.
 */
//内置path
var path = require('path');

module.exports = {
    entry: {
        index: './index.js'
    },
    output: {
        path: __dirname,
        filename: './build/[name].js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'react-hot-loader!babel-loader'
                //include: path.resolve(__dirname, '.')
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.css', '.jsx']
    }
};

//exclude 排除
//include 包含