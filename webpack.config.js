const path = require("path");
const webpack = require("webpack");  

module.exports = {
  entry:   "./entry.js" ,
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
      } 
      
    ]
  },
  resolve: { 
    extensions: ["*", ".js", ".jsx"]
  }, 
  plugins: [
    
  ],
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  } 
};