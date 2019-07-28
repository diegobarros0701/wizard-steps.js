const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDevelopment = true;

module.exports = (env, argv) => {
  // let entryName = env.mode === 'production' ? 'wizard-steps.min' : 'wizard-steps';

  let entryName = 'wizard-steps';

  return {
    entry: {
      [entryName]: './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js'
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
      })
    ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          loader: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.scss']
    }
  }
};