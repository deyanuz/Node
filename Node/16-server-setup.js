const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  res.end(
    '<h1 style="color: red; text-align: center;' +
      ' margin: 20px">Welcome!</h1>'
  );
});
server.listen(5000);
