# Extended-IndexOf

Extended `indexOf` for specific occurrence time.

```javascript
var exIndexOf = require('ex-indexof');

exIndexOf('hello, world', 'o'); // => 4
exIndexOf('hello, world', 'o', 1); // => 8
exIndexOf('hello, world', 'o', 2); // => -1

// reverse direction
exIndexOf('hello, world', 'o', -1); // => 8
exIndexOf('hello, world', 'o', -2); // => 4
exIndexOf('hello, world', 'o', -3); // => -1

// substring
exIndexOf('too simple, too young, sometime naive', 'too', -2); // => 0
```
