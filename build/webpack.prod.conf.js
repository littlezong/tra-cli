const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const merge = require('webpack-merge')

const prodWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    output: {
        path: path.join(__dirname, '../dist'),
        filename: path.posix.join('js/[name].js')
    },
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             commons: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name: 'vendors',
    //                 chunks: 'all'
    //             }
    //         }
    //     }
    // }
})

module.exports = prodWebpackConfig