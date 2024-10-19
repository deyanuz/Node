var { createServer } = require("http");
var { readFileSync, createReadStream } = require("fs");

createServer((req, res) => {
  // using sync pattern
  // const text = readFileSync("./content/big.txt", "utf8");
  // res.end(text);
  const fileStream = createReadStream("./content/big.txt", "utf8");
  fileStream.on("open", () => {
    fileStream.pipe(res);
  });
  fileStream.on("error", (err) => {
    res.end(err);
  });
}).listen(5000);
