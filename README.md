## Usage

Require the module and call it specifying configuration

```js
var svg2favicons = require('favicons');
favicons(configuration);
```

### Configuration

```js
{
    src: null,               // Path to SVG file `string`
    dest: null,              // Path to output dir `string`
    iconsPath: null,         // Path to use as icons path `string`
    icoPath: null,           // Path to save .ico file to `string`

    appName: null,           // Your application's name. `string`
    appDescription: null,    // Your application's description. `string`
    background: null,        // Background colour for flattened icons. `string`
    developer: null,         // Your (or your developer's) name. `string`
    developerURL: null,      // Your (or your developer's) URL.`string`
    url: null                // URL for your website. `string`
}
```
