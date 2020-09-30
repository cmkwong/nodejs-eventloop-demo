const fs = require("fs");

setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("t../text-file.txt", () => {
  console.log("I/O finished");
  console.log("-------------") // event loop here

  setTimeout(() => console.log("Timer 2 finished"), 0); // https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/learn/lecture/15064746?start=459#notes
  setTimeout(() => console.log("Timer 3 finished"), 3000);
  setImmediate(() => console.log("Immediate 2 finished"));

  process.nextTick(() => console.log("Process.nextTick"));
});

console.log("Hello from the top level code");
