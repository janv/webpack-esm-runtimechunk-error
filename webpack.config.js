module.exports = {
  entry: {
    main: {
      import: './index.mjs',
      library: {
        type: 'module'
      },
    }
  },
  mode: 'production',
  devtool: false,
  optimization: {
    runtimeChunk: 'single'
  },
  experiments: {
    outputModule: true
  }
}