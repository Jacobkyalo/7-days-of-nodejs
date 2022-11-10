const fs = require("fs");
const path = require("path");

// writeFile method
fs.writeFile("input.txt", "I am writing to this file...", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("File written successfully");
  }

  // read from file
  fs.readFile("input.txt", (err, data) => {
    if (err) console.error(err);
    else console.log(data.toString());
  });
});

// append to file
fs.appendFile("input.txt", " Writing to this file...", (err) => {
  if (err) throw err;
  console.log("Data appended successfully");
});

// delete file
// fs.unlink("remove.txt", (err) => {
//   if (err) throw err;
//   console.log("File removed successfully");
// });

//mkdir
fs.mkdir(path.join(__dirname, "folder"), { recursive: true }, (err) => {
  if (err) {
    console.log("Directory cannot be created");
  } else {
    console.log("Directory created successfully");
  }
});
// // rmdir
// fs.rmdir("remove", (err) => {
//   if (err) throw err;
//   console.log("Directory removed successfully");
// });

// file exists but it is deprecated
fs.exists("remove.txt", (exists) => {
  console.log(exists ? " found" : "not found");
});

fs.stat("stats.txt", (err, stats) => {
  if (err) {
    throw err;
  } else {
    console.log(stats);
    console.log(stats.isFile());
    console.log(stats.isDirectory());
  }
});
