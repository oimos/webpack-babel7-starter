const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const LicenseWebpackPlugin = require('license-webpack-plugin').LicenseWebpackPlugin;


module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist/js',
        filename: 'bundle.js',
        publicPath: '/dist/'
    },

    mode: 'development',

    devtool: 'source-map',

    module: {
        rules: [
            {
              test: /\.css$/,
              use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true,
                      localIdentName: '[name]-[local]-[hash:base64:5]',
                      url: false,
                      sourceMap: true,
                      importLoaders: 1
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      ident: 'postcss',
                      sourceMap: true,
                      plugins: [
                        require('autoprefixer')({grid: true})
                      ]
                    },
                  }
                 ]
              })
            },
            {
              test: /\.(js|jsx)$/,
              use: 'babel-loader',
              exclude: /node_modules/
            }
          ]
    },

    resolve: {
      extensions: ['.js', '.json', '.jsx']
    },

    plugins: [
        new ExtractTextPlugin({ filename: '../css/base.css' }),
        new UglifyJsPlugin(),
    ]
}