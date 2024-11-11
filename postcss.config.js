// postcss.config.js 102624
module.exports = {
  plugins: [
    require('postcss-import'),
    // look up adding stage options and using const
    require('postcss-preset-env')({stage: 1}),
      require('autoprefixer'),
    require('cssnano')({
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
      }],
    })