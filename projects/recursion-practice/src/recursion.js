// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120

/**
 * I: The function receives a number.
 * O: The function returns the factorial of the input number.
 * C: Must use recursion.
 * E: Return null if input number is negative. Return 1 if input number is 0.
 */

var factorial = function(n, product = 1) {
  // EDGE CASE:
  // Check if n is negative
  if (n < 0) {
    return null;
  } 
  // BASE:
  // Check if n is less than 1
  if (n < 1) {
    // return product
    return product;
  }
  // RECURSION:
  // Multiply product by n and reassign
  product *= n;
  // Recursive call factorial with n - 1 & product
  return factorial(n - 1, product);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21

/**
 * I: The function receives an array of integers.
 * O: The function returns the sum of the integers in the array.
 * C: Must use recursion.
 * E: Returns 0 for an empty array.
 */

var sum = function(array, output = 0) {
  // BASE:
  // Check if the length of array is 0
  if (array.length === 0) {
    // Return output
    return output;
  }
  // RECURSION:
  // Add array[0] to output and reassign
  output += array[0];
  // Return the recursive call with array.slice(1) & output
  return sum(array.slice(1), output); 
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15

/**
 * I: The function receives an array containing nested arrays.
 * O: The function returns the sum of all numbers in the input array which may contain nested arrays.
 * C: Must use recursion.
 * E: Return 0 for an empty array
 */

var arraySum = function(array, output = 0) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      output += arraySum(array[i]);
    } else {
      output += array[i];
    }
  }
  return output;
};

// 4. Check if a number is even.

/**
 * I: The function receives a number.
 * O: The function returns true if the input number is even; otherwise, false.
 * C: Must use recursion. Cannot use modulus.
 * E: N/A
 */

