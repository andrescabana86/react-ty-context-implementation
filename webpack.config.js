const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')

const OUTPUT_PATH = path.resolve(__dirname, 'build')
const OUTPUT_FILENAME = '[name].js'

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx'),
  },
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, loader: 'ts-loader', exclude: '/node_modules/' },
      {
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: '/node_modules/',
      },
    ],
  },
  output: {
    filename: OUTPUT_FILENAME,
    path: OUTPUT_PATH,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 8080,
  },
}
