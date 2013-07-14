var express = require('express');
var fs = require('fs')
var data_to_write;
fs.readFile('./index.html', function(err, data){
	if (err) throw err;
	data_to_write = data.toString('utf8', 0);
});

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(data_to_write);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
