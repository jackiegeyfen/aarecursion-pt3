/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two
previous numbers in the sequence together to form the next one:

0, 1, 1, 2, 3, 5, 8, etc....

We count Fibonacci numbers beginning with the first 1. Take a look at the
examples below if you're unsure where to start!

Examples:

***********************************************************************/
//base case- if n<=2 return 1;

//recursive case- else statement

//recursive step- ((n-2) + (n-1))

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  }
  else
    return fibonacci(n-1) + fibonacci(n-2);
  }
// console.log(fibonacci(1)); // 1
// console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(10)); // 55

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = fibonacci;
