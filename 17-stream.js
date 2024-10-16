//readable, writable, duplex, transform
// used to read/write large files

//creating big file
/*const { writeFileSync } = require("fs");

for (let index = 0; index < 1000; index++) {
  writeFileSync(
    "./content/big.txt",
    `Execution line: ${index}\n`,
    //for appending
    { flag: "a" }
  );
}*/

const { createReadStream } = require("fs");
const stream = createReadStream("./content/big.txt", {
  encoding: "utf8",
});

stream.on("data", (result) => {
  console.log(result);
  console.log(result.length);
});
stream.on("error", (err) => {
  console.log(err);
});
