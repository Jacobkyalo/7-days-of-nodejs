exports.date = new Date().getFullYear();

// return date;
// exports.add = function (x, y) {
//   return x + y;
// };

// exports.sub = function (x, y) {
//   return x - y;
// };

// exports.mult = function (x, y) {
//   return x * y;
// };

// exports.div = function (x, y) {
//   return x / y;
// };

// another custom module
const welcome = {
  sayHello: function () {
    console.log("Hello Jacob");
  },

  currTime: new Date().toLocaleDateString(),

  companyName: "Google",
};

module.exports = welcome;
