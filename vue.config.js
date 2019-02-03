module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/mine/'
    : '/',
  outputDir: 'dist'
}
