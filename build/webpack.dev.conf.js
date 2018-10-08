const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const merge = require('webpack-merge')

const devConfig = require('./config').dev

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devServer: {
        host: devConfig.host,
        port: devConfig.port,
        contentBase: path.join(__dirname, '../src'),
        // publicPath: '/',
        open: devConfig.autoOpenBrowser,
        proxy: {
            ...devConfig.proxyTable
        }
    }
})

module.exports = devWebpackConfig