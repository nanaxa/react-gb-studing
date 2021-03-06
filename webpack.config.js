const path = require("path"); // указываем путь до файла без слеша
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"), //путь до точки входа
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "src"),
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/env', '@babel/react'],
                    plugins: [
                        ['@babel/plugin-proposal-class-properties', {"loose": true}]
                    ],
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, "src", "index.html")})
    ],
}