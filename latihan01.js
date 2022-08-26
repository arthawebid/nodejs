var http = require('http');
var dt = require('./modul01.js');

http.createServer(function(req,res){
	res.writeHead(200,{'content-type':'text/html'});
	res.end('<h2>Belajar NodeJS</h2>Cara menggunakan node JS dan menggunakan modul<br>'+ dt.TulisPesan());
}).listen(8080);
console.log('Server ready');
