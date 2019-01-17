# Color Run

## Installation
Start by clone, fork or download this repository and place it anywhere you want.

To build assets you'll need to install `node.js` and `npm`.
To install the dependencies please launch this command in the root of the project :  
```
$ npm install
```

# Build assets

Skiing is using assets you'll need to compile some files like LESS stylesheets. Skiing is using gulp to do that.
In the root of the project you can launch these commands :
```

$ gulp styles /* Build stylesheets from less to css in the Assets/build/css folder */
$ gulp imgs /* Just move image files from Assets/dev/imgs to Assets/build/imgs, you can modify this function to minify images for examples  */
$ gulp js /* Minify js files in the Assets/build/js folder  */
$ gulp build /* Launch styles, imgs and js builds */
$ gulp watch /* Start by compile all assets and wait for changes in source files, so it compile them */

```
