module.exports = {
    entry: './src/index.js',
    output: {
        path: './bin',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.svg/,
                loader: 'svg-url-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }]
    }
};