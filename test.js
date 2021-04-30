const iphelper = require(__dirname+"/index.js");

(async () => {

iphelper.address().then(d => console.log(d))
iphelper.isV4('127.0.0.1').then(d => console.log(d))
iphelper.isV6('::1').then(d => console.log(d))
iphelper.geo('127.0.0.1').then(d => console.log(d))
iphelper.dns('127.0.0.1').then(d => console.log(d))
iphelper.time('127.0.0.1').then(d => console.log(d))
iphelper.currency('127.0.0.1').then(d => console.log(d))
iphelper.whois('8.9.230.8').then(d => console.log(d))

})();
