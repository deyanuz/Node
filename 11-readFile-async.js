//asynchronous approach (non blocking)
const { readFile, writeFile } = require("fs");

//check difference between sync-async read/write
console.log("start");

//callback hell
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.error(err);
    return null;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.error(err);
      return null;
    }
    const second = result;
    console.log(first);
    console.log(second);
    writeFile(
      "./content/result-async.txt",
      `First write execution\n${first}\n${second}`,
      (err, result) => {
        if (err) {
          console.error(err);
        }
        console.log("finished");
      }
    );
  });
});
console.log("next");

/*output:
start
next
This is the first text file.
This is the second text file.
finished
*/
