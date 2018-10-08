const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {
    getFilesName,
    generateLoaders
} = require('./utils')

const resolveSrc = dir => path.join(__dirname, '../src/static', dir)

// js入口
const entries = (() => {
    const filesName = getFilesName('src/static/js')
    let temp = {}
    filesName.forEach(file => {
        let key = file.split('.')[0]
        temp[key] = resolveSrc(`js/${file}`)
    })
    return temp
})()
// html模板
const htmlTemplates = (() => {
    const filesName = getFilesName('src')
    return filesName
})()

module.exports = {
    entry: entries,
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        }, {
            test: /\.css$/,
            use: ['css-loader']
        }, {
            test: /\.less$/,
            use: generateLoaders('less')
        }, {
            test: /\.sass$/,
            use: generateLoaders('sass', {
                indentedSyntax: true
            })
        }, {
            test: /\.scss$/,
            use: generateLoaders('sass')
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                publicPath: '../',
                name: path.posix.join('img', '[name].[hash:7].[ext]')
            }
        }]
    },
    plugins: [
        ...htmlTemplates.map(tpl => new HtmlWebpackPlugin({
            filename: tpl,
            template: `src/${tpl}`,
            chunksSortMode: 'manual',
            inject: false
        })),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ],
    watchOptions: {
        ignored: /node_modules/
    },
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
}