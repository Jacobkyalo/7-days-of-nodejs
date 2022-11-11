const url = require("url");

const addrr = new URL("https://github.com/Jacobkaylo?tab=repositories");

console.log(addrr.pathname);
console.log(addrr.password);
console.log(addrr.host);
console.log(addrr.hostname);
console.log(addrr.hash);
console.log(addrr.search);
console.log(addrr.searchParams.get("tab"));
console.log(addrr.port);
console.log(addrr.protocol);
console.log(addrr.username);
console.log(addrr.origin);
console.log(addrr.href);
console.log(addrr.toJSON());
console.log(addrr.toString());

// setting URL protocol
addrr.protocol = "ftp";
console.log(addrr.protocol);

addrr.searchParams.append("blob", "main");
console.log(addrr.href);

// addrr.searchParams.delete("tab");
// console.log(addrr.href);

console.log(addrr.searchParams);

const newSearchParams = new URLSearchParams(addrr.searchParams);
// The above is equivalent to
// const newSearchParams = new URLSearchParams(myURL.search);

newSearchParams.append("a", "c");
console.log(addrr.href);
console.log(newSearchParams);

// newSearchParams.toString() is implicitly called
addrr.search = newSearchParams;
console.log(addrr.href);
newSearchParams.delete("a");
console.log(addrr.href);

// new URLSearchParams
const params = new URLSearchParams({
  user: "abc",
  query: ["first", "second"],
});
console.log(params.getAll("query"));
// Prints [ 'first,second' ]
console.log(params);
console.log(params.keys());
console.log(params.values());
console.log(params.has("query")); // true

// using parse function

// const parsedURL = url.parse(addrr);

// const q = url.parse(addrr, true).query;
// console.log(q);
// console.log(q.tab);

// console.log(parsedURL.href);
// console.log(parsedURL.host);

// console.log(parsedURL.pathname);

// console.log(parsedURL.search);

// if (parsedURL.port) {
//   console.log(parsedURL.port);
// } else {
//   console.log("No port in the url");
// }
