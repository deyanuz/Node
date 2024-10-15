//Modules - encapsulated code
//CommonJS, every file is a module
const { sara, khan } = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternate");

//importing automatically invokes any functions
//invoked in the imported file
require("./7-module-continue");

console.log(data);
sayHi(sara);
sayHi(khan);
