const path = require('path')

const mode = process.env.NODE_ENV || 'production'

module.exports = {
  target: "webworker",
  optimization: {
    minimize: false
  },
  entry: "./src/index.js",
  output: {
    filename: `worker.js`,
    path: path.join(__dirname, 'dist'),
  },
  stats: {
    warnings: false
  },
  mode,
  resolve: {
    extensions: ['.js'],
    plugins: [],
  },
}
