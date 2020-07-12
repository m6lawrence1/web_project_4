const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // connect plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin") // connect mini-css-extract-plugin to the project
const ghpages = require('gh-pages');
ghpages.publish('dist', function(err) {});

module.exports = {
    entry: { main: "./src/scripts/pages/index.js" },
    output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/web_project_4/"
  },
    module: {
        rules: [ // this is an array of rules
            {   // add object containing rules for Babel to it
                test: /\.js$/, // a regular expression that searches for all js files
                loader: "babel-loader", // all files must be processed by babel-loader
                exclude: "/node_modules/" // exclude the node_modules folder, we don't need to process files in it
            },
            {   // add object containing rules for file-loader to it
                test: /\.(png|svg|jpg|gif|woff2|woff)$/, // this regular expression will search for files with the following extensions
                loader: "file-loader" // file-loader should be used when processing those files
            },
            {   
                test: /\.html$/,
                loader: "html-loader",
            },
            /*{   
                test: /\.css$/, // use MiniCssExtractPlugin.loader и css-loader when processing these files
                loader:  [MiniCssExtractPlugin.loader, "css-loader"]
            },*/
            {
                test: /\.css$/, // add postcss-loader
                loader: [ // we replaced the "css-loader" string with an object, these are equal for Webpack
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        // add an options object
                        options: { 
                            importLoaders: 1 
                        }
                    },
                    "postcss-loader"
                ]
            }
        ]
    },
	plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html" // path to our index.html file
        }),
        new MiniCssExtractPlugin() // connect the plugin for merging CSS files
    ] // add the array here
  
  
};