//to create package.json: npm init -y
console.log("first");
setTimeout(() => {
  console.log("second");
}, 0);
console.log("third");

/*
output:
first
third
second*/

const http = require("http");
const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("<h1>Hello there!</h1>");
});
server.listen(5000, () => {
  console.log("server listening port 5000");
});
