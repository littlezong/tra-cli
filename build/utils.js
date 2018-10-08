const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const getFilesName = dir => {
    let temp = []
    const files = fs.readdirSync(dir)
    files.forEach(file => {
        let stat = fs.lstatSync(`${dir}/${file}`)
        if (!stat.isDirectory()) {
            temp.push(file)
        }
    })
    return temp
}

const generateLoaders = (loader, loaderOptions) => {
    const cssLoader = {
        loader: 'css-loader',
        options: {
            sourceMap: false
        }
    }

    const postcssLoader = {
        loader: 'postcss-loader',
        options: {
            sourceMap: false
        }
    }

    const loaders = [MiniCssExtractPlugin.loader, cssLoader, postcssLoader]

    if (loader) {
        loaders.push({
            loader: loader + '-loader',
            options: Object.assign({}, loaderOptions, {
                sourceMap: false
            })
        })
    }

    return loaders
}

// getFilesName('src/js')

module.exports = {
    getFilesName,
    generateLoaders
}