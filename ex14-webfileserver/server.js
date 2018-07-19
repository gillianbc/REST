const http = require('http');
const fs = require('fs');

//404 response
function pageNotFound(response) {
    response.writeHead(404, {"Context-Type": "text/plain"});
    response.write("Error 404 - page not found");
    response.end();
}

//handle a user request
function onRequest(request, response) {
    console.log("Url " + request.url);
    if (request.method == 'GET' && (request.url == '/' || request.url == '/index.html')) {
        response.writeHead(200, {"Context-Type": "text/html"});
        fs.createReadStream("./index.html").pipe(response);

    } else {
        pageNotFound(response);
    }
}

http.createServer(onRequest).listen(8888);
console.log("Server is running on localhost:8888");