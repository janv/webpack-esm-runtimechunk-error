module.exports = {
  entry: {
    main: {
      import: './index.mjs',
      library: {
        type: 'module'
      },
    },
    other: {
      import: './other.mjs',
      library: {
        type: 'module'
      },
      dependOn: ['main']
    }
  },
  mode: 'development',
  devtool: false,
  output: {
    chunkLoading: 'import',
    chunkFormat: 'module', 
  },
  experiments: {
    outputModule: true
  }
}