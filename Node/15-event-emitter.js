const EventEmitter = require("events");

const customEmitter = new EventEmitter();
customEmitter.on("response", () => {
  console.log(`data received`);
});
customEmitter.on("response", (name, id) => {
  console.log(`data received of ${name} and id: ${id}`);
});
customEmitter.emit("response", "zunayed", 24);
