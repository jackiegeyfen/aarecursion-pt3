
// Write a recursive function called `flatten` that takes a single array with
// any number of nested arrays and returns and array with all the nested
// contents on one level.

// Do not use the built in Array.flat.

// Examples:

// base case - when you have an empty array

//recursive case - if the array contains arrays

//recursive step- call function within array argument --> return flatten arr.push -->

function flatten(arr) {
  let returnArr=[];
  for (let el of arr){
    if (Array.isArray(el)){
      // let currArr= flatten(el);
      returnArr=returnArr.concat(flatten(el));
    }
    else returnArr.push(el);
  }
  return returnArr;
}

// flatten([]); // []
console.log(flatten([1, 2])); // [1, 2]
// flatten([1, [2, [3]]]); // [1, 2, 3]
// ***********************************************************************/
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
