var http = require("http");

http.createServer(
  function (request, response) {
    if(request.url == "/mystyle.css") {
      response.writeHead(200, { 'Content-Type': 'text/css'});
      response.end('p {color:blue}');
    } else {
      response.writeHead(200, { 'Content-Type': 'text/html'});
      response.end('<html><title>Node.js</title><body><h2>Hello, Node.JS!</body></html>');
      if(request.url == "/index.html") {
        response.end(
          "<html>" +
          "<head>" +
          "<link rel='stylesheet' type='text/css' href='mystyle.css'>" +
          "</head>" +
          "<title>nodeJs</title>" +
          "<body><p>content of index.html here</p></body>" +
          "</html>");
      } else {
        response.end("<html><title>nodeJs</title><body> Hello, nodeJs! </body></html>");
      }
    }
}).listen(3000);

console.log('Web server running on port 3000');
