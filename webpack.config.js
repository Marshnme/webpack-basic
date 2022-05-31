const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry:"./src/index.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"dist"),
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:"[name].css",
            chunkFilename:"[id].css"
        }),
    ],
    module:{
        rules:[
            {
                test: /\.css$/i,
                use:[MiniCssExtractPlugin.loader,"css-loader"],
            },
            // "style-loader",
        ],
    },
    optimization:{
        minimizer:[
            new CssMinimizerPlugin(),
        ]
    }
};