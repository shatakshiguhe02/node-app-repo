
const http = require('http');

const httpServer = http.createServer((request, response) => {
    console.log("Received request...");
    // response.end("Response from the server");
    const url = request.url;
    console.log(`URL: ${url}`);
    
    switch (url) {
        case '/':
            response.end("Response from /");
            break;
        case '/home':
            response.end("Response from home");
            break;
        case '/about':
            response.end("Response from about");
            break;
        default:
            response.end("Not matching any path"); 
            break;
    }
});
httpServer.listen(8000, () => {
    console.log("Server started on port: 8000");
});