const http = require('http');
function onRequest(request,response){
    console.log("User requested something " + request.url);
    response.writeHead(200,{"Context-Type":"text/plain"});
    response.write("Here is some text for you");
    response.end();
}
//listen for anyone connecting to localhost:8888
http.createServer(onRequest).listen(8888);
console.log("Server is running");

/*
In the console log, you'll see 2 requests
User requested something /
User requested something /favicon.ico
That's because the browser first requests the home page and then asks for the little icon associated with the page
*/
