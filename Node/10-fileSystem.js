//synchronous approach (blocking)
const { readFileSync, writeFileSync } = require("fs");

//check difference between sync-async read/write
console.log("start");
//read from file
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first);
console.log(second);

//for writing in a file
writeFileSync(
  "./content/result.txt",
  `First write execution\n${first}\n${second}`,
  //for appending
  { flag: "a" }
);
console.log("finished");
console.log("next");

/*output:
start
This is the first text file.
This is the second text file.
finished
next
*/
