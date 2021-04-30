
<div align="center">
  <br>

# iphelper
<br>
<p>
A node.js NPM package to provide you with IP data
</p>
<br>
<p>
<br>
<a href="https://www.npmjs.com/package/iphelper"><img src="https://img.shields.io/npm/v/iphelper.svg?maxAge=3600" alt="NPM version" /></a>
<a href="https://www.npmjs.com/package/iphelper"><img src="https://img.shields.io/npm/dt/iphelper.svg?maxAge=3600" alt="NPM downloads" /></a>
<a href="https://david-dm.org/milanmdev/iphelper"><img src="https://img.shields.io/david/milanmdev/iphelper.svg?maxAge=3600" alt="Dependencies" /></a>
<a href="https://www.npmjs.com/package/iphelper"><img src="https://api.ghprofile.me/view?username=milanmdev-iphelper&label=repository%20view%20count&style=flat" alt="Repository view count" /></a>
</p>

<br>

<p>
<a href="https://nodei.co/npm/iphelper/"><img src="https://nodei.co/npm/iphelper.png?downloads=true&stars=true" alt="npm installnfo" /></a>
</p>

</div>

# Usage

## Add the package

To start, you will need to add the package. To do that, simply run `npm i iphelper`. In your code, add the following:

```js
const iphelper = require("iphelper");
```

Now you can use any of the functions below!

* * *

## API Usage
```js
const iphelper = require("iphelper");

iphelper.address().then(d => console.log(d)) // your ip is returned
iphelper.isV4('127.0.0.1').then(d => console.log(d)) // true
iphelper.isV6('::1').then(d => console.log(d)) // true
iphelper.geo('127.0.0.1').then(d => console.log(d)) // null (because IP is localhost)
iphelper.dns('127.0.0.1').then(d => console.log(d)) // null (because IP is localhost)
iphelper.time('127.0.0.1').then(d => console.log(d)) // null (because IP is localhost)
iphelper.currency('127.0.0.1').then(d => console.log(d)) // null (because IP is localhost)
iphelper.whois('127.0.0.1').then(d => console.log(d)) // null (because IP is localhost)
```
