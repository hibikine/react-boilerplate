const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    /* ファイルローダーなどの設定 */
    rules: [
      {
        enforce: 'pre',
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        /* JavaScript */
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      /* TypeScript */
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};
