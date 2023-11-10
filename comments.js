// Create web server
// To start: node comments.js

// Import modules
var http = require('http');
var url = require('url');
var fs = require('fs');

// Create server
http.createServer(function (req, res) {
	// Get path
	var q = url.parse(req.url, true);
	var filename = "." + q.pathname;
	// If path is root, show index.html
	if (filename == './') {
		filename = './index.html';
	}
	// Read file
	fs.readFile(filename, function(err, data) {
		if (err) {
			res.writeHead(404, {'Content-Type': 'text/html'});
			return res.end("404 Not Found");
		} 
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.end();
	});
}).listen(8080);