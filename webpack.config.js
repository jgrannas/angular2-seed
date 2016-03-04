var path = require('path');
// Webpack Plugins
var ProvidePlugin = require('webpack/lib/ProvidePlugin');
var DefinePlugin = require('webpack/lib/DefinePlugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//var ENV = process.env.ENV = process.env.NODE_ENV = 'development';
//const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    'app': './src/app.ts',
    'vendor': './src/vendor.ts'
  },
  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  plugins: [
    new CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js', minChunks: Infinity }),
    // static assets
    new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }]),
    // generating html
    new HtmlWebpackPlugin({ template: 'src/index.html', inject: false }),
    new ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      "Tether": 'tether',
      "window.Tether": "tether"
    })
  ],

  resolve: {
    extensions: ['', '.ts', '.js','.json', '.css', '.scss', '.html']
  },

  module: {
    preLoaders: [{ test: /\.ts$/, loader: 'tslint-loader', exclude: [/node_modules/] }],
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
      // Support for *.json files.
      { test: /\.json$/, loader: 'json-loader' },

      // Support for CSS as raw text
      { test: /\.css$/, loader: 'raw-loader' },

      // support for .html as raw text
      { test: /\.html$/, loader: 'raw-loader' },

      { test: /\.scss$/, loader: 'raw-loader!sass-loader' },
      { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' },
      // Bootstrap 4
      { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' }
    ],
    noParse: [ path.join(__dirname, 'node_modules', 'angular2', 'bundles') ]
  },
  //postcss: [autoprefixer],
  devServer: {
    historyApiFallback: true
  },
  // we need this due to problems with es6-shim
  node: { global: 'window', progress: false, crypto: 'empty', module: false, clearImmediate: false, setImmediate: false }
};

