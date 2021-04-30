
<div align="center">
  <br>
# iptools
<br>
<p>
A node.js NPM package to provide you with IP data
</p>
<br>
<p>
<br>
<a href="https://www.npmjs.com/package/iptools"><img src="https://img.shields.io/npm/v/iptools.svg?maxAge=3600" alt="NPM version" /></a>
<a href="https://www.npmjs.com/package/iptools"><img src="https://img.shields.io/npm/dt/iptools.svg?maxAge=3600" alt="NPM downloads" /></a>
<a href="https://david-dm.org/milanmdev/iptools"><img src="https://img.shields.io/david/milanmdev/iptools.svg?maxAge=3600" alt="Dependencies" /></a>
<a href="https://www.npmjs.com/package/iptools"><img src="https://api.ghprofile.me/view?username=milanmdev-iptools&label=repository%20view%20count&style=flat" alt="Repository view count" /></a>
</p>

<br>

<p>
<a href="https://nodei.co/npm/iptools/"><img src="https://nodei.co/npm/iptools.png?downloads=true&stars=true" alt="npm installnfo" /></a>
</p>

</div>

# Usage

## Add the package

To start, you will need to add the package. To do that, simply run `npm i iptools`. In your code, add the following:

```js
const iptools = require("iptools");
```

Now you can use any of the functions below!

* * *

## API Usage
```js
const iptools = require("iptools");

iptools.address().then(d => console.log(d)) // your ip is returned
iptools.isV4('127.0.0.1').then(d => console.log(d)) // true
iptools.isV6('::1').then(d => console.log(d)) // true
iptools.geo('127.0.0.1').then(d => console.log(d)) // null (because IP is localhost)
iptools.dns('127.0.0.1').then(d => console.log(d)) // null (because IP is localhost)
iptools.time('127.0.0.1').then(d => console.log(d)) // null (because IP is localhost)
iptools.currency('127.0.0.1').then(d => console.log(d)) // null (because IP is localhost)
iptools.whois('127.0.0.1').then(d => console.log(d)) // null (because IP is localhost)
```
