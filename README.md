# bsb-Eleventy-PostCSS

This Eleventy Project current status 111124

This is Eleventy 2.0 with a SASS and a PostCSS configuration.

SASS is Dart SASS 3.0 using @use and @forward. SASS is compiled from Package.json

PostCSS is compiled from within .eleventy.js using a PostCSS.config.js file.

The SASS and PostCSS builds are exclusive to each other in this repo. They output different CSS Style sheets. 

### TO DO:
– Upgrade to Eleventy 3.0
– Chain SASS and PostCSS to process a combined CSS Stylesheet, or make an optional script in Package.json to do so 


### Initial Status 110124:
This repo only has Eleventy and PostCSS.



## Resources:

#### Adding SASS through package.json
Max Böck
### Asset Pipelines in Eleventy
26 Apr 2021
https://mxb.dev/blog/eleventy-asset-pipeline/ 
– Example showing scripts to load SASS from package.json

#### How to convert @import to Dart SASS 3.0
### Stop using @import with Sass | @use and @forward explained
Kevin Powell
2021
https://www.youtube.com/watch?v=CR-a8upNjJ0&ab_channel=KevinPowell

### How to Switch Between Multiple CSS Stylesheets using JavaScript?
Last Updated : 15 Oct, 2024
https://www.geeksforgeeks.org/how-to-switch-between-multiple-css-stylesheets-using-javascript/

### Stackblitz Bolt.new for help with PostCSS




