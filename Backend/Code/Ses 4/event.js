// const EventEmitter = require("events");

// const customEmitter = new EventEmitter();

// customEmitter.on("response", (name, id) => {
//   console.log(`Data recieved user ${name} with id:${id}`);
// });

// customEmitter.on("response", (name) => {
//   console.log("Some other function");
// });

// customEmitter.emit("response", "Priyanshu", 100);

const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("mycustomevent", (name, id) => {
  console.log(`Name : ${name}\nId: ${id}`);
});

// customEmitter.on("mycustomevent", () => {     // 2 event listner triggred
//   console.log("Ok");
// });

customEmitter.emit("mycustomevent");
