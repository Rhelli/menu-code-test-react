const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  title: 'Production',
  template: './public/index.html',
  filename: './index.html'
});

const cleanWebpackPlugin = new CleanWebpackPlugin();

module.exports = {
  entry: {
    app: './src/App.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        ]
      },
      {
        test: /\.(s[ac]ss$|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  output: {
    path: path.join(__dirname, '/public/webpack'),
    filename: 'bundle.js',
    publicPath: ''
  },
  plugins: [htmlPlugin, cleanWebpackPlugin]
};
