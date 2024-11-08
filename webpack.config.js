import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode: 'production',
  cache: false,
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.html/,
        type: 'asset/source',
        loader: './loaders/html.js',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
