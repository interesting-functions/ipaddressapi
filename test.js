const iptools = require(__dirname+"/index.js");

(async () => {

iptools.address().then(d => console.log(d))
iptools.isV4('127.0.0.1').then(d => console.log(d))
iptools.isV6('::1').then(d => console.log(d))
iptools.geo('127.0.0.1').then(d => console.log(d))
iptools.dns('127.0.0.1').then(d => console.log(d))
iptools.time('127.0.0.1').then(d => console.log(d))
iptools.currency('127.0.0.1').then(d => console.log(d))
iptools.whois('8.9.230.8').then(d => console.log(d))

})();
