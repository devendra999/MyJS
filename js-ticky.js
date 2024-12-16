given a string, reverse each word in the sentence
----------------------
    var str = "saare jahn se acha hindustan hamara"
    var savedStr = str.split(" ").map((word) => word.split("").reverse().join(""))
    console.log(savedStr.join(" "));


how to check if an object is an array or not? provide some code
----------------------
    function checkArray(elem) {
        return Array.isArray(elem);
    }
    console.log(checkArray([]));
    console.log(checkArray({}));



how to empty an array in javascript. do not reset it and loop
----------------------
    var array = ["hello", "world"];

    array.length = 0;


how would you check if a number is an intiger ?
----------------------
var a = 12;
if(a % 1 === 0) {
    console.log("integer")
} else {
    console.log("not integer")
}


make this work duplicate  duplicatearray[1,2,3,4,5,1,2,3,4,5]
----------------------
var a = [1,2,3]
a.concat(a)


write javascript function that reverse a number
----------------------
function numberReverse(num) {
    return Number(num.toString().split("").reverse().join(""))
}

write javascript function that checks whether passed string is palindrom or not ?
----------------------
    function palindromChecker(str) {
        var reversed = str.split("").reverse().join("");
        if(reversed === str)return true
        else return false
    }
    console.log(palindromChecker("poop"))
    console.log(palindromChecker("loop"))



write javascript function that return a passed string with letters in alphabetical order
----------------------
function stringAlphbet(str) {
    return str.split("").sort().join("");
}
console.log(stringAlphbet("Devendra"))
console.log(stringAlphbet("Hello"))


write javascript function that accept  a string as a parameter and convert the first letter of each word of the string in uppercase 
----------------------
function capitaliseKaro(str) {
    var allwords = str.split(" ").map((word) =>{
        return  word.charAt(0).toUpperCase() + word.substring(1)
    });
    return allwords.join(" ")
}

capitaliseKaro("devendra kaise ho");


write javascript function to get the number of occurences of each letter in specified string
----------------------
function occurencesStr(str) {
    var occurences = {};
    str.split("").forEach(function(elem) {
        if(occurences.hasOwnProperty(elem) === false) {
            occurences[elem] = 1;
        } else {
            occurences[elem]++;
        }
    })
    return occurences;
}
console.log(occurencesStr("apple"));


loop an array and add all numbers of it
----------------------
var arr = [1,5,6,8,7];

var sum = 0;
arr.forEach(function(elem) {
    sum = sum + elem
})


in an array of numbers and strings, only add those numbers which are not strings
----------------------
var arr = ["dfdf", 12, "dfdf", 4, 5, "dfe", 3];
var sum = 0;

arr.forEach((function(elem) {
    if(typeof elem === "number") sum = sum + elem
}))

loop an array of objects and remove all objects which don't have gender's value male
----------------------
var arr = [
    {
        name: "devendra",
        gender: 'male'
    },
    {
        name: "shivani",
        gender: 'female'
    },
    {
        name: "ashoki",
        gender: 'nonspecified'
    },
    {
        name: "avinya",
        gender: 'female'
    }
]

var newArr = arr.filter((e) => e.gender === 'male')

write a javascript function clone an array
----------------------
function cloneArray(arr) {
    return arr.map((e) => e)
}

var newArray = cloneArray([1,2,3]);


write a javascript function which accept an argument and return the type
note: there are six possible values that type of return : object,boolean, function, number, string and undefined
----------------------
function typeTeller(elem) {
    return typeof elem;
}

console.log(typeTeller([]));
console.log(typeTeller(12));
console.log(typeTeller("12"));
console.log(typeTeller(true));
console.log(typeTeller(undefined));
console.log(typeTeller(function(){}));


write a javascript function to get the first element of an array. passing a parameter 'n' will return the first 'n' elements  of the array.
----------------------
function retrive(arr, n=1) {
    if(n <= arr.length) {
        for(var i = 0; i<n; i++) {
            console.log(arr[i]);
        }
    } else {
        console.log(n+ "to elements nahi he")
    }
}
retrive([1,2,3,4,5], 4)


write a javascript function to get the last element of an array. passing a parameter 'n' will return the last 'n' elements  of the array.
----------------------
function retrive(arr, n=1) {
    if(n <= arr.length) {
        for(var i = 0; i<n; i++) {
            console.log(arr[arr.length - 1 - i]);
        }
    } else {
        console.log(n+ "to elements nahi he")
    }
}
retrive([1,2,3,4,5], 2)


write a javascript function to find the most frequent item of an array // kon sa item jyada bar he
----------------------
function frequency(arr) {
    var frq = {};
    arr.forEach(function(elem) {
        if(frq.hasOwnProperty(elem)) frq[elem]++;
        else frq[elem] = 1;
    })
    var ans = Object.keys(frq).reduce(function(acc, num) {
        return frq[acc] > frq[num] ? acc : num;
    });
    console.log(ans)
}
frequency([1,2,3,4,5,6,7,84,24,2,43,5,1,2,1,1,1,2]);


