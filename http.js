http = require('http');
server = http.createServer();


server.on('request', function(req, res){
	console.log(req.method, req.url);
})


server.on('request', function (req, res){
	res.setHeader("Content-Type", 'utf-8');
	res.end('<h1>Hello WOrld</h1>');
	
})


server.listen(8080);