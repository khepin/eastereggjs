Travis-CI status: [![Build Status](https://travis-ci.org/khepin/eastereggjs.png?branch=master)](https://travis-ci.org/khepin/eastereggjs)

# How it works

Create eastereggs by calling a callback function whenever a specific sequence of
characters is typed into the browser.

# How to use

```javascript
function callback() {
    /*
     * Do some funny stuff. Your imagination is the limit!
     */
}
new EasterEgg('didntexpectthat', callback);
```

Now whenever somebody types "didntexpectthat" in their browser, the callback
will be applied.

Any non ASCII characters are currently ignored.