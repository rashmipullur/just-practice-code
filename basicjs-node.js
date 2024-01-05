// reverse string
function reverseStr(str) {
  return str.split("").reverse().join("");
}
// console.log(reverseStr("something"))

// simple nodejs server
const http = require("http");
const server = http.createServer((req, res) => {
  res.end("hello world");
});

server.listen(3000, () => {
  console.log("listening @ port 3000");
});

// factorial function
function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(5));
