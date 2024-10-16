const { readFile, writeFile } = require("fs").promises;

// const util = require("util");
// const readPromise = util.promisify(readFile);
// const writePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/result_2.txt",
      `This is another write file:\n${first}\n${second}\n\n`,
      { flag: "a" }
    );
    console.log(first);
    console.log(second);
  } catch (e) {
    console.error(e);
  }
};
start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.error(err));
