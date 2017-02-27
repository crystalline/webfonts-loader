var path = require('path');
module.exports = {
  context: path.resolve(__dirname),
  entry: './entry.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
    publicPath: 'http://localhost:8080'
  },
  module: {
    loaders: [
      {
        test: /\.font\.(js|json)$/,
        //loader: 'style-loader!css-loader!' + require.resolve('../')
        loader: 'style-loader!css-loader!webfonts-loader'
      },
      {
        test: /\.(woff|eot|ttf|svg)$/,
        loader: 'url-loader'
      }
    ]
  }
};
