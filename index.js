var http = require('http');

var server = http.createServer(function(request, response) {

    var text = "Hi ! I'm Panomkorn Noknoi.\nthis is a Node.js run for testing on Azure\nThank you :D"
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(text);

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
