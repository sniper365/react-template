module.exports = () => ({
  mode: "production",
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
});
