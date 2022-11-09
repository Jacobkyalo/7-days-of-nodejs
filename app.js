// JS Basics

const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const hour = date.getHours();
const minutes = date.getMinutes();

console.log(date);
console.log(date.getDate());
console.log(`The date is: ${day}/${month}/${year}`);

if (hour > 11) {
  if (minutes < 10) {
    console.log(`The time is: ${hour}:0${minutes} PM`);
  } else {
    console.log(`The time is: ${hour}:${minutes} PM`);
  }
} else {
  if (minutes < 10) {
    console.log(`The time is: ${hour}:0${minutes} AM`);
  } else {
    console.log(`The time is: ${hour}:${minutes} AM`);
  }
}
