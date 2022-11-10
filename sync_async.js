const fs = require("fs");

// Asynchronous version
fs.readFile("notes.txt", (err, data) => {
  if (err) console.error(err);
  else console.log(data.toString());
});

// Synchronous version
const data = fs.readFileSync("notes.txt");
console.log(data.toString());

console.log("After reading...");

// open and read methods
fs.open("input.txt", "r+", (err, fd) => {
  if (err) throw err;
  console.log("File opened successfully");

  fs.read(fd, (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });
});
