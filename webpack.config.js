const HtmlWebpackPlugin = require("html-webpack-plugin");
const path=require("path")

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },

    module:{
        rules:[
            {
                test:/\.css$/i,
                use:["style-loader", "css-loader"]
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource"
            },

            {
                test:/\.(woff|woff2|ttf|otf)$/i,
                type: "asset/resource"
            }
        ]
    },
    // plugins:[new HtmlWebpackPlugin()],

    devtool:"source-map"
  };