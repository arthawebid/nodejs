var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200,{'content-type':'text/html'});
	res.end('<h2>Belajar NodeJS</h2>Cara menggunakan node JS<br>');
}).listen(8080);

console.log('Server ready');
