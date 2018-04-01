const webpack = require('webpack');

module.exports = {
    entry: [
      'react-hot-loader/patch',
      './src/index.js'
    ],
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
      rules: [{
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader', 
          ]
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      historyApiFallback: true,
      contentBase: './dist',
      hot: true
    }
};