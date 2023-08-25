/***********************************************************************
Write a recursive function called `factorial` that takes an integer, `num`,
and returns the factorial of `num`. Assume the value of `num` is greater
than or equal to 1.

A factorial is the number get when multiplying a number by itself minus one
all the way down to 1 (but not 0)! We represent them with an exclamation
point, also sometimes called a "bang" in programming.

5! = 5 x 4 x 3 x 2 x 1 = 120

Examples:

***********************************************************************/
// base case- num gets down to 1

// recursvie case-any time num > 1

// recursive step- num-1 every time

function factorial(num) {
  debugger
  if (num === 1){
    return num;
  }
  if (num > 1) {
    return num * factorial(num-1);
  }
}

// factorial(1); // 1
factorial(3); // 6
factorial(5); // 120
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = factorial;
