module.exports = () => ({
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          "babel-loader",
          {
            loader: "eslint-loader",
            options: {
              emitWarning: true,
            },
          },
        ],
      },
    ],
  },
});
