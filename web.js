var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var buf, outmsg;
var infile = "index.html";
buf = fs.readFileSync(infile);
outmsg = buf.toString();

app.get('/', function(request, response) {
  response.send(outmsg);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
