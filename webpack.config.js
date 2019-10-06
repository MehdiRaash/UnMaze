const path = require("path");
const webpack = require("webpack");  
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry:   "./src/entry.web.js" ,
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader" ,
        options: { presets: ["@babel/env", "@babel/react"] }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require("postcss-import"),
                require('tailwindcss'),
                require('autoprefixer'),
                // require('@fullhuman/postcss-purgecss')({
                //   content:[
                //     './src/**/*.jss'
                //   ],
                //   defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
                // })
              ],
            },
          },
        ],
      },
      
    ]
  },
  resolve: { 
    extensions: ["*", ".js", ".jsx"]
  }, 
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    })
  ],
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true,
    compress: false,
    writeToDisk: true
  }
};