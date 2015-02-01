LCHab
===

The official LCHab color-space plugin for alchemist.js.

Usage
-----

### Node

By default alchemist-lchab is included in `alchemist.common`.

```js
  var alchemist = require('alchemist-js')
  alchemist.use(alchemist.common())
  var color = alchemize.lchab(100, 50, .5)
```

If you are not using alchemist.common you can instead use this library directly

```js
  var alchemist = require('alchemist-js')
  var lchab = require('alchemist-lchab')
  alchemist.use(lchab())
```

### Web

[coming soon]

Special Thanks
--------------

Special thanks to Bruce Lindbloom not only for his color formulas
but for his color converter as well, both of which played a major
role in this module.

You can find his site here:
http://www.brucelindbloom.com/

Other than Bruce, many people and projects inspired alchemist as a whole. They
are listed here:

- [chroma.js](https://github.com/gka/chroma.js)
- [color-convert](https://github.com/harthur/color-convert)
- [colormine](https://github.com/colormine/colormine)
- [d3.js](https://github.com/mbostock/d3/wiki/Colors)
- and many more...

Thanks to all of you!
