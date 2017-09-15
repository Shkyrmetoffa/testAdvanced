module.exports = {
    entry: './controller',
    output: {
        filename: './dist/bundle.js'
    },
    devtool: 'cheap-source-map',
    devServer: {
        port: 3000
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        }]
    }
}