var isEven = function(n) {
  // BASE:
  // Check if n is 0
  if (n === 0) {
    // Return true
    return true;
  // Check else if n is 1
  } else if (n === 1) {
    // Return false
    return false;
  }
  // RECURSION:
  // Check if n is greater than 1
  if (n > 1) {
    // Return the recursive call of isEven() with n - 2
    return isEven(n - 2);
  // Check else if n is negative
  } else if (n < 0) {
    // Return the recursive call of isEven() with n + 2
    return isEven(n + 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21

/**
 * I: The function receives a number representing an integer.
 * O: The function returns a number representing the sum of all integers below the 
 *    input number (exclusive).
 * C: Must use recursion.
 * E: If input number is negative, return the sum of all integers above the input
 *    number until it reaches zero.
 */

var sumBelow = function(n, output = 0) {
  // BASE:
  // Check if n is -1, 0, or 1
  if (n === -1 || n === 0 || n === 1) {
    // Return output
    return output;
  }
  // RECURSION:
  // Check if n is negative
  if (n < 0) {
    // Add n + 1 to output and reassign
    output += n + 1;
    // Return recursive call of sumBelow() with n + 1 & output
    return sumBelow(n + 1, output);
  }
  // Add n - 1 to output and reassign
  output += n - 1;
  // Return recursive call of sumBelow() with n - 1 & output
  return sumBelow(n - 1, output);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]

/**
 * I: The function receives two numbers representing a range.
 * O: The function returns an array of all of the integers within the range
 *    indicated by the input numbers (exluding the input numbers).
 * C: Must use recursion.
 * E: If the first argument is larger than the second, the output array should 
 *    be in reverse order.
 */

var range = function(x, y, output = []) {
  // BASE:
  // Check if the absolute value of x - y is less than or equal to 1
  if (Math.abs(x - y) <= 1) {
    // Return the output
    return output;
  }
  // RECURSION:
  // Check if x < y
  if (x < y) {
    // Push x + 1 into output
    output.push(x + 1);
    // Return recursive call of range() with x + 1, y & output
    return range(x + 1, y, output);
  }
  // Push x - 1 into output
  output.push(x - 1);
  // Return recursive call of range() with x - 1, y, & output
  return range(x - 1, y, output);
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

/**
 * I: The function receives two numbers, one represents a base and the other a power to
 *    raise the base to.
 * O: The function returns a number representing the input base number raised to the
 *    input power number.
 * C: Must use recursion.
 * E: N/A
 */

var exponent = function(base, exp) {
  // BASE:
  // Check if exp is 0
  if (exp === 0) {
    // Return output
    return 1
  }
  // RECURSION:
  // Check if exp is negative
  if (exp < 0) {
    // Return the recursive call of exponent() with base & exp + 1, then divide by base
    return exponent(base, exp + 1) / base;
  }
  // Return base times the recursive call of exponent() with base & exp - 1
  return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false

/**
 * I: The function receives a number.
 * O: The function returns true if the input number is a power of 2; otherwise, return 
 *    false.
 * C: Must use recursion.
 * E: N/A
 */

var powerOfTwo = function(n) {
  // BASE:
  // Check if n is less than 1
  if (n < 1) {
    // Return false
    return false;
  // Check else if n is 1
  } else if (n === 1) {
    // Return true
    return true;
  }
  // RECURSION:
  // Return the recursive call of powerOfTwo() with n / 2
  return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.

/**
 * I: The function receives a string.
 * O: The function returns a new string that is the input string in reverse.
 * C: Must use recursion.
 * E: N/A
 */

var reverse = function(string) {
  // BASE:
  // Check if string's length is 0
  if (string.length === 0) {
    // Return ''
    return '';
  }
  // RECURSION:
  /* Return string[string.length - 1] (the last character) concatenated with the 
     recursive call of reverse() with string.slice(0, string.length - 1) */
  return string[string.length - 1] + reverse(string.slice(0, string.length - 1));
};

// 10. Write a function that determines if a string is a palindrome.

/**
 * I: The function receives a string.
 * O: The function returns true if the string is a palindrome; otherwise, false.
 * C: Must use recursion.
 * E: N/A
 */

/* Set a second default parameter testString to the first input string replacing all 
   white spaces with empty strings and forcing it to lower case */
var palindrome = function(string, testString = string.replaceAll(' ', '').toLowerCase()) {
  // BASE:
  // Check if testString's length is less than 2
  if (testString.length < 2) {
    // Return true
    return true;
  }
  // RECURSION:
  // Check if the first and last character of testString are different
  if (testString[0] !== testString[testString.length - 1]) {
    // Return false
    return false;
  }
  /* Return the recursive call of palindrome() with null (since string is no longer 
     needed) & testString.slice(1, testString.length - 1) */
  return palindrome(null, testString.slice(1, testString.length - 1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

/**
 * I: The function receives two numbers.
 * O: The function returns the remainder of the first number divided by the second
 *    number.
 * C: Must use recursion. Cannot use the modulo operator (%).
 * E: N/A
 */

var modulo = function(x, y) {
  if (x === 0 && y === 0) {
    return NaN;
  } else if (x === 0) {
    return x;
  } else if (x < 0 && y < 0 && x > y) {
    return x;
  } else if (x < 0 && y > 0 && -x < y) {
    return x;
  } else if (x > 0 && y > 0 && x < y) {
    return x;
  }
  else if (x < 0 && y < 0) {
    return modulo(x - y, y);
  } else if (x < 0 && y > 0) {
    return modulo(x + y, y);
  } else {
    return modulo(x - y, y);
  }
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').

/**
 * I: The function receives two numbers.
 * O: The function returns the product of the two numbers.
 * C: Must use recursion. Cannot use the * operator or JavaScript's Math object. Do not
 *    leave comments.
 * E: N/A
 */

// BASE:
// Check if either x OR y is 0
  // Return 0
// RECURSION:
// Check if both x AND y are negative (then we want a positive solution).
  /* Return -x (positive) plus the recursive call of multiply() with -x (positive) & 
     -y (positive) - 1 */
// Check else if ONLY ONE of the arguments is negative
  // Check if x is negative
    // Return x (negative) plus the recursive call of multiply() with x & y - 1 
  // Check else if y is negative
    // Return -x (negative) plus the recursive call of multiply() with x & y + 1 (y stays negative)
// After all checks, return x (positive) plus the recursive call of multiply() with x & y -1 (positive)

var multiply = function(x, y) {
  if (y === 0 || x === 0) {
    return 0;
  }
  if (x < 0 && y < 0) {
    return -x + multiply(-x, -y - 1);
  } else if (x < 0 || y < 0) {
    if (x < 0) {
      return x + multiply(x, y - 1);
    } else if (y < 0) {
      return -x + multiply(x, y + 1);
    }
  }
  return x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.

/**
 * I: 
 * O: 
 * C: 
 * E: 
 */

var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm

/**
 * I: 
 * O: 
 * C: 
 * E: 
 */

var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true

/**
 * I: The function receives two strings.
 * O: The function returns true if both input strings are identical; otherwise, false.
 * C: Must use recursion.
 * E: N/A
 */

var compareStr = function(str1, str2) {
  // BASE:
  // Check if the lengths of BOTH str1 & str2 are 0
  if (str1.length === 0 && str2.length === 0) {
    // Return true
    return true;
  // Check else if str1[0] is NOT the same character as str2[0]
  } else if (str1[0] !== str2[0]) {
    // Return false
    return false;
  }
  // RECURSION
  // Return the recursive call of compareStr() with str1.slice(1) & str2.slice(1)
  return compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.

/**
 * I: The function receives a string.
 * O: The function returns an array where each letter of the input string occupies an
 *    index of the array.
 * C: Must use recursion.
 * E: N/A
 */

var createArray = function(str, output = []){
  // BASE:
  // Check if str's length is 0
  if (str.length === 0) {
    // Return output
    return output;
  }
  // RECURSION
  // Assign output[output.length] (a new index at the end of output) to str[0]
  output[output.length] = str[0];
  // Return the recursive call of createArray() with str.slice(1) & output
  return createArray(str.slice(1), output);
};

// 17. Reverse the order of an array

/**
 * I: The function receieves an array.
 * O: The function returns a new array of the elements in the input array in reverse order.
 * C: Must use recursion.
 * E: N/A
 */

var reverseArr = function (array, output = []) {
  // BASE: 
  // Check if array's length is 0
  if (array.length === 0) {
    // Return output
    return output;
  }
  // RECURSION:
  // Unshift array[0] into output array
  output.unshift(array[0]);
  // Return the recursive call of reverseArr() with array.slice(1) & output
  return reverseArr(array.slice(1), output);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]

/**
 * I: The function receives a value and a number representing the length of an array.
 * O: The function returns an array with the input length and every element set to the
 *    input value.
 * C: Must use recursion.
 * E: N/A
 */

var buildList = function(value, length, output = []) {
  // BASE:
  // Check if length is 0
  if (length === 0) {
    // Return output
    return output;
  }
  // RECURSION
  // Push value into output
  output.push(value);
  // Return the recursive call of buildList() with value, length - 1, & output
  return buildList(value, length - 1, output);
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2

/**
 * I: The function receives an array and a value.
 * O: The function returns a number representing the number of time the input value
 *    appears in the input array.
 * C: Must use recursion.
 * E: N/A
 */

var countOccurrence = function(array, value, total = 0) {
  // BASE:
  // Check if array's length is 0
  if (array.length === 0) {
    // Return total
    return total;
  }
  // RECURSION:
  // Check if array[0] is strictly equal to value
  if (array[0] === value) {
    // Increment total by 1
    total++;
  }
  // Return the recursive call of countOccurence() with array.slice(1), value, total
  return countOccurrence(array.slice(1), value, total);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]

/**
 * I: The function receives an array and a function.
 * O: The function returns a new array of the elements of the input array passed through
 *    the input function.
 * C: Must use recursion.
 * E: N/A
 */

var rMap = function(array, callback, output = []) {
  // BASE:
  // Check if array's length is 0
  if (array.length === 0) {
    // Return output
    return output;
  }
  // RECURSION:
  // Push the result of invoking callback() with array[0] into output array
  output.push(callback(array[0], 0, array));
  // Return the recursive call of rMap() with array.slice(1), callback, output
  return rMap(array.slice(1), callback, output);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2

/**
 * I: 
 * O: 
 * C: 
 * E: 
 */

var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1

/**
 * I: 
 * O: 
 * C: 
 * E: 
 */

var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.

/**
 * I: 
 * O: 
 * C: 
 * E: 
 */

var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.

/**
 * I: 
 * O: 
 * C: 
 * E: 
 */

var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2

/**
 * I: The function receives a nonnegative integer number.
 * O: The function returns the number in the input number position of the Fibonacci
 *    Sequence.
 * C: Must use recursion.
 * E: Return null when invoked with a negative integer.
 */

var nthFibo = function(n) {
  // EDGE CASE:
  // Check if n is negative
  if (n < 0) {
    // Return null
    return null;
  }
  // BASE:
  // Check if n is 0 or 1
  if (n === 0 || n === 1) {
    // Return n
    return n;
  }
  // RECURSION:
  // Return the sum of recursive calling nthFibo(): nthFibo(n - 1) + nthFibo(n - 2)
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

/**
 * I: The function receives an array of strings representing words.
 * O: The function returns a new array containing each word in the input array capitalized.
 * C: Must use recursion.
 * E: N/A
 */

var capitalizeWords = function(array, output = []) {
  // BASE:
  // Check if array's length is 0
  if (array.length === 0) {
    // Return output
    return output;
  }
  // RECURSION:
  // Push array[0].toUpperCase() into output array
  output.push(array[0].toUpperCase());
  // Return the recursive call of capitalizeWords() with array.slice(1) & output
  return capitalizeWords(array.slice(1), output);
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']

/**
 * I: The function receives an array of strings.
 * O: The function returns a new array of the strings in the input array with their 
 *    first letter capitalized.
 * C: Must use recursion.
 * E: N/A
 */

var capitalizeFirst = function(array, output = []) {
  // BASE:
  // Check if array's length is 0
  if (array.length === 0) {
    // Return output
    return output;
  }
  // RECURSION:
  /* Push the first letter of array[0] capitalized concatenated with the rest of 
     array[0] into output array */
  output.push(array[0][0].toUpperCase() + array[0].slice(1));
  // Return the recursive call of capitalizeFirst() with array.slice(1) & output
  return capitalizeFirst(array.slice(1), output);
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10

/**
 * I: 
 * O: 
 * C: 
 * E: 
 */

var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]

/**
 * I: 
 * O: 
 * C: 
 * E: 
 */

var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}

/**
 * I: The function receives a string.
 * O: The function returns an object contain properties that tally each letter of the
 *    input string.
 * C: Must use recursion.
 * E: N/A
 */

var letterTally = function(str, obj = {}) {
  // BASE: 
  // Check if str's length is 0
  if (str.length === 0) {
    // Return obj
    return obj;
  }
  // RECURSION:
  // Iterate through obj with a for-in loop
  for (let key in obj) {
    // Check if key === str[0]
    if (key === str[0]) {
      // Add 1 to obj[str[0]] and reassign
      obj[str[0]] += 1;
      // Return the recursive call of letterTally() with str.slice(1) & obj
      return letterTally(str.slice(1), obj);
    }
  }
  // Assign obj[str[0]] = 1
  obj[str[0]] = 1;
  // Return the recursive call of letterTally() with str.slice(1) & obj
  return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]

/**
 * I: The function receives an array.
 * O: The function returns a new array that eliminates consecutive duplicates in the 
 *    input array.
 * C: Must use recursion.
 * E: N/A
 */

var compress = function(list, output = []) {
  // BASE:
  // Check if list's length is 0
  if (list.length === 0) {
    // Return output
    return output;
  }
  // RECURSION:
  // Check if list[0] !== output[output.length - 1](the last element in output)
  if (list[0] !== output[output.length - 1]) {
    // Pust list[0] into output array
    output.push(list[0]);
  }
  // Return the recursive call of compress() with list.slice(1) & output
  return compress(list.slice(1), output);
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]

/**
 * I: 
 * O: 
 * C: 
 * E: 
 */

var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]

/**
 * I: The function receives an array of numbers.
 * O: The function returns a new array which reduces a series of zeros in the input
 *    array to a single zero.
 * C: Must use recursion.
 * E: N/A
 */

var minimizeZeroes = function(array, output = []) {
  // BASE:
  // Check if array's length is 0
  if (array.length === 0) {
    // Return output
    return output;
  }
  // RECURSION:
  /* Check if (output[output.length - 1](the last element of output) !== 0 AND 
     array[0] === 0) OR array[0] !== 0 */
  if ((output[output.length - 1] !== 0 && array[0] === 0) || array[0] !== 0) {
    // Push array[0] into output array
    output.push(array[0]);
  }
  // Return the recursive call of minimizeZeroes() with array.slice(1) & output
  return minimizeZeroes(array.slice(1), output);
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]

/**
 * I: The function receives an array of numbers.
 * O: The function returns a new array of each element in the input array alternating 
 *    between positive and negative starting with positive.
 * C: Must use recursion.
 * E: N/A
 */

var alternateSign = function(array, output = []) {
  // BASE:
  // Check if array's length is 0
  if (array.length === 0) {
    // Return output
    return output;
  }
  // RECURSION:
  // Check if array[0] is positive
  if (array[0] > 0) {
    // Push array[0] into output array
    output.push(array[0]);
  } else {
    // Push -array[0] into output array
    output.push(-array[0]);
  }
  // Check if array[1] is undefined
  if (array[1] === undefined) {
    // Return the recursive call of alternateSign() with array.slice(1) & output
    return alternateSign(array.slice(1), output);
  // Check else if array[1] < 0
  } else if (array[1] < 0) {
    // Push array[1] into output array
    output.push(array[1]);
  } else {
    // Push -array[1] into output array
    output.push(-array[1]);
  }
  // Return the recursive call of alternateSign() with array.slice(2) & output
  return alternateSign(array.slice(2), output);
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"

/**
 * I: The function receives a string containing digits.
 * O: The function returns a new string that copies the input string with the digits
 *    replaces by their word equivalent. Assume all numbers are single digits.
 * C: Must use recursion.
 * E: N/A
 */

var numToText = function(str, strArray = str.split(' '), output = []) {
  // SET-UP:
  let numArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  // BASE:
  // Check if strArray's length is 0
  if (strArray.length === 0) {
    // Return output.join(' ')
    return output.join(' ');
  }
  // RECURSION:
  // Check if +strArray[0] is a truthy value OR +strArray === 0
    // + turns number strings into numbers (nonzero numbers are truthy values)
    // NaN is a falsey value
    // 0 is falsey so you'll need to check for 0
  // True, Push numArray[+strArray[0]] into output array; pulls word equivalent of number to put into output
  // False, Push strArray[0] into output array
  (+strArray[0] || +strArray === 0) ? output.push(numArray[+strArray[0]]) : output.push(strArray[0]);
  /* Return the recursive call of numToText() with null(string is no longer needed), 
     strArray.slice(1), & output */
  return numToText(null, strArray.slice(1), output);
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.

/**
 * I: 
 * O: 
 * C: 
 * E: 
 */

var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

/**
 * I: 
 * O: 
 * C: 
 * E: 
 */

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]

/**
 * I: 
 * O: 
 * C: 
 * E: 
 */

var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
