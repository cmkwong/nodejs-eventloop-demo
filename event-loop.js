const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 5; // default = 4

setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("t../text-file.txt", () => {
  console.log("I/O finished");
  console.log("-------------") // event loop here

  setTimeout(() => console.log("Timer 2 finished"), 0); // https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/learn/lecture/15064746?start=459#notes
  setTimeout(() => console.log("Timer 3 finished"), 3000);
  setImmediate(() => console.log("Immediate 2 finished"));

  process.nextTick(() => console.log("Process.nextTick"));

  // default thread pool size = 4
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "ms Password encrypted")
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "ms Password encrypted")
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "ms Password encrypted")
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "ms Password encrypted")
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "ms Password encrypted")
  });
});

console.log("Hello from the top level code");
