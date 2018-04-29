const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//initialize HtmlWebpackPlugin with template and filename
//this is a cleaner way of doing thins as opposed to defining this straight as value for the key 'plugins'
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html", //where to find file
    filename: "./index.html" //what the same file should be named as when minified into dist
});

const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css"
});

//the module to be exported contains: i) rules, ii) plugins in use
//the rules involved specifying loaders to use
//each css-loader is an object with k-v pair
//this additional settings to css-loader allows it to be modular ie one Component has one dedicated css.
//this will prevent clash in styling
module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true,
                            minimize: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [htmlPlugin, miniCssExtractPlugin]
};