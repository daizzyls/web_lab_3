/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(num) {
  return num >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a , b ,c ) {
  let max = a;
  if (a < b) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 *
 * @param {Position} queen - The position of the queen.
 * @param {Position} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen , king) {

  if ((queen.y - king.y) === 0
    || (queen.x - king.x) === 0
    || (queen.y - king.y) * (queen.y - king.y) === (queen.x - king.x) * (queen.x - king.x))
  {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
 function isIsoscelesTriangle(a, b, c) {
   const exists = a > 0 && b > 0 && c > 0;
   exists = exists
     && a + b > c
     && a + c > b
     && b + c > a;

   const hasEqualSides = a === b || b === c || a === c;

   return exists && hasEqualSides;
 }

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let result = '';
   let rest = num;

   while (rest >= 10) {
     result += 'X';
     rest -= 10;
   }

   if (rest === 9) {
     result += 'IX';
     rest = 0;
   }

   if (rest >= 5) {
     result += 'V';
     rest -= 5;
   }

   if (rest === 4) {
     result += 'IV';
     rest = 0;
   }

   while (rest >= 1) {
     result += 'I';
     rest -= 1;
   }

   return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
 function convertNumberToString(numberStr) {
   let result = '';

   for (let i = 0; i < numberStr.length; i += 1) {
     const ch = numberStr[i];
     let word = '';

     if (ch === '0') word = 'zero';
     else if (ch === '1') word = 'one';
     else if (ch === '2') word = 'two';
     else if (ch === '3') word = 'three';
     else if (ch === '4') word = 'four';
     else if (ch === '5') word = 'five';
     else if (ch === '6') word = 'six';
     else if (ch === '7') word = 'seven';
     else if (ch === '8') word = 'eight';
     else if (ch === '9') word = 'nine';
     else if (ch === '-') word = 'minus';
     else if (ch === '.' || ch === ',') word = 'point';

     if (i > 0) {
       result += ' ';
     }
     result += word;
   }

   return result;
 }

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
 function isPalindrome(str) {
   for (let i = 0; i < str.length / 2; i += 1) {
     if (str[i] !== str[str.length - 1 - i]) {
       return false;
     }
   }
   return true;
 }

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  count = 0;
  for (let i = 0; i < str.length - 1; ++i){
    if (str[i] === letter) { ++count; }
  }
  return count;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
 function isContainNumber(num, digit) {
   let rest = num;

   if (rest === 0) {
     return digit === 0;
   }

   while (rest > 0) {
     if (rest % 10 === digit) {
       return true;
     }
     rest = (rest - (rest % 10)) / 10;
   }

   return false;
 }

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i += 1) {
    total += arr[i];
  }

  let left = 0;
  for (let i = 0; i < arr.length; i += 1) {
    const right = total - left - arr[i];
    if (left === right) {
      return i;
    }
    left += arr[i];
  }

  return -1;
}
/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
 function getSpiralMatrix(size) {
   const matrix = [];
   for (let i = 0; i < size; i += 1) {
     matrix[i] = [];
   }

   let top = 0;
   let bottom = size - 1;
   let left = 0;
   let right = size - 1;
   let n = 1;

   while (top <= bottom && left <= right) {
     for (let j = left; j <= right; j += 1) {
       matrix[top][j] = n;
       n += 1;
     }
     top += 1;

     for (let i = top; i <= bottom; i += 1) {
       matrix[i][right] = n;
       n += 1;
     }
     right -= 1;

     if (top <= bottom) {
       for (let j = right; j >= left; j -= 1) {
         matrix[bottom][j] = n;
         n += 1;
       }
       bottom -= 1;
     }

     if (left <= right) {
       for (let i = bottom; i >= top; i -= 1) {
         matrix[i][left] = n;
         n += 1;
       }
       left += 1;
     }
   }

   return matrix;
 }

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
 function rotateMatrix(matrix) {
   const n = matrix.length;

   for (let i = 0; i < n; i += 1) {
     for (let j = i + 1; j < n; j += 1) {
       const temp = matrix[i][j];
       matrix[i][j] = matrix[j][i];
       matrix[j][i] = temp;
     }
   }

   for (let i = 0; i < n; i += 1) {
     for (let j = 0; j < n / 2; j += 1) {
       const temp = matrix[i][j];
       matrix[i][j] = matrix[i][n - 1 - j];
       matrix[i][n - 1 - j] = temp;
     }
   }

   return matrix;
 }

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
 function sortByAsc(arr) {
   for (let i = 1; i < arr.length; i += 1) {
     const current = arr[i];

     for (let j = i - 1 ; j >= 0 && arr[j] > current; j -= 1) {
       arr[j + 1] = arr[j];

     }
     arr[j + 1] = current;
   }
   return arr;
 }

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
 function shuffleChar(str, iterations) {
   let current = str;

   for (let i = 0; i < iterations; i += 1) {
     let evens = '';
     let odds = '';

     for (let j = 0; j < current.length; j += 1) {
       if (j % 2 === 0) {
         evens += current[j];
       } else {
         odds += current[j];
       }
     }

     current = evens + odds;
   }

   return current;
 }

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 */
 function getNearestBigger(number) {

   const digits = {};
   let count = 0;
   let rest = number;
   while (rest > 0) {
     digits[count] = rest % 10;
     rest = (rest - (rest % 10)) / 10;
     count += 1;
   }

   let pivot = 1;
   while (pivot < count && digits[pivot] >= digits[pivot - 1]) {
     pivot += 1;
   }
   if (pivot === count) return number;
   let swap = 0;
   for (let i = 1; i < pivot; i += 1) {
     if (digits[i] > digits[pivot] && digits[i] < digits[swap]) {
       swap = i;
     }
   }

   const tmp = digits[pivot];
   digits[pivot] = digits[swap];
   digits[swap] = tmp;


   for (let i = 0; i < pivot; i += 1) {
     for (let j = i + 1; j < pivot; j += 1) {

       if (digits[j] > digits[i]) {
         const t = digits[i];
         digits[i] = digits[j];
         digits[j] = t;
       }
     }
   }


   let result = 0;
   for (let i = count - 1; i >= 0; i -= 1) {
     result = result * 10 + digits[i];
   }
   return result;
 }
