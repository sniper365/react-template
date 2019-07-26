const path = require("path");

const webpack = require("webpack");

const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const clientModeConfig = env => require(`./webpack/webpack.${env}.js`)(env);
const serverModeConfig = env =>
  require(`./webpack/webpack.server.${env}.js`)(env);

module.exports = ({ mode, project } = { mode: "dev", project: "sever" }) => {
  if (project === "server") {
    // bundling for sever projects
    return merge(
      {
        entry: path.resolve("./src/Server/server.js"),
        output: {
          filename: "server.bundle.js",
          path: path.join(__dirname, "dist"),
        },
        resolve: {
          alias: {
            mocks: path.resolve(__dirname, "./src/__mocks__"),
            utils: path.resolve(__dirname, "./utils"),
            assets: path.resolve(__dirname, "./assets"),
            src: path.resolve(__dirname, "./src/"),
          },
        },
        target: "node",
        node: {
          // Need this when working with express, otherwise the build fails
          __dirname: false, // if you don't put this is, __dirname
          __filename: false, // and __filename return blank or /
          fs: "empty",
        },
        externals: [nodeExternals()],
      },
      serverModeConfig(mode)
    );
  } else {
    // bundling for client side projects
    return merge(
      {
        mode,
        entry: "./index.js",
        output: {
          filename: "./client.bundle.js",
        },
        resolve: {
          alias: {
            Components: path.resolve(__dirname, "./src/Client/Components"),
            css: path.resolve(__dirname, "./src/Client/css"),
            mocks: path.resolve(__dirname, "./src/__mocks__"),
            utils: path.resolve(__dirname, "./utils"),
            assets: path.resolve(__dirname, "./assets"),
            src: path.resolve(__dirname, "./src/"),
          },
          modules: [path.resolve(__dirname, "./src/Client"), "node_modules"],
        },
        plugins: [
          new webpack.ProgressPlugin(),
          new HtmlWebpackPlugin({
            template: path.resolve("./webpack/template.ejs"),
            templateParameters: {
              title: "React BoilerPlate v3", // name of the app
            },
            inject: true,
            minify: {
              removeComments: true,
              collapseWhitespace: true,
            },
          }),
        ],
      },
      clientModeConfig(mode)
    );
  }
};
