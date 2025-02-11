
1. Find Element Occurrence in Array
function findOccurrence(arr, value) {
  return arr.filter(item => item === value).length;
}


2. Sum of Array Elements
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}


3. Flatten Nested Arrays
function flattenArray(arr) {
  return arr.reduce((flat, item) => flat.concat(Array.isArray(item) ? flattenArray(item) : item), []);
}


4. Remove Duplicates from Array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}


5. Check if Array is Empty
function isEmptyArray(arr) {
  return arr.length === 0;
}


6. Find Maximum Value in Array
function maxInArray(arr) {
  return Math.max(...arr);
}


7. Find Minimum Value in Array
function minInArray(arr) {
  return Math.min(...arr);
}


8. Sort Array Alphabetically
function sortAlphabetically(arr) {
  return arr.sort((a, b) => a.localeCompare(b));
}


9. Merge Two Arrays
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}


10. Deep Clone an Object
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}


11. Find Object by Key in Array
function findObjectByKey(arr, key, value) {
  return arr.find(obj => obj[key] === value);
}


12. Generate Random Number Between Range
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


13. Convert String to Title Case
function toTitleCase(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}


14. Check if String Contains Substring
function containsSubstring(str, substring) {
  return str.includes(substring);
}


15. Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}


16. Convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}


17. Capitalize First Letter of Each Word
function capitalizeWords(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}


18. Convert String to Camel Case
function toCamelCase(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => index === 0 ? match.toLowerCase() : match.toUpperCase()).replace(/\s+/g, '');
}


19. Convert Object to Query String
function objectToQueryString(obj) {
  return Object.keys(obj).map(key => `${key}=${obj[key]}`).join('&');
}


20. Debounce Function
function debounce(fn, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}


21. Throttle Function
function throttle(fn, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}


22. Generate UUID (Unique Identifier)
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


23. Check if a Number is Prime
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}


24. Count Words in a String
function countWords(str) {
  return str.trim().split(/\s+/).length;
}


25. Deeply Compare Two Objects
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) return false;
  
  let keys1 = Object.keys(obj1), keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  
  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
  }
  return true;
}


26. Format Date to 'YYYY-MM-DD'
function formatDate(date) {
  let d = new Date(date);
  return d.toISOString().split('T')[0];
}


27. Check if a Value is an Array
function isArray(value) {
  return Array.isArray(value);
}


28. Find Index of Object by Key in Array
function findIndexByKey(arr, key, value) {
  return arr.findIndex(obj => obj[key] === value);
}


29. Sort Array of Objects by Key
function sortByKey(arr, key) {
  return arr.sort((a, b) => a[key] > b[key] ? 1 : -1);
}


30. Convert Object to Form Data
function objectToFormData(obj) {
  let formData = new FormData();
  for (let key in obj) {
    formData.append(key, obj[key]);
  }
  return formData;
}


31. Convert Number to Words
function numberToWords(num) {
  const ones = ['','one','two','three','four','five','six','seven','eight','nine'];
  const teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const tens = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  const thousands = ['', 'thousand', 'million', 'billion'];
  
  if (num === 0) return 'zero';
  
  let result = '';
  let i = 0;
  while (num > 0) {
    if (num % 1000 !== 0) {
      result = helper(num % 1000) + thousands[i] + ' ' + result;
    }
    num = Math.floor(num / 1000);
    i++;
  }
  
  function helper(n) {
    if (n === 0) return '';
    if (n < 10) return ones[n] + ' ';
    if (n < 20) return teens[n - 10] + ' ';
    if (n < 100) return tens[Math.floor(n / 10)] + ' ' + helper(n % 10);
    return ones[Math.floor(n / 100)] + ' hundred ' + helper(n % 100);
  }
  return result.trim();
}


32. Escape HTML Special Characters
function escapeHTML(str) {
  const div = document.createElement('div');
  div.innerText = str;
  return div.innerHTML;
}


33. Unescape HTML Special Characters
function unescapeHTML(str) {
  const div = document.createElement('div');
  div.innerHTML = str;
  return div.innerText;
}


34. Check if an Email is Valid
function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}


35. Find Common Elements Between Arrays
function findCommonElements(arr1, arr2) {
  return arr1.filter(value => arr2.includes(value));
}


36. Remove All Falsey Values from Array
function removeFalseyValues(arr) {
  return arr.filter(Boolean);
}


37. Generate Random Hex Color
function randomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}


38. Convert Decimal to Binary
function decimalToBinary(decimal) {
  return (decimal >>> 0).toString(2);
}


39. Convert Binary to Decimal
function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}


40. Find if String is a Palindrome
function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  return cleanedStr === cleanedStr.split('').reverse().join('');
}


41. Count Vowels in a String
function countVowels(str) {
  return (str.match(/[aeiouAEIOU]/g) || []).length;
}


42. Find Intersection of Two Arrays
function arrayIntersection(arr1, arr2) {
  return arr1.filter(value => arr2.includes(value));
}


43. Find Union of Two Arrays
function arrayUnion(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}


44. Find the Difference Between Two Arrays
function arrayDifference(arr1, arr2) {
  return arr1.filter(value => !arr2.includes(value));
}


45. Check if a String is a Valid URL
function isValidURL(str) {
  const regex = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,6}(\/[^\s]*)?$/i;
  return regex.test(str);
}


46. Get Query Parameter by Key
function getQueryParam(key) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(key);
}


