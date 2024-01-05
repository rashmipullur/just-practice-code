// Write a program that prints the numbers from 1 to 100. But, for multiples of 3, print "Fizz" instead of the number, and for the multiples of 5, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".

function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz ";
    if (i % 5 === 0) output += "Buzz ";
    console.log(output || i);
  }
}
fizzbuzz();