write a javascript function to shuffle an array // position change karna
----------------------
function suffleKaro(arr) {
    var totalSuffleArea = arr.length;
    while(totalSuffleArea > 0) {
        totalSuffleArea--;
        var indexTobeExchanged = Math.floor(Math.random() * totalSuffleArea);
        var temp = arr[totalSuffleArea];
        arr[totalSuffleArea] = arr[indexTobeExchanged];
        arr[indexTobeExchanged] = temp;
    }
    return arr;
}
console.log(suffleKaro([1,2,3,4,5,6,7]));


write a javascript program to compute the union of two arrays 
----------------------
function union(arr1, arr2){
    return [...new Set(arr1.concat(arr2))];
}
console.log(union([1,2,3,1,2], [5,1,2,4,6]))

OR

function union(arr1, arr2){
    return [...new Set([...arr1, ...arr2])];
}
console.log(union([1,2,3,1,2], [5,1,2,4,6]))



const obj = {
    a: 1,
    b: 2,
    c: 3
  };
  
  const key = "b";
  
  delete obj[key];
  
  console.log(obj); // { a: 1, c: 3 }

------------

const obj = {
    prop: 1,
    method() {
        return this.prop;
    }
};

const newObj = { prop: 2 };

console.log(obj.method.call(newObj)); // 2

------------

const a = [];
const b = [];

a[0] = b;
b[0] = a;

console.log(a[0][0]); // Error: Maximum call stack size exceeded

------------

console.log([] == []); // false
console.log([] === []); // false
console.log({} == {}); // false
console.log({} === {}); // false

------------

var a = 1;
function foo() {
  console.log(a);
  var a = 2;
}
foo(); // undefined


------------

console.log(typeof null); // object
console.log(typeof undefined); // undefined

------------
console.log(1 + '1'); // 11 // except + operator convert string to number
console.log('1' + 1); // 11 // except + operator convert string to number
console.log(1 - '1'); // 0 // -, /, and * this operation convert string to number
console.log('1' - 1); // 0 // -, /, and * this operation convert string to number

------------

var a = [1, 2, 3];
var b = a;
b[0] = 99;

console.log(a); // [ 99, 2, 3 ]
console.log(b); // [ 99, 2, 3 ]
// b does not create a new copy of the array. Instead, it copies the reference to the array a into b. So, both a and b now refer to the same array in memory.

------------ 
console.log([] + []); // ''
console.log([] + {}); // [object Object]
console.log({} + []); // [object Object]
console.log({} + {}); // [object Object]
console.log([] == ![]); // true
//  {} is evaluated as an empty object, which is converted to the string "[object Object]".
------------

let x = 10;
let y = 20;

function foo() {
  console.log(x);
  let x = 30;
}

foo(); // ReferenceError: Cannot access 'x' before initialization

------------

const obj = {
    value: 10,
    increment() {
      this.value++;
    }
  };
  
  const newObj = obj;
  newObj.increment();
  
  console.log(obj.value);
// You create a new variable newObj and assign it the reference to obj. This means newObj and obj now refer to the same object in memory. So, any change to newObj will also affect obj because they point to the same underlying object.
  

------------
let a = 1;
let b = a;
a = 2;

console.log(b); // 1
// Note that this is not a reference assignment, since a is a primitive value (a number). So, b gets a copy of the value of a, which is 1. Now, b = 1 and a = 1.

------------
Qustion : difference between null and undefined 
  undefined
    - A variable that has been declared but not assigned a value is automatically assigned the value undefined.
    - undefined is its own type.

    let x;
    console.log(x); // undefined, because x is declared but not assigned

    function foo() {
    // no return statement
    }
    console.log(foo()); // undefined, because foo() doesn't return anything

    const obj = {};
    console.log(obj.nonExistentProperty); // undefined, because property doesn't exist

  null
    - null represents the intentional absence of any object value. It is explicitly assigned to variables to indicate that they should not have a value (or that they are "empty").
    - null is of type object (this is a known quirk in JavaScript).

    let x = null;
    console.log(x); // null, explicitly assigned

    let obj = { name: "John" };
    obj = null; // clear the reference to the object
    console.log(obj); // null, explicitly set to null


    example comparison
    let a;
    let b = null;

    console.log(a === undefined); // true, a is undefined
    console.log(b === null);      // true, b is null

    console.log(a == b);          // true, because undefined == null (loose equality)
    console.log(a === b);         // false, because undefined and null are of different types



------------

console.log(1 + '1'); // 11
console.log('1' + 1); // 11
console.log(1 + + '1'); // 2 
console.log(+'1' + 1); // 2
// + '1' becomes 1, and then you add 1 + 1, which gives 2.


------------

let x = 10;
let y = '10';

console.log(x == y); // true - number and string check value is same or not
console.log(x === y); // false


------------
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false

------------

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const first = outer();
const second = outer();

first();  // 1
first();  // 2
second(); // 1
first();  // 3

------------


------------

------------



------------


------------

------------



------------


------------

------------



------------


------------

------------



------------


------------

------------



------------


------------

------------



------------


------------

------------



------------


------------

------------



------------


------------

------------



------------


------------

------------



------------


------------


