47. Format Currency (USD)
function formatCurrency(amount) {
  return '$' + parseFloat(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


48. Check if a Value is an Object
function isObject(value) {
  return typeof value === 'object' && value !== null;
}


49. Get Random Item from Array
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


50. Remove Item by Index from Array
function removeItemByIndex(arr, index) {
  arr.splice(index, 1);
  return arr;
}


51. Find Key by Value in Object
function findKeyByValue(obj, value) {
  return Object.keys(obj).find(key => obj[key] === value);
}


52. Convert String to Kebab Case
function toKebabCase(str) {
  return str
    .replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)
    .replace(/\s+/g, '-')
    .toLowerCase();
}


53. Get Last Item in Array
function getLastItem(arr) {
  return arr[arr.length - 1];
}


54. Check if a Number is Even
function isEven(num) {
  return num % 2 === 0;
}


55. Check if a Number is Odd
function isOdd(num) {
  return num % 2 !== 0;
}


56. Convert Array to Object
function arrayToObject(arr, key) {
  return arr.reduce((obj, item) => {
    obj[item[key]] = item;
    return obj;
  }, {});
}


57. Find GCD (Greatest Common Divisor) of Two Numbers
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}


58. Find LCM (Least Common Multiple) of Two Numbers
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}


59. Get Date Difference in Days
function getDateDifference(date1, date2) {
  const diffTime = Math.abs(new Date(date2) - new Date(date1));
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}


60. Format Phone Number
function formatPhoneNumber(phone) {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}


61. Pad String to a Specific Length
function padString(str, length, char = ' ') {
  return str.padStart(length, char);
}


62. Get the Day of the Week
function getDayOfWeek(date) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[new Date(date).getDay()];
}


63. Get Current Timestamp
function getCurrentTimestamp() {
  return Math.floor(Date.now() / 1000);
}


64. Check if an Object is Empty
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}


65. Create a Range of Numbers
function createRange(start, end, step = 1) {
  const range = [];
  for (let i = start; i <= end; i += step) {
    range.push(i);
  }
  return range;
}


66. Remove Whitespace from String
function removeWhitespace(str) {
  return str.replace(/\s+/g, '');
}


67. Get the File Extension from File Name
function getFileExtension(filename) {
  return filename.split('.').pop();
}


68. Find the Longest String in an Array
function findLongestString(arr) {
  return arr.reduce((longest, current) => current.length > longest.length ? current : longest, '');
}


69. Check if a Number is a Perfect Square
function isPerfectSquare(num) {
  return Math.sqrt(num) % 1 === 0;
}


70. Count Occurrences of a Substring in a String
function countSubstringOccurrences(str, substring) {
  return (str.match(new RegExp(substring, 'g')) || []).length;
}


71. Find the Average of an Array
function average(arr) {
  return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}


72. Convert String to Snake Case
function toSnakeCase(str) {
  return str
    .replace(/\s+/g, '_')
    .replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
    .toLowerCase();
}


73. Get the Unique Characters in a String
function uniqueChars(str) {
  return [...new Set(str)].join('');
}


74. Convert RGB to Hex Color
function rgbToHex(r, g, b) {
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
}


75. Convert Hex to RGB
function hexToRgb(hex) {
  const bigint = parseInt(hex.replace('#', ''), 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255
  };
}


76. Check if Number is a Power of Two
function isPowerOfTwo(num) {
  return (num & (num - 1)) === 0 && num > 0;
}


77. Find Index of a Value in Array
function findIndex(arr, value) {
  return arr.indexOf(value);
}


78. Merge Two Objects
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}


79. Escape Special Characters in RegExp
function escapeRegExp(str) {
  return str.replace(/[.*+?^=!:${}()|\[\]\/\\]/g, '\\$&');
}


80. Check if Year is a Leap Year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}


81. Find the Missing Number in an Array
function findMissingNumber(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}


82. Repeat a String N Times
function repeatString(str, times) {
  return str.repeat(times);
}


83. Check if a String is a Valid JSON
function isValidJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}


84. Get the Difference Between Two Arrays
function arrayDifference(arr1, arr2) {
  return arr1.filter(item => !arr2.includes(item));
}


85. Convert String to ASCII
function stringToAscii(str) {
  return [...str].map(char => char.charCodeAt(0)).join(' ');
}


86. Convert ASCII to String
function asciiToString(ascii) {
  return ascii.split(' ').map(code => String.fromCharCode(code)).join('');
}


87. Convert an Array to a Set
function arrayToSet(arr) {
  return new Set(arr);
}


88. Sort Array in Descending Order
function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
}


89. Check if a String is a Valid Date
function isValidDate(date) {
  return !isNaN(Date.parse(date));
}


90. Find the Factorial of a Number
function factorial(num) {
  return num <= 1 ? 1 : num * factorial(num - 1);
}


91. Convert Object to Array
function objectToArray(obj) {
  return Object.entries(obj).map(([key, value]) => ({ key, value }));
}


92. Remove All Elements from an Array
function clearArray(arr) {
  arr.length = 0;
}


93. Get the Current Date
function getCurrentDate() {
  return new Date().toLocaleDateString();
}


94. Find the Smallest Number in an Array
function min(arr) {
  return Math.min(...arr);
}


95. Check if Array Contains All Values
function containsAll(arr, values) {
  return values.every(value => arr.includes(value));
}


96. Convert Seconds to HH:MM:SS Format
function secondsToHHMMSS(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}


97. Remove All Occurrences of an Item in Array
function removeAllOccurrences(arr, value) {
  return arr.filter(item => item !== value);
}


98. Convert Object to Array of Keys
function objectKeysToArray(obj) {
  return Object.keys(obj);
}


99. Convert Object to Array of Values
function objectValuesToArray(obj) {
  return Object.values(obj);
}


100. Check if a Value is NaN
function isNotANumber(value) {
  return isNaN(value);
}