const postcss = require('postcss');
const fs = require('fs');
const path = require('path');
const sass = require("sass");

module.exports = function (eleventyConfig) {

	// Recognize Sass as a "template languages"
  eleventyConfig.addTemplateFormats("scss");



  // Watch CSS files for changes
  eleventyConfig.addWatchTarget('./src/css/');

  // Process CSS with PostCSS
  eleventyConfig.addTemplateFormats('css');

  eleventyConfig.addExtension('css', {
    outputFileExtension: 'css',
    compile: async function (inputContent, inputPath) {
      let parsed = path.parse(inputPath);
      if (parsed.dir.includes('_site')) {
        return;
      }

      return async () => {
        let result = await postcss([
          require('postcss-import'),
          // look up adding stage options and using const
          require('postcss-preset-env')({ stage: 1 }),
          require('autoprefixer'),
          require('cssnano')({
            preset: [
              'default',
              {
                discardComments: {
                  removeAll: true,
                },
              },
            ],
          }),
        ]).process(inputContent, {
          from: inputPath,
          to: inputPath,
        });

        return result.css;
      };
    },
  });

  return {
    dir: {
      input: 'src',
      output: '_site',
    },
  };
};
