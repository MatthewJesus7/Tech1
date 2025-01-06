module.exports = {
    resolve: {
      fallback: {
        "fs": false,
        "path": require.resolve("path-browserify"),
        "os": require.resolve("os-browserify/browser"),
        "crypto": require.resolve("crypto-browserify")
      }
    }
  };
  