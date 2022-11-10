const path = require("path");
const process = require("process");

const path1 = path.basename(`${process.cwd()}/path_module.js`);
const path2 = path.basename(`${process.cwd()}/path_module`, ".js");

console.log(path1);
console.log(path2);

// delimiter
console.log(path.delimiter);
// console.log(process.env.PATH);
// console.log(process.env.PATH.split(path.delimiter));

// dirname
console.log(path.dirname(process.cwd()));

const path3 = path.dirname("/users/admin/website/index.html");
console.log(path3);

console.log(path.dirname(__filename));
console.log(path.dirname(__dirname));

// extname
console.log(path.extname("hello.txt"));
console.log(path.extname(__filename));
console.log(path.extname(__dirname));

const paths_array = [
  "/home/user/website/index.html",
  "/home/user/website/style.css",
  "/home/user/website/bootstrap.css",
  "/home/user/website/main.js",
  "/home/user/website/contact_us.html",
  "/home/user/website/services.html",
];

paths_array.forEach((filePath) => {
  if (path.extname(filePath) == ".css") console.log(filePath);
});

//format
let ph = path.format({
  root: "/images/",
  name: "image",
  ext: ".jpg",
});
console.log("Path 3:", ph);

// join method
const apiurl = path.join("api/users", "user1");
console.log(apiurl);
console.log(path.join(__dirname, "anotherfile.js"));
console.log(path.join(__filename, "..")); //one level up

// parse
console.log(path.parse("/users/admin/website/index.html").base);
console.log(path.parse(__filename).base);
