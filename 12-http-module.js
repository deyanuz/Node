const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("welcome to our home");
  } else if (request.url === "/about") {
    response.end("welcome to our about");
  } else {
    response.end(`<h1> Not found </h1>
        <a href='/'>Back to Home</a>`);
  }
});
server.listen(8000);
